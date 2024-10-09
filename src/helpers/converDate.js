function converDate(date) {
  const newDate = new Date(date)
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return newDate.toLocaleDateString("nl-NL", options)
}

export default converDate;