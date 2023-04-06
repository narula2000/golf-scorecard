import { type NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { type CardProps } from '~/components/card';
import Counter from '~/components/counter';
import Fairway from '~/components/fairway';

/**
 * -- Hole Information --
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
  return <div className="flex flex-row justify-between gap-4">{children}</div>;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="h-auto w-3/4 flex-col gap-3 rounded-xl bg-white/10 p-4 text-white">
      {children}
    </div>
  );
};

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
              <p className="text-2xl p-2">Par</p>
              <Counter />
            </Row>
            <Row>
              <p className="text-2xl p-2">Stroke</p>
              <Counter />
            </Row>
            <Row>
              <p className="text-2xl p-2">Putts</p>
              <Counter />
            </Row>
            <Row>
              <p className="text-2xl p-2">Sand Shots</p>
              <Counter />
            </Row>
            <Row>
              <p className="text-2xl p-2">Penalties</p>
              <Counter />
            </Row>
            <Row>
              <p className="text-2xl p-2">Fairway</p>
              <Fairway />
            </Row>
            <Row>
              <p className="text-2xl p-2">GIR</p>
            </Row>
            <Row>
              <p className="text-2xl p-2">Sand Save</p>
            </Row>
            <Row>
              <p className="text-2xl p-2">Up & Down</p>
            </Row>
            <div className="flex flex-row justify-between gap-4">
              <p className="text-2xl p-2">Prev</p>
              <p className="text-2xl p-2">Save</p>
              <p className="text-2xl p-2">Next</p>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Hole;
