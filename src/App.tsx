import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Authorization from './pages/Authorization'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Authorization />}/>
      <Route path='/contacts' element={ <Contacts />}/>
    </Routes>
   
  )
}
