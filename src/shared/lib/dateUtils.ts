export function formatRelativeDate(date: Date, isKo: boolean): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return isKo ? '오늘' : 'today';
  }
  if (diffDays === 1) {
    return isKo ? '1일 전' : '1 day ago';
  }
  if (diffDays <= 6) {
    return isKo ? `${diffDays}일 전` : `${diffDays} days ago`;
  }
  if (diffDays <= 13) {
    return isKo ? ' 1주 전' : '1 week ago';
  }
  if (diffDays <= 364) {
    const diffWeeks = Math.floor(diffDays / 7);
    return isKo ? `${diffWeeks}주 전` : `${diffWeeks} weeks ago`;
  }
  if (diffDays <= 729) {
    return isKo ? '1년 전' : '1 year ago';
  }
  const diffYears = Math.floor(diffDays / 365);
  return isKo ? `${diffYears}년 전` : `${diffYears} years ago`;
}

export function formatAbsoluteDate(date: Date, isKo: boolean): string {
  if (isKo) {
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const parts = formatter.formatToParts(date);
    const year = parts.find((part) => part.type === 'year')?.value;
    const month = parts.find((part) => part.type === 'month')?.value;
    const day = parts.find((part) => part.type === 'day')?.value;

    return `${year}.${month}.${day}`;
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
