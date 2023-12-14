import React from "react";
import Slide from "./slide";
import Load from "./load";
import { useEffect, useState } from "react";

const Slider = () => {
  let [slide, setSlide] = useState({ data: { pets: [] } });
  let [show, setShow] = useState({ display: 'flex',});
  useEffect(() => req_slide(slide, setSlide), []);

  function req_slide(slide, setSlide) {
    var requestOptions = {
      method: 'GET',
    };

    fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setSlide(result)
        setShow({ display: 'none' });
      }
      )
      .catch(error => console.log('error', error));

  }
  let slides = slide.data.pets.map((pet, index) => {
    if (index == 0) {
      return <Slide data={pet} key={index} css_class='carousel-item active' />;
    }
    else {
      return <Slide data={pet} key={index} css_class='carousel-item' />;
    }
  }
  )
  let indicators = slide.data.pets.map((pet, index) => {
    if (index == 0) {
      return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>;
    } else {
      return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide " + (Number(index) + 1)} key={index + 'btn'}></button>;
    }
  }
  )
  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{ 'backgroundColor': 'rgb(112, 112, 112)'}}>
      <div className="carousel-indicators">
        {indicators}
      </div>
      <div className="carousel-inner">
        <Load display={show} />
        {slides}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
};

export default Slider;
