'use client';

import { useState, useEffect } from 'react';

import { formatAbsoluteDate } from '@/shared/lib/dateUtils';

interface AbsoluteDateProps {
  className?: string;
  date: string;
}

function AbsoluteDate({ date, className }: AbsoluteDateProps) {
  const [isko, setIsKo] = useState(false);

  useEffect(() => {
    setIsKo(
      window.navigator.language === 'ko-KR' ||
        window.navigator.language === 'ko',
    );
  }, []);

  return (
    <time className={className}>
      {formatAbsoluteDate(new Date(date), isko)}
    </time>
  );
}

export default AbsoluteDate;
