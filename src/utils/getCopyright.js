export default year => {
    const currentYear = new Date().getFullYear();
    const isCurrentYear = currentYear === year;
	return year + (isCurrentYear ? ` - ${currentYear}` : '');
}