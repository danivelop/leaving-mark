import { Github, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="w-full layout-background-color dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-700">
      <div className="layout-width flex flex-col items-center py-6 xs:py-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/danivelop_character.png"
              alt="profile image"
              width={80}
              height={80}
              className="rounded-full mr-3 xs:mr-4"
            />
            <div>
              <h3 className="text-lg xs:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                윤대용
              </h3>
              <p className="text-sm xs:text-base text-zinc-600 dark:text-zinc-400">
                Frontend Engineer
              </p>
            </div>
          </div>
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
              <span className="sr-only">
                Navigate to blog owner&apos;s email
              </span>
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
        <p className="mt-6 xs:mt-8 text-center text-xs xs:text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Daeyong Yoon all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
