/** @jsx.jsx */ 
/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
	return (
    <div sx={{variant: 'nav'}}>
      <div>
        <Link href="/home">
          YoungHB
        </Link>
      </div>
      <div>
        <Link href="/men" sx= {{variant:'link'}}>
          Men
        </Link>
        <Link href="/women" sx= {{variant:'link'}}>
          Women
        </Link>
      </div>
      <div>
        <Link href="/account">
          {/* <Image
            src={}
            alt="account"
            width={10}
            height={10}
          /> */}
          A
        </Link>
        <Link href="/checkout" sx={{padding: '1em'}}>
          {/* <Image 
            src={'HELLO'}
            alt="checkout"
            width={10}
            height={10}
          /> */}
          C
        </Link>
      </div>
    </div>
  )
}

export default Nav;