import Image from "next/image";

import StdPinya from "../public/STUDIO_PINYA.webp";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="/"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
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
          <a className="group transition duration-300" href="">
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

      <div className="flex gap-14 flex-col mt-24 items-center justify-center">
        <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-2xl text-center">A bit about myself</p>
            <div className="flex gap-10">
              <h1 className="text-7xl">Hello!</h1>
              <h1 className="text-7xl font-semibold">I'm Ysl Ron Hepos</h1>
            </div>
          </div>
        </div>
        <div className="fixed left-0 top-0 flex w-[700px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-[1000px]  lg:rounded-xl lg:border lg:bg-gray-200 lg:px-12 lg:py-8 lg:text-center lg:dark:bg-zinc-800/30">
          As a designer, my passion lies in crafting beautiful and joyful
          digital experiences that captivate and engage. My creative journey
          extends beyond design—I am deeply enamored with the arts, an avid
          gamer, and a fervent manga reader. My expertise in UI/UX design is
          driven by a dedication to creating intuitive and visually appealing
          designs. This blend of interests and professional focus fuels my
          commitment to designing digital spaces that are not only functional
          but also delightful and memorable.
        </div>
        <div className="flex flex-col gap-6 mt-24">
          <p className="text-2xl text-center">Previous Works</p>
          <div className="flex flex-row  w-[1000px] gap-24 mt-12">
            <div className="flex flex-col gap-3 justify-between">
              <div className="flex flex-col gap-3">
              <h1 className="text-3xl text-start">Studio Pinya</h1>
              <p className="text-start text-base font-light">
                Philippines-based studio specializing in creating captivating
                webtoons through global partnerships and collaborations, Website
                Design and Development. Landing Page Design
              </p>
              </div>
              <a
                href="#"
                className="flex group rounded-lg border border-transparent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2
                  className={`text-base font-medium text-blue-600 group-hover:text-blue-500`}
                >
                  Learn More{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </a>
            </div>
            <Image
              className="rounded-xl"
              src={StdPinya}
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
