export const getCourseDuration = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;

	const formattedHours = hours < 10 ? '0' + hours : hours;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

	if (hours === 1) {
		return `${formattedHours}:${formattedMinutes} hour`;
	} else {
		return `${formattedHours}:${formattedMinutes} hours`;
	}
};
