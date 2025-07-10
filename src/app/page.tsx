"use client";

import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/icons/logo_color.png"
              alt="Datapulse SAS Logo"
              width={255}
              height={255}
            />
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
            Next.js Template
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Professional Next.js template developed by{" "}
            <strong>Datapulse SAS</strong> to accelerate the development of
            modern and scalable web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="px-8">
              Start Project
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Documentation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="px-8"
              onClick={() => window.location.href = "/users"}
            >
              Manage Users
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              High Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized with Next.js 15, Turbopack and development best
              practices.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Database
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complete integration with Drizzle ORM, PostgreSQL and Supabase.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Modern UI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailwind CSS 4, Radix UI components and responsive design.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
              <svg
                className="h-6 w-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Docker Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complete Docker configuration for development and production.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Code Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              ESLint, Prettier, TypeScript and development tools configured.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
              <svg
                className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Global State
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Zustand for state management and TanStack Query for server data.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "Tailwind CSS 4",
              "Drizzle ORM",
              "PostgreSQL",
              "Supabase",
              "Docker",
              "Zustand",
              "TanStack Query",
              "Radix UI",
              "Lucide Icons",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-lg bg-gray-50 px-3 py-2 text-center dark:bg-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>
          © 2024 Datapulse SAS. All rights reserved. This template is available
          for use in company projects.
        </p>
      </footer>
    </div>
  );
}
