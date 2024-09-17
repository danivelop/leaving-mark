interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className }: BadgeProps) {
  return (
    <div className={`${className} rounded-full break-keep font-semibold`}>
      {children}
    </div>
  );
}

export default Badge;
