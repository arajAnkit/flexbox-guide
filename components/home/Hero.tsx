import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#800080]/20 via-[#00FFC5]/20 to-[#008080]/20 py-32 sm:py-40 px-6 dark:bg-gray-900">
      <div className="max-w-8xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight dark:text-white">
          Master{" "}
          <span className="bg-gradient-to-r from-[#800080] via-[#00FFC5] to-[#008080] bg-clip-text text-transparent">
            CSS Flexbox
          </span>{" "}
          Like a Pro
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 dark:text-gray-300">
          Unlock the full potential of CSS Flexbox with our hands-on,
          interactive guide. Whether you're a beginner or a seasoned developer,
          this resource will take your layout skills to the next level—
          effortlessly!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/theory"
            className="bg-gradient-to-r from-[#800080] to-[#00FFC5] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition-opacity dark:bg-blue-500 dark:hover:opacity-80"
          >
            📖 Start Learning
          </Link>
          <Link
            href="/game"
            className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            🎮 Play Flexbox Game
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          No fluff—just practical knowledge and fun challenges to make Flexbox
          second nature.
        </p>
      </div>
    </div>
  );
}
