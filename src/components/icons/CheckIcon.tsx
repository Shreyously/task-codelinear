export function CheckIcon({ size = 'w-3 h-3' }: { size?: string }) {
  return (
    <svg className={`${size} text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
