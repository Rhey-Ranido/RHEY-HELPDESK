import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image 
        src={Logo}
        alt='Rhey helpdesk logo'
        width={70}
        quality={100}
        placeholder='blur'
        />
          <h1>Rhey helpdesk</h1>
          <Link href={'/'}>Home</Link>
          <Link href={'/tickets'}>Tickets</Link>
        </nav>
  )
}
