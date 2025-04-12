'use client';

import { useEffect, useState } from 'react';
import { getDuas } from '@/lib/api';
import { useTheme } from '@/context/ThemeContext'; // Import the theme context

interface Dua {
  id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string;
  transliteration_en: string;
  translation_en: string;
  refference_en: string;
}

export default function DuaList({ catId, subId }: { catId: string; subId: string }) {
  const { theme } = useTheme(); // Get the current theme
  const [duas, setDuas] = useState<Dua[]>([]);

  useEffect(() => {
    const fetchDuas = async () => {
      try {
        const data = await getDuas(catId, subId);
        setDuas(data);
      } catch (error) {
        console.error('Failed to fetch duas:', error);
      }
    };

    fetchDuas();
  }, [catId, subId]);

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {duas.map((dua, index) => (
        <div key={dua.id} className={`p-4 shadow rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
          <h3 className="text-lg font-bold text-green-700">{index + 1}. {dua.dua_name_en}</h3>
          <p className="my-7 py-1">{dua.top_en}</p>
          <p className="text-2xl text-black text-right font-arabic my-7 py-1">{dua.dua_arabic}</p>

          {dua.transliteration_en && (
            <div className="flex items-start gap-2 my-7">
              <p className="italic py-1 mt-2">
                <span className="text-2xl text-black not-italic">Transliteration:</span> {dua.transliteration_en}
              </p>
            </div>
          )}

          {dua.translation_en && (
            <div className="flex items-start gap-2 my-7">
              <p className="py-1 mt-2">
                <span className="text-2xl text-black">Translation:</span> {dua.translation_en}
              </p>
            </div>
          )}

          <h1 className="text-lg font-bold text-green-700">Reference:</h1>
          <h3 className="text-lg">{dua.refference_en}</h3>
        </div>
      ))}
    </div>
  );
}
