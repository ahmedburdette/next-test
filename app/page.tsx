import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
        href="https://github.com/ahmedburdette/next-test"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="Github Icon"
          src="/github-logo.png"
          className="sm:w-9 sm:h-[32px] w-9 h-[32px]"
          width={32}
          height={32}
        />
        <p>Star on GitHub</p>
      </a>
      <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
        Create playlists instantly
      </h1>
    </main>
  );
}
