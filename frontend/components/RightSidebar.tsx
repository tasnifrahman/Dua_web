'use client';

import { useTheme } from '@/context/ThemeContext';

export default function RightSidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`w-64 p-4 border-l border-gray-200 hidden lg:block ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <h1 className={` text-center text-xl transition ${theme === 'dark' ? 'text-white' : ' text-gray-700'}`}>
        Settings
      </h1>

      <div className="space-y-3">
        {["Language Settings", "General Settings", "Font Settings"].map((text, index) => (
          <div
            key={index}
            className={`border rounded-lg p-3 cursor-pointer shadow-sm transition ${theme === 'dark' ? 'border-gray-600 text-white hover:bg-gray-700 dark:hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
          >
            <p className="text-base font-medium">{text}</p>
          </div>
        ))}

        {/* Appearance Settings Dropdown */}
        <div className={`border rounded-lg p-3 shadow-sm ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
          <label className="block text-base font-medium mb-1">Appearance Settings</label>
          <select
            value={theme}
            onChange={(e) => toggleTheme(e.target.value as 'light' | 'dark')}
            className={`w-full border rounded px-2 py-1 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Night Mode</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
