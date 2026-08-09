# Digital Clock - Multi-Timezone Display

A modern, responsive digital clock application that displays the current time in multiple time zones simultaneously.

## Features

- ⏰ Real-time clock updates every second
- 🌍 Display multiple time zones (customizable)
- 🎨 Beautiful, modern UI with gradient backgrounds
- 📱 Fully responsive design
- 🌙 Dark theme for easy viewing
- ⚡ Lightweight and fast
- 🔄 Easy to add or modify time zones

## Default Time Zones

- New York (EST/EDT)
- London (GMT/BST)
- Tokyo (JST)
- Sydney (AEDT/AEST)
- Dubai (GST)
- Mumbai (IST)

## How to Use

1. Open `index.html` in your web browser
2. The clock will automatically update every second
3. All time zones are displayed simultaneously

## Customizing Time Zones

Edit the `timezones` array in `script.js` to add or modify time zones:

```javascript
const timezones = [
  { name: 'New York', tzOffset: 'America/New_York' },
  { name: 'London', tzOffset: 'Europe/London' },
  // Add more time zones as needed
];
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (Intl API for timezone conversion)

## File Structure

```
├── index.html      - Main HTML file
├── styles.css      - Styling and layout
├── script.js       - Clock logic and timezone conversion
└── README.md       - This file
```
