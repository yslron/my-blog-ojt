"use client";
import Image from "next/image";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-screen overflow-hidden">
      {isLoading && (
        // Loading overlay
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Custom loading indicator */}
          <div className="text-white">Loading...</div>
        </div>
      )}
      <div className="absolute inset-0 z-[1]">
        <Spline
          scene="https://prod.spline.design/awJ-AiwJ7RQeLaQ4/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Set loading to false once loaded
        />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a href="/" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Ysl Designs&nbsp;
          </a>
          <div className="fixed gap-10 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a className="group transition duration-300" href="">
              School Department
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="">
              Industry
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="">
              About Me
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="/ojt-blog">
              OJT Blog
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="">
              Tour
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="">
              Research Fest
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
            <a className="group transition duration-300" href="">
              Training/Seminar
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </a>
          </div>
        </div>

        {/*<div className="relative flex place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-2xl">I&apos;m Ysl Ron</p>
            <div className="flex gap-10">
              <h1 className="text-7xl">A UI/UX</h1>
              <h1 className="text-7xl font-semibold">DESIGNER</h1>
            </div>
          </div>
  </div>*/}
        <div className="absolute bottom-20 mb-32 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-[1]">
          <a
            href="/about-me"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About Me{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about me and my work.
            </p>
          </a>

          <a
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Purpose{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about our On the job training/practicum
            </p>
          </a>

          <a
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Partner Ind.{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Our Partner Industry
            </p>
          </a>

          <a
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Program Degree{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              How I got into the field of my Degree
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
