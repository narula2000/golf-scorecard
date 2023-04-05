import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Card from "~/components/card";

/**
 * Hole Information
  * Par
  * Stroke
  * Putts
  * Sand Shots
  * Penalties
  * Fairway (Left, On, Right, Hazards)
  * GIR (On, Off) System
  * Sand Save (Yes, No) User
  * Up and Down (Yes, No) System
  * Prev | Save | Next
*/
interface RowProps {
  children: React.ReactNode;
}

const Row = ({ children }: RowProps) => {
  return (
    <div className="flex flex-row gap-4 justify-between">
      {children}
    </div>
  )
}

const Counter = () => {
  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
        <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  )
}

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
            <Row>
              <p>Par</p>
              <Counter></Counter>
            </Row>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Hole;
