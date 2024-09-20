'use client';

import { useState, useEffect } from 'react';

import { formatRelativeDate } from '@/shared/lib/dateUtils';

interface RelativeDateProps {
  className?: string;
  date: string;
}

function RelativeDate({ date, className }: RelativeDateProps) {
  const [isko, setIsKo] = useState(false);

  useEffect(() => {
    setIsKo(
      window.navigator.language === 'ko-KR' ||
        window.navigator.language === 'ko',
    );
  }, []);

  return (
    <time className={className}>
      {formatRelativeDate(new Date(date), isko)}
    </time>
  );
}

export default RelativeDate;
