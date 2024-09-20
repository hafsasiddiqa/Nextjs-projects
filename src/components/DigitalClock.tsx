"use client"
import { useEffect, useState } from 'react';

const timezones = ['local', 'UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo']; 

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [is24Hour, setIs24Hour] = useState(true); // Toggle between 24-hour and 12-hour
  const [timezone, setTimezone] = useState('local'); // Default timezone to 'local'
  const [colorTheme, setColorTheme] = useState('default'); // Color theme

  useEffect(() => {
    setIsClient(true); 

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  if (!isClient || !time) {
    return null;
  }

  // Use 'Intl.DateTimeFormat' to properly format time with timezones
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
    timeZone: timezone === 'local' ? undefined : timezone, // Use local if selected
  }).format(time);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timezone === 'local' ? undefined : timezone, // Use local if selected
  }).format(time);

  const handleToggleFormat = () => setIs24Hour(!is24Hour);
  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTimezone(e.target.value);
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setColorTheme(e.target.value);

  const getColorClasses = () => {
    switch (colorTheme) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200';
      case 'green':
        return 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white';
    }
  };

  return (
    <div className={`flex justify-center items-center h-screen ${getColorClasses()}`}>
      <div className="text-center">
        <p className="text-3xl md:text-4xl font-semibold mb-4">{formattedDate}</p>
        <p className="text-6xl md:text-8xl font-bold">{formattedTime}</p>
        
        <div className="mt-6 flex flex-col items-center space-y-4">
          <button
            onClick={handleToggleFormat}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Toggle {is24Hour ? '12-Hour' : '24-Hour'} Format
          </button>

          <select
            onChange={handleTimezoneChange}
            value={timezone}
            className="px-4 py-2 border rounded-lg shadow-md"
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz === 'local' ? 'Local Time' : tz}
              </option>
            ))}
          </select>

          <select
            onChange={handleThemeChange}
            value={colorTheme}
            className="px-4 py-2 border rounded-lg shadow-md"
          >
            <option value="default">Default Theme</option>
            <option value="blue">Blue Theme</option>
            <option value="green">Green Theme</option>
            <option value="purple">Purple Theme</option>
           
          </select>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;


