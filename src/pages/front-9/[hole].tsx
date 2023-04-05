import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Card from "~/components/card";

const Hole: NextPage = () => {
  const router = useRouter();
  const hole = router.query.hole;
  return (
    <>
      <Head>
        <title>Golf Scorecard - Hole {hole}</title>
        <meta name="description" content="Golf Scorecard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hole <span className="text-[hsl(280,100%,70%)]">{hole}</span>
          </h1>
          <Card>

          </Card>
        </div>
      </main>
    </>
  );
};

export default Hole;
