import React from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className='btn'>      
        <a href="/Game"><button className='restart'><VscDebugRestart /></button></a>
        <a href="/"><button className='home'><FaHome /></button></a>
    </div>
  )
}

export default Button