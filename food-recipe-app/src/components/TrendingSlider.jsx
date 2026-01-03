import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();
      setData(data?.meals);
    };
    fetchData();
    
  }, []);

  const settings = {

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };
  return (
    <>
<div className="slider-container slider-con2">
      <Slider {...settings} style={{margin: '2rem',

      }}>
       
       
     
    {data.map((d) => {
      return (
        <Link to={`/${d.idMeal}`}>
        <div className="slider2">
          <img src={d?.strMealThumb} className="pop-img2" />
        </div>
        </Link>

      );
    })}
     </Slider>
    </div>
</>
  )
};

export default TrendingSlider