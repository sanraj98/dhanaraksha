import React from 'react'
import "./header.css";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";




const Header = () => {
  //const title="Dhana Raksha";
  const mail="dhanaraksha@gmail.com"
  const phone="8754046668"

  return (
    <header>
      <div className='d-flex justify-content-around text-light p-3'>
      <p><CiMail className='me-1'/>
        {mail}</p>
      <p>
      <MdOutlinePhone className='me-1' />
      {phone}</p>
      </div>
    </header>
  )
}

export default Header