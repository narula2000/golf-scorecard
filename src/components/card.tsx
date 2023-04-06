interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="h-auto w-80 flex-col gap-3 rounded-xl bg-white/10 p-4 text-white">
      {children}
    </div>
  );
};

export default Card;
export type { CardProps };
