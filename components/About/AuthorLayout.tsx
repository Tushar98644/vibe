import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function AuthorLayout({ children }: Props) {
  return (
    <div className="pt-8 px-40 bg-black dark:text-white">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-medium md:text-3xl lg:text-4xl">
            Tushar Banik
          </h1>
          <h2 className="text-sm font-normal opacity-90 md:text-base">
            Developer -{" "}
            <span className="font-semibold">Student at IIT Guwahati</span>
          </h2>
        </div>

        <div>
          <Image
            alt="Dale Larroder"
            height={200}
            width={200}
            src={"/static/images/project/ribo-replicator.png"}
            className="rounded-full object-scale-down grayscale"
          />
        </div>
      </div>
      <div>
        <h2 className="text-sm py-4 opacity-80 font-normal md:text-base">
          I am currently a student Developer at IIT Guwahati.
        </h2>
        <p className="text-xl pt-12 font-medium md:text-2xl lg:text-3xl">
          Timeline
        </p>
      </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
