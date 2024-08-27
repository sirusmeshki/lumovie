import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Logo: FC = () => {
    return (
        <Link
            href='/'
            className='flex min-w-fit'>
            <Image
                src='/assets/icon/Logo_Icon.svg'
                alt='logo'
                width={42}
                height={42}
                priority
            />
            <Image
                src='/assets/icon/Logo_Text.svg'
                alt='logo'
                width={108}
                height={34}
                className='hidden sm:block w-auto h-auto'
                priority
            />
        </Link>
    )
}

export default Logo
