export const dateToStrParser = (date) => {
    const now = new Date();
    
    // Time difference (now - past date)
    const diff = now - date;

    let daysStr = "";
    const oneDayInMilliseconds = 86400000;

    // Check if the difference is within one day
    if (diff <= oneDayInMilliseconds) {
        daysStr = "Today";
    } else {
        // Calculate how many full days ago it was
        let days = Math.floor(diff / oneDayInMilliseconds);

        daysStr = (days === 1 ? "1 day ago" : `${days} days ago`);
    }

    // Format hours and minutes properly
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Pad minutes with leading zero if needed

    return `${daysStr}, ${hours}:${minutes}`;
};
