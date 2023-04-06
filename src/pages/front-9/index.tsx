import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Card from '~/components/card';

interface ButtonRowProps {
  children: React.ReactNode;
}

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <Link href={`/front-9/${encodeURIComponent(children)}`}>
      <button
        className="flex h-20 w-20 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 p-2"
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};

const ButtonRow = ({ children }: ButtonRowProps) => {
  return <div className="flex flex-row justify-between gap-4 p-2">{children}</div>;
};

const Front9: NextPage = () => {
  return (
    <>
      <Head>
        <title>Golf Scorecard - Front 9</title>
        <meta name="description" content="Golf Scorecard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Front <span className="text-[hsl(280,100%,70%)]">9</span>
          </h1>
          <Card>
            <ButtonRow>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </ButtonRow>
            <ButtonRow>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
            </ButtonRow>
            <ButtonRow>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
            </ButtonRow>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Front9;
