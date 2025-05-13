import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../Index.css'
import Banner from '../components/Banner/Banner'
// import Row from '../components/Rows/Row/Row'
import RowList from '../components/Rows/RowList/RowList'


const Main = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    </>
  )
}

export default Main
