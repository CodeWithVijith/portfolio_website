import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
    const commonClasses = 'py-2 px-4 rounded-xl text-base font-medium ';
    const variantClasses = variant === 'primary' ? `bg-primary text-white` : `bg-white border-primary border-2 `;
    // const variantClasses = variant === 'primary' ? `bg-primary text-white` : `bg-white border-primary border-2 hover:text-primary relative group overflow-hidden`;

    const buttonClasses = `${commonClasses} ${variantClasses}`;

  return (
    <button className={buttonClasses}>
      {children}
      {/* <span className="absolute left-0 bottom-0 h-full w-0 bg-primary transition-all duration-700 group-hover:w-full" /> */}
    </button>
  );
};

export default Button;
