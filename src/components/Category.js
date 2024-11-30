import React from 'react';

const Category = ({ handleCategory, options }) => {
  return (
    <div className="justify-content-center mb-4">
      <div className="text-center">
        <nav className="category-nav">
          {options.map((option, index) => (
            <a
              key={index}
              href={`#${option.value}`}
              className="category-link"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleCategory(option.value); // Call the handler with the selected category
              }}
            >
              {option.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Category;
