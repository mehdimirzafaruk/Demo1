import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-sans text-[18px] font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center";
  
  // Specific styles requested: #FF6347, rounded 10px, hover scale + shadow
  const primaryStyles = `
    bg-[#FF6347] 
    text-white 
    rounded-[10px] 
    shadow-[0_4px_8px_rgba(0,0,0,0.2)] 
    hover:scale-105 
    hover:shadow-xl
  `;

  const secondaryStyles = `
    bg-gray-200 
    text-[#333] 
    rounded-[10px] 
    hover:bg-gray-300
  `;

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};