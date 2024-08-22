import React from 'react';

const Button = ({ styles, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button 
      type='button' 
      className={`py-4 px-6 bg-cyan-500 rounded-lg font-poppins text-[18px] ml-1 text-white outline-none 
        hover:bg-blue-800 active:bg-blue-900 transition-colors duration-300 ${styles}`} 
      onClick={handleClick}
    >
      Explore
    </button>
  );
};

export default Button;
