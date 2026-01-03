import React from 'react'
import NavBar from './NavBar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const RecipeId = () => {

  const {idMeal} = useParams()
  const [data, setData] = useState([]);
  const [active, setActive] = useState("ingredient")

  useEffect(() => {
    
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setData(data?.meals[0]);
      console.log(data)
    };
    fetchData();
    
  }, [idMeal]);

  return (
    <>
    <NavBar />

  <div className='main-con'>
  <h3 className="heading">

{data.strMeal}
  </h3>
  <div className='con'>
  <div className="img">
    <img src={data.strMealThumb} alt='image' />
  </div>
  <div className="controls">
  <button className='btn btn-info mx-5' onClick={() => setActive("ingredient")}>Ingredients</button>
  <button className='btn btn-primary'  onClick={() => setActive("instruction")}>Instructions</button>

{ active ===  'ingredient' ? (
  <div className='contrl'>
  <h6>{data.strIngredient1} - {data.strMeasure1}</h6>
  <h6>{data.strIngredient2} - {data.strMeasure2}</h6>
  <h6>{data.strIngredient3} - {data.strMeasure3}</h6>
  <h6>{data.strIngredient4} - {data.strMeasure4}</h6>
  <h6>{data.strIngredient5} - {data.strMeasure5}</h6>
  <h6>{data.strIngredient6} - {data.strMeasure6}</h6> </div>
) : (
  <p className='para'>{data.strInstructions}</p>
)}
</div>


</div>
</div>




    <TrendingSlider />
    </>
  )
}

export default RecipeId