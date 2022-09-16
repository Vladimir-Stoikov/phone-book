import React from 'react'
import { Link } from 'react-router-dom'


export default function Contacts() {
  return (
    <section className='main-block'>
      <h2 className='subtitle'>Username</h2>
      <ul className='list'>
        <li className='list__element'>1<button className='list__btn'>x</button></li>
        <li className='list__element'>2<button className='list__btn'>x</button></li>
        <li className='list__element'>3<button className='list__btn'>x</button></li>
        <li className='list__element'>4<button className='list__btn'>x</button></li>
      </ul>
      <button className='back-btn'>❮</button>
      <button className='btn'>Add new</button>
      </section>
  )
}
