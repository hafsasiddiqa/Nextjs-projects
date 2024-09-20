# Digital Clock Component

A digital clock component built using React, which displays the current time and date with options to toggle between 12-hour and 24-hour formats, select different timezones, and switch between various color themes. The component updates every second and is styled with basic TailwindCSS.

## Features

- **Time Display**: Shows the current time with seconds updating in real-time.
- **Date Display**: Displays the current day, month, and year.
- **Timezone Selection**: Choose from `local`, `UTC`, `America/New_York`, `Europe/London`, and `Asia/Tokyo`.
- **24-Hour/12-Hour Toggle**: Switch between 12-hour and 24-hour formats.
- **Theme Customization**: Switch between different themes: `default`, `blue`, `green`, and `purple`.
- **Responsive Design**: Mobile-friendly layout with responsive text sizes.

## Technologies Used

- **Nextjs**
- **TailwindCSS**: For styling the component with predefined classes.
- **Intl.DateTimeFormat**: For formatting the time and date based on user preferences.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **npm**: Installed alongside Node.js or use `yarn` as an alternative package manager.

### Installation

 Clone the repository:

 ### Component Breakdown

useEffect: Initializes the clock and updates it every second.

useState: Manages the state for time, timezone, 12-hour/24-hour format, and theme selection.

Intl.DateTimeFormat: Used to format time and date according to the selected timezone and format.

### Contributions

Feel free to submit a pull request if you'd like to contribute to this project. All improvements and feature requests are welcome!

### Acknowledgments

Thanks to the open-source community for tools like Nextjs and TailwindCSS that made this project possible.
