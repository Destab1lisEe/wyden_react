import { Link } from 'react-router-dom'
import logo from '../../media/images/logo.svg'
import { HeaderLink } from './headerLink'


export function Header(){
  return (
    <header className="container">
      <div className='flex justify-between items-center h-[80px]'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex items center gap-5 md:gap-10">
          <Link to="/" >Home</Link>
          <Link to="/contact" >Contact</Link>
          <HeaderLink linkUrl='#' linkText='Faq' />
        </div>
      </div>
    </header>
  )
}