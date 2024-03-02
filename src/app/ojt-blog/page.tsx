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

      <div className="flex gap-14 flex-col mt-24 items-center justify-center">
        <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-2xl text-center">OJT-Practicum Blog</p>
            <div className="flex gap-4">
              <h1 className="text-7xl">What we did in Studio Pinya</h1>
            </div>
            <a href="">2024</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-24">
          <div className="flex flex-row  w-[1200px] gap-24 mt-12">
            <div className="flex flex-col gap-24 justify-between">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start ">February 19</h1>
                <p className="text-start text-base font-light">
                  <b></b>
                  We dedicated the day to meticulously setting up our workspace,
                  ensuring that every element was aligned with our vision for a
                  productive and inspiring environment.<br></br> <br></br>A
                  significant highlight was our meeting with the executives,
                  where we engaged in in-depth discussions about the essential
                  tools and tasks that need to be implemented to enhance our
                  operational efficiency. Moreover, we took a crucial step
                  towards formalizing our work culture by establishing a
                  comprehensive set of rules and regulations.<br></br> <br></br>
                  These guidelines are designed to foster a cohesive and
                  positive work atmosphere, ensuring that every team member is
                  aligned with our core values and objectives.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start">February 20</h1>
                <p className="text-start text-base font-light">
                  <b></b>
                  We delved into a critical evaluation of the various tools and
                  technologies slated for integration into our system, a move
                  that aligns perfectly with the strategic directions
                  established during our recent executive meeting.<br></br>
                  <br></br>
                  The focus was on selecting tools that not only enhance our
                  operational capabilities but also streamline our workflows,
                  thereby significantly boosting productivity.<br></br>
                  <br></br> We explored a range of solutions, from project
                  management software to advanced design tools, each chosen for
                  its potential to meet our specific needs. <br></br>This
                  careful and deliberate selection process ensures that the
                  technologies we adopt are not just cutting-edge but also fully
                  in sync with our long-term goals, setting a solid foundation
                  for the future growth and efficiency of our operations.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start">February 21</h1>
                <p className="text-start text-base font-light">
                  <b></b>
                  During our recent meeting, we reviewed the array of tools and
                  technologies set to be integrated into our system. This
                  critical assessment was aimed at ensuring each selected tool
                  aligns perfectly with our overarching project goals and
                  operational strategies. The focus was not only on the
                  immediate implementation but also on how these technologies
                  can evolve with our needs over time.<br></br>
                  <br></br> Following the meeting, we promptly began the process
                  of setting up the identified tools, with a particular emphasis
                  on visual interface (VI) implementation. Recognizing the
                  complexity and importance of this phase, the team committed to
                  an additional two hours of overtime.<br></br>
                  <br></br>This dedication underscores our collective commitment
                  to excellence and the seamless integration of these tools into
                  our workflow, setting a solid foundation for the innovative
                  solutions we aim to deliver.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start">February 22</h1>
                <p className="text-start text-base font-light">
                  Following our strategy meeting, we initiated a training and
                  review session focused on Next.js, the chosen technology
                  essential for our project&apos;s advancement.<br></br>
                  <br></br> This session was designed to equip our team with the
                  necessary knowledge and practical skills to fully utilize
                  Next.js. We explored its key features, such as server-side
                  rendering, static site generation, and its ecosystem, aiming
                  to build a comprehensive understanding within our team.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start">February 23</h1>
                <p className="text-start text-base font-light">
                  Continuing with our Next.js training, we delved deeper into
                  its advanced features and best practices to further our team&apos;s
                  expertise. <br></br>
                  <br></br>The next phase of our training emphasized building
                  dynamic applications, exploring API routes for server-side
                  operations, and leveraging Incremental Static Regeneration
                  (ISR) for optimizing performance and scalability.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-start">February 26</h1>
                <p className="text-start text-base font-light">
                  Building on the momentum of our Next.js training, we then
                  directed our efforts towards enhancing the UI design of the
                  admin dashboard—a crucial component I had the opportunity to
                  develop. <br></br><br></br>This phase was all about refining the dashboard to
                  ensure it wasn&apos;t just functional but also intuitive and
                  user-friendly for system administrators. With the dashboard&apos;s
                  foundational structure already in place, the focus shifted to
                  optimizing the user interface for better administrative
                  efficiency. <br></br><br></br>This involved a detailed review of the dashboard
                  layout, ensuring that critical features such as user
                  management, content moderation, analytics, and system settings
                  were easily accessible and logically organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
