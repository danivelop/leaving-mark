function Logo() {
  const birthday = new Date('1993-06-15');
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();

  const passedTime = Math.floor(360 * (age / 100));

  return (
    <div className="flex justify-center items-center size-8 rounded-full border-[3px] border-zinc-900 dark:border-zinc-100">
      <div
        className={`
          size-5 bg-zinc-900 rounded-full border-transparent
          [background:conic-gradient(transparent_0deg_${passedTime}deg,_#18181b_${passedTime}deg_360deg)]
          dark:[background:conic-gradient(transparent_0deg_${passedTime}deg,_#f4f4f5_${passedTime}deg_360deg)]
        `}
      />
    </div>
  );
}

export default Logo;
