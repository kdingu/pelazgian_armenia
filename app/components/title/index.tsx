type Props = {
  children: React.ReactNode;
  className?: string;
};

function Title({ children, className = "" }: Props) {
  return <h1 className={`text-6xl font-thin mb-2 ${className}`}>{children}</h1>;
}

export default Title;
