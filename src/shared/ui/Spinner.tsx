import { cn } from '@/shared/lib/styleUtils';

interface SpinnerProps {
  className?: string;
}

function Spinner({ className = 'size-3' }: SpinnerProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-current border-2 border-t-transparent',
        className,
      )}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
