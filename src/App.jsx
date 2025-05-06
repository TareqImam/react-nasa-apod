import React, { useState } from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  function handleShowModal() {
    setShowModal(!showModal)
  }

  return (
      <>
          {showModal && <SideBar />}
          <Home />
          <Footer showModal={showModal} />
      </>
  );
}
