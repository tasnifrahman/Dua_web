'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme } = useTheme();  // Access the current theme

  return (
    <header
      className={`shadow-md p-4 flex items-center justify-between ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="flex items-center space-x-3">
        <img
          src="https://www.figma.com/file/rb4NkC5FXbDhQw6wbl2BTC/image/aed6088af49d5cb63d9a02588cddba5d7357d8ab"
          width={50}
          height={50}
          alt="Logo"
        />
        <h1
          className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-green-700'
          }`}
        >
          Dua Page
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search by dua name"
        className={`border border-gray-300 rounded px-3 py-1 ${
          theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'
        }`}
      />
    </header>
  );
}
