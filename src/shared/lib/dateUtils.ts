export function formatDate(date: Date): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return 'today';
  }
  if (diffDays === 1) {
    return '1 day ago';
  }
  if (diffDays <= 6) {
    return `${diffDays} days ago`;
  }
  if (diffDays <= 13) {
    return '1 week ago';
  }
  if (diffDays <= 364) {
    const diffWeeks = Math.floor(diffDays / 7);
    return `${diffWeeks} weeks ago`;
  }
  if (diffDays <= 729) {
    return '1 year ago';
  }
  const diffYears = Math.floor(diffDays / 365);
  return `${diffYears} years ago`;
}
