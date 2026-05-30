import React from 'react';
import ArrowIcon from './icons/ArrowIcon';

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
  underlineClassName?: string;
  iconColor?: string;
}

export default function ArrowLink({
  children,
  className = '',
  iconClassName = '',
  underlineClassName = 'bg-[#00B4FD]',
  iconColor,
  ...props
}: ArrowLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 group transition-colors ${className}`}
      {...props}
    >
      <span className="relative py-0.5">
        {children}
        <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${underlineClassName}`} />
      </span>
      <ArrowIcon
        className={`transform transition-transform duration-300 group-hover:translate-x-1 ${iconClassName}`}
        color={iconColor}
      />
    </a>
  );
}
