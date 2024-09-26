// Helper function to convert a relative date string into a Date object
export function parseDateString(dateStr) {
    const now = new Date();

    if (dateStr.includes("Today")) {
        const time = dateStr.split(", ")[1];
        const [hours, minutes] = time.split(":");
        now.setHours(hours);
        now.setMinutes(minutes);
        now.setSeconds(0);
        return now;
    }
    
    if (dateStr.includes("Yesterday")) {
        const time = dateStr.split(", ")[1];
        const [hours, minutes] = time.split(":");
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        yesterday.setHours(hours);
        yesterday.setMinutes(minutes);
        yesterday.setSeconds(0);
        return yesterday;
    }
    
    // For other cases like "1 day ago" or specific dates
    if (dateStr.includes("day ago")) {
        const daysAgo = parseInt(dateStr.split(" ")[0], 10);
        const time = dateStr.split(", ")[1];
        const [hours, minutes] = time.split(":");
        const pastDate = new Date(now);
        pastDate.setDate(now.getDate() - daysAgo);
        pastDate.setHours(hours);
        pastDate.setMinutes(minutes);
        pastDate.setSeconds(0);
        return pastDate;
    }
    
    return new Date(dateStr); // Default case: parses exact date strings
}

// Example of usage:

// Sort the blog posts by date
// blogPosts.sort((a, b) => {
//     const dateA = parseDateString(a.date);
//     const dateB = parseDateString(b.date);
//     return dateB - dateA; // Sort in descending order (latest first)
// });