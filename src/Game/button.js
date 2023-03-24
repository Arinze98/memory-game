import React from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className='btn'>      
        <Link to="#"><button className='restart'><VscDebugRestart /></button></Link>
        <Link to="/"><button className='home'><FaHome /></button></Link>
    </div>
  )
}

export default Button