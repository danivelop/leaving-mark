interface SpaceProps {
  className?: string;
}

function Space({ className }: SpaceProps) {
  return <div className={`${className} w-full`} />;
}

export default Space;
