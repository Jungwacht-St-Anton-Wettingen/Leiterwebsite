import React, { useState } from 'react';
import Link from 'next/link';

const Categories = [
  { name: 'Kalender Abonieren', slug: 'agenda' },
];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (index) => {
    setActiveCategory(index);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="lg:sticky top-8 z-50">
      <div className="container mx-auto px-10 lg:px-0 mb-8">
        <div className="lg:sticky bg-white shadow-xl rounded-full py-5 mt-8">
          <div className="flex justify-center lg:justify-between items-center px-12 relative">
            <Link href="/">
              <img
                src="../gross_jw_sw.jpg"
                alt="Jungwacht St.Anton Wettingen"
                className="cursor-pointer w-100 h-10"
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              {Categories.map((category, index) => (
                <div key={category.slug} className="relative group">
                  <Link key={category.name} href={`/${category.slug}`}
                    className="text-blue-600 text-2xl font-semibold truncate cursor-pointer transition-all hover:text-white hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-xl"
                    onMouseEnter={() => handleCategoryHover(index)}
                  >
                    {category.name}
                  </Link>
                  {activeCategory === index && category.subcategories && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mx-auto px-10 mb-8 bg-white shadow-xl rounded-full transition-all py-5 mt-8 flex justify-center lg:flex items-center space-x-5" onMouseLeave={handleCategoryLeave}>
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link key={subcategory} href={`/${category.slug}/${subcategory.toLowerCase().replace(/\s+/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`}>
                          <span className="text-blue-600 text-2xl font-semibold truncate cursor-pointer transition-all hover:text-white hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-xl" style={{ whiteSpace: 'nowrap' }}>
                            {subcategory}
                            {subIndex !== category.subcategories.length - 1}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
