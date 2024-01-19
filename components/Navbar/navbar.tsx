import Link from "next/link";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-black flex flex-row justify-between text-white px-48 py-12">
            <Link className="font-black text-3xl underline cursor-pointer" href="/">
                T
            </Link>
            <div className="links flex flex-row gap-4 font-semibold">
                <Link href="/blog">Blog</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <IoSunnyOutline className="cursor-pointer size-6"/>
            </div>
        </div>
    );
}

export default Navbar;