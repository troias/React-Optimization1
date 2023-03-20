"use client";

import Image from "next/image";

type Props = {};

export default function TecUsed({}: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 flex justify-center py-10">
        Technologies Used
      </h2>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/react.svg" width={24} height={24} alt="React SVG" />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            React
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/nextjs.svg"
                width={24}
                height={24}
                alt="Next.js SVG"
              />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            Next.js
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/typescript.svg"
                width={24}
                height={24}
                alt="TypeScript SVG"
              />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            TypeScript
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://jestjs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/jest.svg" width={24} height={24} alt="Jest SVG" />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            Jest
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/tailwindcss.svg"
                width={24}
                height={24}
                alt="Tailwind CSS SVG"
              />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            Tailwind CSS
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer justify-end">
          <div className="hover:text-purple-700 transition-colors duration-300">
            <a
              href="https://figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/figma.svg"
                width={24}
                height={24}
                alt="Tailwind CSS SVG"
              />
            </a>
          </div>
          <p className="text-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
            Figma
          </p>
        </div>
      </div>
    </div>
  );
}
