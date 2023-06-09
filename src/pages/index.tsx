import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Golf Scorecard</title>
        <meta name="description" content="Golf Scorecard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Golf <span className="text-[hsl(280,100%,70%)]">Scorecard</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/dashboard"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Dashboard</h3>
              <div className="text-lg">
                Summary of your golf game. See your best and worst scores, your statistics, and more.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/front-9"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Front 9</h3>
              <div className="text-lg">
                Record your scores for the front 9 holes.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/back-9"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Back 9</h3>
              <div className="text-lg">
                Record your scores for the back 9 holes.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/about-us"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">About us</h3>
              <div className="text-lg">
                Learn more about us.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
