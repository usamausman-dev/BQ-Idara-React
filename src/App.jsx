import React from 'react'
import NavigationBar from './Components/NavigationBar'
import ProductSection from './Components/ProductSection'
import ContactSection from './Components/ContactSection'

function App() {
  return (
    <>
      <NavigationBar companyName="Rabi Silk" ownerName="Abdul Rehman" />
      <ProductSection sectionTitle="Silks" />
      <ProductSection sectionTitle="Cotton" />
      <ContactSection />


    </>
  )
}

export default App