import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import TrendingSlider from './TrendingSlider'

const SearchElement = () => {

  const {term} = useParams()

  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await api.json();
      setData(data?.meals);
      console.log(data)
    };
    fetchData();
    
  }, [term]);
  return (
  <>
    <NavBar />
    <div className='
    grid-con'>
{data?.map((d) => {
  return <>
  <Link  to={`/${d.idMeal}`} className='link'>
  <div className='img-con'>
  <div className="img1">
<img src={d?.strMealThumb} className='img1-1' />
  </div>
  <h3 className="heading">{d?.strMeal}</h3>
  </div>
  </Link>
  </>
})}
    </div>
    <TrendingSlider />
  </>
  )
}

export default SearchElement