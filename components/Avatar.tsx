import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/character.png"
        alt="avatar"
        width={700}
        height={600}
        className="translate-z-0 w-[35vw] h-full"
      />
    </div>
  );
};

export default Avatar;
