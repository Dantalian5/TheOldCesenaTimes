export const getDate = () => {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const timeDate = new Date();

	// Obtiene el día de la semana, el mes y el día del mes en formato de texto
	const dayOfWeek = daysOfWeek[timeDate.getDay()];
	const month = months[timeDate.getMonth()];
	const dayOfMonth = timeDate.getDate();
	const year = timeDate.getFullYear();

	// Formatea la fecha en el formato deseado
	const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;

	return formattedDate;
};
