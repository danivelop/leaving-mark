import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  content: string;
}

function ReadingTime({ content }: ReadingTimeProps) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <time className="flex items-center text-zinc-500 dark:text-zinc-400">
      <Clock className="w-3 h-3 mr-1" />
      {readingTime} min{readingTime > 1 ? 's' : ''} read
    </time>
  );
}

export default ReadingTime;
