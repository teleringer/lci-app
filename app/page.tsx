"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">

      {/* LEFT PANEL */}
      <div className="hidden md:flex flex-col justify-center items-center text-gray-900 p-16 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        <div className="max-w-md text-center">
          <div className="mb-10">
  <Image
    src="/logo-lci.png"
    alt="Legal Client Intake"
    width={300}
    height={120}
    priority
    className="w-auto h-auto mx-auto"
  />
</div>
<div className="w-24 h-1 bg-teal-700 rounded-full mb-6 mx-auto"></div>

          <h1 className="text-4xl font-bold mb-4">
            Welcome
          </h1>

          <p className="text-lg opacity-90">
            Log in to Legal Client Intake to continue to your Client Portal.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">

          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 text-teal-700 text-xl mb-3">
              ↪
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Login
            </h2>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-teal-700"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800 transition"
            >
              Login
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-500 font-semibold">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex justify-center gap-3">
              <button
                type="button"
                className="w-11 h-11 rounded-lg border border-gray-300 font-bold"
              >
                G
              </button>
              <button
                type="button"
                className="w-11 h-11 rounded-lg border border-gray-300 font-bold"
              >
                ⊞
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don&apos;t have an Account?{" "}
              <a
                href="#"
                className="font-semibold text-teal-700"
                onClick={(e) => e.preventDefault()}
              >
                Sign up
              </a>
            </p>

            <p className="text-xs text-gray-400 text-center mt-4">
              Placeholder page. Your official client dashboard will be here
              once LCI’s portal goes live.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}