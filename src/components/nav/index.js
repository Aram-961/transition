import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='textx-2x1 font-medium z-20 relative'>
            <ul className='flex gap-12'>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>

                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar