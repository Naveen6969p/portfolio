import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import NavBar from './NavBar';
import TrendingSlider from './TrendingSlider';
import { Link } from 'react-router-dom';

const Category = () => {

  const [data, setData] = useState([]);
  const {name} = useParams()

  useEffect(() => {
    
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();
      setData(data?.meals);
    };
    fetchData();
    
  }, [name]);
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

export default Category