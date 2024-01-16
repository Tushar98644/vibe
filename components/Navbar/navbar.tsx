import Link from "next/link";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-black flex flex-row justify-between text-white px-48 py-12">
            <div className="font-black text-3xl underline">
                T
            </div>
            <div className="links flex flex-row gap-4 font-semibold">
                <Link href="/">Blog</Link>
                <Link href="/">Projects</Link>
                <Link href="/">About</Link>
                <Link href="/">Uses</Link>
                <IoSunnyOutline className="cursor-pointer size-6"/>
            </div>
        </div>
    );
}

export default Navbar;