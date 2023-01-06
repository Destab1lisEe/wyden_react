import logo from '../../media/images/logo.svg'
import { Link } from 'react-router-dom'

export function Footer(){
  return(
    <footer className="footer py-[25px] bg-[#F6F6F6] md:mt-[90px] mt-[50px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-[10px] sm:gap-0 items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
          <p className='text-[14px]'>Copyright 2021 ©Wyden</p>
          <p className='text-[14px]'>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}