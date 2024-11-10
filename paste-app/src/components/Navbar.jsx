import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <div className='flex gap-4 justify-end' >
      <NavLink to="/" onClick={ ()=>{setTitle('');
    setValue('');}}>
        home
      </NavLink>
      <NavLink to='/pastes'className='mr-8'>
        pastes
      </NavLink>
    </div>
  )
}

export default navbar