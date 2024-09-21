import Image from 'next/image';

import { Space } from '@/shared/ui';

function Writter() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/danivelop_character.png"
        alt="profile image"
        width={80}
        height={80}
        className="size-16 md:size-20 rounded-full"
      />
      <Space className="h-2" />
      <p className="text-zinc-500 dark:text-zinc-300 text-sm md:text-base">
        By danivelop
      </p>
    </div>
  );
}

export default Writter;
