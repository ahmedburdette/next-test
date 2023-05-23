import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-8 border-b-2 pb-5 sm:px-20 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header logo"
          title="cassette tape icon"
          src="/cassette-tape-black1.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-5xl text-2xl font-bold ml-2 tracking-tight">
          Pl<span className="text-rose-800">a</span>yl
          <span className="text-rose-800">i</span>st
        </h1>
      </Link>
      <a
        href="https://github.com/ahmedburdette/next-test"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Github Icon"
          src="/github-logo.png"
          className="sm:w-9 sm:h-[32px] w-9 h-[32px]"
          width={32}
          height={32}
        />
      </a>
    </header>
  );
}
