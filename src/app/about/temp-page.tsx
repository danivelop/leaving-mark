/**
 * 프로필 사진
 * 자기 소개
 * 경력사항(직무 및 기여)
 * 프로젝트(회사, 개인)
 * 커뮤니티 활동
 * 오픈소스
 * 기술스택
 */

'use client';

import { Github, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';

import { Space } from '@/shared/ui';

function AboutPage() {
  return (
    <section className="layout-width">
      <div className="flex flex-col items-center">
        <Image
          src="/danivelop_character.png"
          alt="profile image"
          width={160}
          height={160}
          className="rounded-full size-36 xs:size-40"
        />
        <Space className="h-4" />
        <div className="flex items-center gap-2">
          <p className="text-lg xs:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            윤대용
          </p>
          <p className="text-sm xs:text-base text-zinc-600 dark:text-zinc-400">
            Frontend Engineer
          </p>
        </div>
        <Space className="h-2" />
        <div className="flex space-x-3 xs:space-x-4">
          <a
            href="https://github.com/danivelop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-theme-700"
          >
            <span className="sr-only">
              Navigate to blog owner&apos;s github
            </span>
            <Github aria-hidden="true" className="size-5 xs:size-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="mailto:mofg266@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-theme-700"
          >
            <span className="sr-only">Navigate to blog owner&apos;s email</span>
            <Mail aria-hidden="true" className="size-5 xs:size-6" />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/danivelop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-theme-700"
          >
            <span className="sr-only">
              Navigate to blog owner&apos;s linkedin
            </span>
            <Linkedin aria-hidden="true" className="size-5 xs:size-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      <Space className="h-20" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-2 w-1/3 text-right">
          <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            채널 코퍼레이션
          </p>
          <div className="text-zinc-600 dark:text-zinc-300">
            <p>2021.09 ~ Present</p>
            <p>Lead Frontend Engineer</p>
          </div>
        </div>
        <ul className="text-base text-zinc-900 dark:text-zinc-100">
          <li>
            <p>- 한일 1</p>
            <p className="ml-4">✓ todo1</p>
          </li>
          <li>
            <p>- 한일 2</p>
            <p className="ml-4">✓ todo2</p>
          </li>
          <li>
            <p>- 한일 3</p>
            <p className="ml-4">✓ todo3</p>
          </li>
        </ul>
      </div>
      <Space className="h-20" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-2 w-1/3 text-right">
          <p className="text-xl font-bold">채널 코퍼레이션</p>
          <div className="text-zinc-500">
            <p>2020.06 ~ 2021.09</p>
            <p>Frontend Engineer</p>
          </div>
        </div>
        <div>
          <p>• 한일 1</p>
          <p className="ml-4">✓ todo1</p>
          <p>• 한일 2</p>
          <p className="ml-4">✓ todo2</p>
          <p>• 한일 3</p>
          <p className="ml-4">✓ todo3</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

// 'use client';

// import { motion, useScroll, useTransform } from 'motion/react';
// import { useEffect } from 'react';

// function AboutPage() {
//   const { scrollY } = useScroll(); // scrollYProgress 대신 scrollY 사용

//   // 스크롤 위치가 0px에서 500px 사이일 때 변환
//   const y = useTransform(
//     scrollY,
//     [0, 200, 500], // 픽셀 단위 스크롤 위치
//     ['0%', '0%', '-100%'], // 출력값
//   );

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       console.log(window.scrollY);
//     });
//   }, []);

//   return (
//     <div className="min-h-[200vh]">
//       <div className="h-screen relative">
//         {/* 스크롤 위치 표시 (픽셀 단위) */}
//         <div className="fixed top-4 right-4 bg-black text-white p-2 rounded">
//           스크롤 위치: {Math.round(Number(scrollY))}px
//         </div>

//         {/* 고정될 요소 */}
//         <motion.div
//           style={{ y }}
//           className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                      bg-blue-500 text-white p-8 rounded-lg shadow-lg"
//         >
//           <h2 className="text-2xl font-bold mb-4">
//             스크롤 고정 예시 (픽셀 기반)
//           </h2>
//           <p>스크롤 0px ~ 200px: 고정</p>
//           <p>스크롤 200px ~ 500px: 아래로 이동</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;
