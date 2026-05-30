/* Reusable sub-components for the DigitalBanking section */

import { CheckIcon } from './icons/CheckIcon';

export function ChecklistItem({
  label,
  iconSize = 'w-5 h-5',
  checkSize = 'w-3 h-3',
}: {
  label: string;
  iconSize?: string;
  checkSize?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${iconSize} rounded-full bg-n7-blue flex items-center justify-center flex-shrink-0`}>
        <CheckIcon size={checkSize} />
      </div>
      <span className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-800">
        {label}
      </span>
    </div>
  );
}

export function FeatureBlock({
  title,
  description,
  items,
  iconSize = 'w-5 h-5',
  checkSize = 'w-3 h-3',
  className = '',
}: {
  title: string;
  description: string;
  items: string[];
  iconSize?: string;
  checkSize?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-900 mb-4">
        {title}
      </h3>
      <p className="font-archivo text-base font-normal leading-[1.3] tracking-normal text-gray-500 mb-8">
        {description}
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <ChecklistItem key={item} label={item} iconSize={iconSize} checkSize={checkSize} />
        ))}
      </div>
    </div>
  );
}
