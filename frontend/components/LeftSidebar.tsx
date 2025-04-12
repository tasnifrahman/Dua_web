'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories, getSubcategories } from '@/lib/api';
import { useTheme } from '@/context/ThemeContext';

interface Category {
  id: number;
  cat_id: number;
  cat_name_en: string;
}

interface SubCategory {
  subcat_id: number;
  subcat_name_en: string;
}

export default function LeftSidebar() {
  const { theme } = useTheme();
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Record<number, SubCategory[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cats = await getCategories();
        setCategories(cats);
        const subcategoriesData: Record<number, SubCategory[]> = {};
        
        for (const cat of cats) {
          const subs = await getSubcategories(cat.cat_id);
          subcategoriesData[cat.cat_id] = subs;
        }
        
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <aside className={`w-64 p-4 border-r overflow-y-auto h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="text-center">Loading...</div>
      </aside>
    );
  }

  return (
    <aside
      className={`w-64 p-4 border-r overflow-y-auto h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <div className="flex">
        {/* Left column for images */}
        <div className="flex flex-col items-start space-y-2 sticky top-4">
          <img src="/frame.png" width={130} height={100} alt="Frame" />
          <img src="/support.png" width={130} height={100} alt="Support" />
        </div>

        {/* Right column for categories */}
        <div className="flex flex-col ml-4">
          <h2
            className={`font-semibold mb-4 text-center px-4 py-2 rounded-md shadow ${theme === 'dark' ? 'bg-green-700 text-white' : 'bg-green-700 text-white'}`}
          >
            Categories
          </h2>
          <ul>
            {categories.map(cat => (
              <li key={cat.cat_id} className="mb-2">
                <p className="font-bold text-green-700">{cat.cat_name_en}</p>
                <ul className="ml-4">
                  {subcategories[cat.cat_id]?.map(sub => (
                    <li key={sub.subcat_id}>
                      <Link
                        href={`/categories/${cat.cat_id}/subcategories/${sub.subcat_id}`}
                        className={`text-sm hover:text-green-900 hover:translate-x-1 transition duration-200 flex items-center space-x-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                      >
                        <span className="text-green-500 text-lg">•</span>
                        <span>{sub.subcat_name_en}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
