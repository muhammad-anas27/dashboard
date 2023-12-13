import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import sideimg1 from '../Assets/Images/Vector.svg'
const Sidebar = () => {
  return (
    <div>
      <div className='Sidebar'>
        <div className='Navartn'></div>
        <div className='row'>
          <div className='elemntul'>
            <ul>
              <li className='active'>
                <Link>
                  <img src={sideimg1} alt='' /> User Form
                </Link>
              </li>
              <li>
                <Link>User Table</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
