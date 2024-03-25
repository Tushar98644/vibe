export interface Hero {
  title: string;
  subtitle: string;
  position: string;
  children?: React.ReactNode;
}

const Hero = ({ title, subtitle, position, children }: Hero) => {
  return (
    <div
      className={`bg-black flex flex-col gap-2 px-40 items-${position} pt-8`}
    >
      <div className="text-5xl text-gray-100 font-medium">{title}</div>
      <div className="text-lg leading-7 text-gray-100 opacity-40">
        {subtitle}
      </div>
      <div className="pt-10 w-full">{children}</div>
    </div>
  );
};

export default Hero;
