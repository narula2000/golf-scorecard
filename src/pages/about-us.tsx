import { type NextPage } from "next";
import Head from "next/head";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Golf Scorecard - About Us</title>
        <meta name="description" content="Golf Scorecard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            About <span className="text-[hsl(280,100%,70%)]">Us</span>
          </h1>
          <div
            className="flex m-auto flex-col gap-1 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <div className="text-2xl">
              I am a backend developer who is also a golfer. I created this web application to
              help keep track of my scorecard and visual my data of my round. You can learn more
              about me at
              <a
                className="text-[hsl(280,100%,70%)]"
                href="https://narula2000.github.io/"
              >
                narula2000.github.io
              </a>.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
