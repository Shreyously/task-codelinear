import React from 'react';

export interface ButtonProps {
  href?: string;
  size?: 'sm' | 'md' | 'lg' | 'badge' | 'arrow' | 'readMore' | 'readMoreLg';
  variant?: 'primary' | 'secondary' | 'badge' | 'ghost' | 'arrow' | 'readMore';
  bgColor?: string; // background color prop as requested
  textSize?: string; // text size override prop as requested
  width?: string; // width override prop as requested (e.g., 'w-[210px]')
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  [key: string]: any; // to support any extra standard HTML properties
}

export default function Button({
  href,
  size = 'lg', // default size
  variant = 'primary',
  bgColor,
  textSize,
  width,
  className = '',
  children,
  onClick,
  ...props
}: ButtonProps) {
  // Base classes for transition and alignment with Chivo Mono, 400 weight, uppercase, tracking 0%
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 ease-out active:scale-[0.98] select-none text-center font-chivo font-normal uppercase tracking-[0]';

  // Size classes matching the project styling with 15px (text-[15px]) and 130% (leading-[1.3]) defaults
  const sizeClasses = {
    sm: `${width ? width : 'w-[161px]'} h-[26px] rounded-[6px] ${textSize ? textSize : 'text-[15px] leading-[1.3]'} whitespace-nowrap`,
    md: `${width ? width : 'px-6'} py-2.5 rounded ${textSize ? textSize : 'text-[15px] leading-[1.3]'}`,
    lg: `${width ? width : 'px-[51px]'} py-[15px] rounded-[10px] ${textSize ? textSize : 'text-[15px] leading-[1.3]'}`,
    badge: `${width ? width : 'w-[190px]'} h-[49px] rounded-[10px] px-[59px] py-[15px] gap-2 ${textSize ? textSize : 'text-[15px] leading-[1.3]'}`,
    arrow: 'w-10 h-10 rounded-full flex items-center justify-center',
    readMore: `${width ? width : 'w-[287px]'} h-[36px] rounded-[10px] px-[111px] py-[10px] gap-2 ${textSize ? textSize : 'text-[12px] leading-[1.3]'} whitespace-nowrap`,
    readMoreLg: `${width ? width : 'w-[431px]'} h-[36px] rounded-[10px] px-[183px] py-[10px] gap-2 ${textSize ? textSize : 'text-[12px] leading-[1.3]'} whitespace-nowrap`
  };

  // Background and border styles depending on variant and custom bgColor prop
  let themeClasses = '';

  if (variant === 'primary') {
    // If a custom background color is passed, use it, otherwise use the gradient
    const bg = bgColor ? bgColor : 'bg-gradient-to-r from-[#00B4FD] to-[#003ACF]';
    themeClasses = `${bg} text-[#E9F4F9] hover:bg-none hover:bg-[#E9F4F9] hover:text-[#003ACF]`;
  } else if (variant === 'secondary') {
    const bg = bgColor ? bgColor : 'bg-transparent';
    themeClasses = `border border-[#E9F4F9] ${bg} text-[#E9F4F9] hover:bg-[#E9F4F9] hover:text-[#003ACF]`;
  } else if (variant === 'badge') {
    const bg = bgColor ? bgColor : 'bg-transparent';
    themeClasses = `border border-n7-light/30 ${bg} text-white hover:bg-[#E9F4F9] hover:text-[#003ACF] hover:border-[#E9F4F9]`;
  } else if (variant === 'ghost') {
    const bg = bgColor ? bgColor : 'bg-transparent';
    themeClasses = `border border-n7-border ${bg} text-white hover:bg-[#E9F4F9] hover:text-[#003ACF] hover:border-[#E9F4F9]`;
  } else if (variant === 'arrow') {
    const bg = bgColor ? bgColor : 'bg-transparent';
    themeClasses = `border border-n7-cyan/40 ${bg} text-n7-cyan hover:bg-n7-cyan/10`;
  } else if (variant === 'readMore') {
    const bg = bgColor ? bgColor : 'bg-transparent';
    themeClasses = `border border-[#E9F4F9]/50 ${bg} text-[#E9F4F9]/50 hover:bg-[#E9F4F9] hover:text-[#003ACF] hover:border-[#E9F4F9]`;
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${themeClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
