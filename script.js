// Define time zones to display
const timezones = [
    { name: 'New York', tzId: 'America/New_York' },
    { name: 'London', tzId: 'Europe/London' },
    { name: 'Tokyo', tzId: 'Asia/Tokyo' },
    { name: 'Sydney', tzId: 'Australia/Sydney' },
    { name: 'Dubai', tzId: 'Asia/Dubai' },
    { name: 'Mumbai', tzId: 'Asia/Kolkata' }
];

// Get the grid container
const clocksGrid = document.getElementById('clocksGrid');

// Function to get timezone offset in hours
function getTimezoneOffset(tzId) {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).formatToParts(date);

    return parts;
}

// Function to format time for display
function formatTimeDisplay(tzId) {
    const date = new Date();
    
    // Format time
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const timeString = timeFormatter.format(date);
    
    // Format date
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const dateString = dateFormatter.format(date);

    return { time: timeString, date: dateString };
}

// Function to get offset text
function getOffsetText(tzId) {
    const date = new Date();
    const utcTime = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzTime = new Date(date.toLocaleString('en-US', { timeZone: tzId }));
    const offsetMs = tzTime - utcTime;
    const offsetHours = offsetMs / (1000 * 60 * 60);
    const sign = offsetHours >= 0 ? '+' : '';
    return `UTC ${sign}${offsetHours.toFixed(0)}`;
}

// Function to create a clock card
function createClockCard(city, tzId) {
    const { time, date } = formatTimeDisplay(tzId);
    const offset = getOffsetText(tzId);
    
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="city-name">${city}</div>
        <div class="time-display" data-timezone="${tzId}">${time}</div>
        <div class="date-display">${date}</div>
        <div class="timezone-offset">${offset}</div>
    `;
    
    return card;
}

// Function to update all clocks
function updateClocks() {
    const timeElements = document.querySelectorAll('[data-timezone]');
    
    timeElements.forEach(element => {
        const tzId = element.getAttribute('data-timezone');
        const { time } = formatTimeDisplay(tzId);
        element.textContent = time;
    });
}

// Function to initialize the clock display
function initializeClocks() {
    clocksGrid.innerHTML = '';
    
    timezones.forEach(tz => {
        const card = createClockCard(tz.name, tz.tzId);
        clocksGrid.appendChild(card);
    });
}

// Initialize on page load
initializeClocks();

// Update clocks every second
setInterval(updateClocks, 1000);

// Optional: Add new time zones dynamically
function addTimezone(cityName, tzId) {
    timezones.push({ name: cityName, tzId: tzId });
    initializeClocks();
}

// Optional: Remove a time zone
function removeTimezone(cityName) {
    const index = timezones.findIndex(tz => tz.name === cityName);
    if (index > -1) {
        timezones.splice(index, 1);
        initializeClocks();
    }
}
