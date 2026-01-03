import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'
import { useEffect } from 'react'

const SearchItem = ({cart, setCart}) => {
  const [filetrData, setFilterData] = useState([])
  const {term} = useParams()

  useEffect(() => {
 const filetrData = items.filter((p) => p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
  
  setFilterData(filetrData)
  }, [term])
  
  return (
  <Products cart={cart} setCart={setCart} items={filetrData} ></Products>
  )
}

export default SearchItem