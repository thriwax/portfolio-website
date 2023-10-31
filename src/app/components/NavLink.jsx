import Link from "next/link";

const NavLink =  ({ href, title }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-black font-semibold sm:text-xl mb-2 md:p-0 hover:text-[#a5a5a5]'>{title}</Link>
    )
}

export default NavLink;