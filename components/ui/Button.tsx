import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 active:border-b-0 active:translate-y-1",
    secondary: "bg-acai-600 hover:bg-acai-500 text-white border-b-4 border-acai-800",
    whatsapp: "bg-whatsapp hover:bg-green-500 text-white"
  };

  const pulseAnimation = pulse ? "animate-bounce" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="text-lg md:text-xl uppercase tracking-wide">{children}</span>
      <ArrowRight className={`w-6 h-6 ${pulseAnimation}`} />
    </button>
  );
};