import Link from 'next/link'
import { FC } from 'react'

const Nav: FC = () => {
    const links = ['pricing', 'download', 'faq']

    return (
        <nav className='flex justify-between w-full gap-4 sm:max-w-80 sm:w-80'>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        className='text-xs font-medium text-white capitalize md:text-sm xl:text-base last:uppercase'
                        href={`/${link}`}>
                        {link}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav
