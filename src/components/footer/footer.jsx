// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 px-6 py-10 text-neutral-400 font-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-3"
          >
            {/* Circle face */}
            <circle cx="50" cy="50" r="45" fill="#f59e0b" />
            {/* Eyes */}
            <circle cx="35" cy="40" r="5" fill="#000" />
            <circle cx="65" cy="40" r="5" fill="#000" />
            {/* Smiling mouth */}
            <path
              d="M30 60 Q50 80 70 60"
              stroke="#000"
              strokeWidth="5"
              fill="transparent"
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
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/credits" className="hover:text-amber-500">
                  Credits
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-amber-500">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a
                  href="https://github.com/Whisker-Media/whisker-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://whisker-social.uptimerobot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  Service Status
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Whisker-Media/whisker-app/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-amber-500">
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
