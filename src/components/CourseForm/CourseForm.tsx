import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { Course } from '../Courses/Course.types';
import { AuthorType } from 'src/store/authors/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { addNewCourseThunk, updateCourseThunk } from 'src/store/courses/thunk';
import { addNewAuthorThunk } from 'src/store/authors/thunk';
import { UpdateCourseType } from 'src/store/courses/types';
import { useAppDispatch } from 'src/hooks';

const CourseForm = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const courses = useSelector((state: RootState) => state.courses);
	const appDispatch = useAppDispatch();

	useEffect(() => {
		if (courseId) {
			const course = courses.find((c) => c.id === courseId);
			if (course !== null) {
				setTitle(course.title);
				setDescription(course.description);
				setDuration(course.duration);
				const courseAuthors = course.authors.map((authorId) =>
					authors.find((author) => author.id === authorId)
				);
				setCourseAuthorsList(courseAuthors);
			}
		}
	}, [courseId]);

	const authors = useSelector((state: RootState) => state.authors);
	const token = useSelector((state: RootState) => state.user.token);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthorsList] = useState<AuthorType[]>([]);
	const [courseAuthorsList, setCourseAuthorsList] = useState<AuthorType[]>([]);

	const [validationErrors, setValidationErrors] = useState({
		title: '',
		description: '',
		duration: '',
		authorName: '',
	});

	const handleAddAuthor = () => {
		if (authorName.length >= 2) {
			const existingAuthor = authors.find(
				(author) => author.name.toLowerCase() === authorName.toLowerCase()
			);

			if (existingAuthor) {
				const isAuthorInCourse = courseAuthorsList.some(
					(author) => author.id === existingAuthor.id
				);

				if (!isAuthorInCourse) {
					setCourseAuthorsList([...courseAuthorsList, existingAuthor]);
				}
			} else {
				const newAuthor: AuthorType = {
					id: '',
					name: authorName,
				};

				//dispatch(saveAuthorsAction([...authors, newAuthor]));
				//dispatch(addNewAuthorAction(newAuthor));
				appDispatch(addNewAuthorThunk(newAuthor, token));
				setCourseAuthorsList([...courseAuthorsList, newAuthor]);
			}

			setAuthorName('');
		}
	};

	const handleDeleteAuthor = (authorId) => {
		setAuthorsList(authorsList.filter((author) => author.id !== authorId));
		setCourseAuthorsList(
			courseAuthorsList.filter((author) => author.id !== authorId)
		);
	};

	const handleDurationChange = (value) => {
		const parsedValue = parseInt(value, 10);
		setDuration(isNaN(parsedValue) ? 0 : parsedValue);
	};

	const handleAddToCourseAuthors = (authorId) => {
		const selectedAuthor = authors.find((author) => author.id === authorId);
		if (selectedAuthor) {
			const isAuthorInCourse = courseAuthorsList.some(
				(author) => author.id === selectedAuthor.id
			);

			if (!isAuthorInCourse) {
				setCourseAuthorsList([...courseAuthorsList, selectedAuthor]);
			}
		}
	};

	const handleSaveCourse = () => {
		const errors = {
			title: title.trim() === '' ? 'Title is required' : '',
			description: description.trim() === '' ? 'Description is required' : '',
			duration: duration <= 0 ? 'Duration must be greater than 0' : '',
			authorName:
				courseAuthorsList.length === 0 ? 'At least one author is required' : '',
		};

		setValidationErrors(errors);

		if (Object.values(errors).some((error) => error !== '')) {
			return;
		}

		if (courseId) {
			const updatedCourse: UpdateCourseType = {
				title,
				description,
				duration,
				authors: courseAuthorsList.map((author) => author.id),
			};
			console.log('updating course');
			appDispatch(updateCourseThunk(courseId, updatedCourse, token));
		} else {
			const newCourse: Course = {
				id: '',
				title,
				description,
				duration,
				creationDate: new Date().toLocaleDateString('en-US'),
				authors: courseAuthorsList.map((author) => author.id),
			};
			//dispatch(saveAuthorsAction([...authors, ...courseAuthorsList]));
			//dispatch(addNewCourseAction(newCourse));
			appDispatch(addNewCourseThunk(newCourse, token));
			console.log('creating course');
		}

		//store.dispatch(fetchCoursesThunk());
		navigate('/courses');
	};

	return (
		<div data-testid='course-form'>
			<div className='row justify-content-center'>
				<div className='col-md-7 col-lg-8'>
					<h4 className='mb-3'>Create New Course</h4>
					<form className='needs-validation' noValidate>
						<div className='col-12'>
							<label htmlFor='title' className='form-label'>
								Title
							</label>
							<div className='input-group has-validation'>
								<input
									type='text'
									className={`form-control ${validationErrors.title && 'is-invalid'}`}
									id='title'
									placeholder='Title'
									required
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<div className='invalid-feedback'>{validationErrors.title}</div>
							</div>
						</div>

						<div className='col-12'>
							<label htmlFor='description' className='form-label'>
								Description
							</label>
							<textarea
								className={`form-control ${validationErrors.description && 'is-invalid'}`}
								id='description'
								placeholder='Description text'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<div className='invalid-feedback'>
								{validationErrors.description}
							</div>
						</div>

						<hr className='my-4' />

						<div className='col-12'>
							<label htmlFor='duration' className='form-label'>
								Duration
							</label>
							<div className='input-group'>
								<input
									type='number'
									className={`form-control ${validationErrors.duration && 'is-invalid'}`}
									id='duration'
									placeholder='Duration'
									value={duration}
									onChange={(e) => handleDurationChange(e.target.value)}
								/>
								<span className='input-group-text' id='basic-addon2'>
									{getCourseDuration(duration)}
								</span>
							</div>
							<div className='invalid-feedback'>
								{validationErrors.duration}
							</div>
						</div>

						<hr className='my-4' />

						<div className='row col-12'>
							<div className='col-7'>
								<label htmlFor='author-name' className='form-label'>
									Author Name
								</label>
								<div className='input-group'>
									<input
										type='text'
										className={`form-control ${validationErrors.authorName && 'is-invalid'}`}
										id='author-name'
										placeholder='Author name'
										value={authorName}
										onChange={(e) => setAuthorName(e.target.value)}
									/>
									<button
										className='btn btn-outline-secondary'
										type='button'
										id='button-addon2'
										onClick={handleAddAuthor}
									>
										AddAuthor
									</button>
								</div>
								<div className='invalid-feedback'>
									{validationErrors.authorName}
								</div>
								<div>
									<h5 className='my-4'>Authors List:</h5>
									<div className='col-12'>
										{authors.length === 0 ? (
											<p>Authors list is empty</p>
										) : (
											<ul>
												{authors.map((author, index) => (
													<li key={author.id || index}>
														{author.name}
														<button
															className='btn btn-outline-success btn-sm ms-2'
															type='button'
															onClick={() =>
																handleAddToCourseAuthors(author.id)
															}
														>
															Add to Course
														</button>
													</li>
												))}
											</ul>
										)}
									</div>
								</div>
							</div>
							<div className='col-5 text-center'>
								<h5>Course Authors</h5>
								{courseAuthorsList.length === 0 ? (
									<p>Authors list is empty</p>
								) : (
									<ul>
										{courseAuthorsList.map((author) => (
											<li key={author.id}>
												{author.name}
												<button
													className='btn btn-outline-danger btn-sm ms-2'
													type='button'
													onClick={() => handleDeleteAuthor(author.id)}
												>
													Delete
												</button>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>

						<hr className='my-4' />

						<div className='row mt-3'>
							<div className='col-md-12 d-flex justify-content-end'>
								<Link to='/courses' className='mx-3'>
									<Button buttonText='Cancel' />
								</Link>
								<Button buttonText='Save Course' onClick={handleSaveCourse} />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CourseForm;
