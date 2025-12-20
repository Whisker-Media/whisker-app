// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 px-6 py-10 text-neutral-400 font-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Brand, asked copilot to make the logo */}
        <div className="max-w-xs">
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-3"
          >
            <path
              d="M30 35c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9zm58 0c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"
              fill="#f59e0b"
            />
            <path
              d="M20 70c8-12 52-12 60 0"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>

          <p className="text-sm">© 2025 Whisker Media Group</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-amber-500">
              Whisker
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-amber-500">Home</a></li>
              <li><a href="/credits" className="hover:text-amber-500">Credits</a></li>
              <li><a href="/about" className="hover:text-amber-500">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-amber-500">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-normal">
              <li><a href="https://github.com/Whisker-Media/whisker-app" className="hover:text-amber-500">GitHub Repository</a></li>
              <li><a href="https://whisker-social.uptimerobot.com" className="hover:text-amber-500">Service Status</a></li>
              <li><a href="https://github.com/Whisker-Media/whisker-app/issues/new" className="hover:text-amber-500">Report an Issue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-amber-500">
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500">YouTube</a></li>
              <li><a href="#" className="hover:text-amber-500">Twitter</a></li>
              <li><a href="#" className="hover:text-amber-500">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}