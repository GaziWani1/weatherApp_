const useGetDay = (date_) => {
    const date = new Date(date_);
    const options = { weekday: 'long' };
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
    return dayName.slice(0, 3).toUpperCase()
}

export default useGetDay