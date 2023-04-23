import Image from "next/image";

const data = {
  title: "Title",
  description1:
    "Development with TypeScript and NextJs is like having a superpower in your toolkit. It empowers developers to write more robust, scalable, and maintainable code, while also enabling them to build high-performance web applications with ease.",
  description2:
    "Developing with Figma, TypeScript, and Next.js is like having a turbocharger for your development process. With Figma, designers and developers can collaborate seamlessly to quickly iterate on the design and user experience. TypeScript adds an extra layer of type safety to your code, allowing for faster and more confident refactoring. And with NextJs, developers can build fast, scalable, and SEO-friendly web applications with ease. Together, these tools create a powerful combination that helps developers build high-quality web applications faster than ever before.",
  description3:
    "No server? No problem. With Vercel and GitHub, developers can quickly and easily deploy web applications without the hassle of managing servers. This powerful combination allows developers to focus on writing code and creating features, while Vercel takes care of the deployment and scaling. With Vercel's automatic scaling and instant deployment, developers can be confident that their web application is always available and performing at its best. It's the perfect solution for modern web development, where agility and speed are essential to success.",
};

export default function TextDisplay({ title, description }) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Deploy faster
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">{description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>"{data.description1}"</p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  src="/troyflavell.jpg"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50 grayscale hover:grayscale-0 transition ease-in-out duration-150"
                  width={40}
                  height={40}
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">
                    Troy Flavell
                  </div>
                  <div className="text-gray-600">@TroyFlavell on Twitter</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>{data.description2}</p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              No server? No problem.
            </h2>
            <p className="mt-6">{data.description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
