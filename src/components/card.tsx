interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex-col gap-1 rounded-xl bg-white/10 p-4 text-white w-80 h-80">
      {children}
    </div>
  );
};

export default Card;
