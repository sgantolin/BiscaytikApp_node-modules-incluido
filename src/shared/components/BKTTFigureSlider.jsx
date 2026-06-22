import React from 'react';
import slider1 from '../../assets/themes/default/media/slider1.jpg';
import slider2 from '../../assets/themes/default/media/slider2.jpg';

export default function BKTTFigureSlider({ id = 'carouselExampleDark', interval = 10000 }) {
  return (
    <figure id={id} className="BKTT-FigureSlider carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <ul className="carousel-inner">
        <li className="carousel-item active" data-bs-interval={interval}>
          <img src={slider1} className="d-block w-100" alt="slider 1" />
          <figcaption className="carousel-caption d-none d-md-block">
            <span className="BKTT-Badge badge bg-info"><span className="BKTT-Icon fa-solid fa-building me-2"></span><span>Casco</span></span>
            <h2>Gastronomía, ocio, cultura y mucho más</h2>
          </figcaption>
        </li>

        <li className="carousel-item" data-bs-interval="2000">
          <img src={slider2} className="d-block w-100" alt="slider 2" />
          <figcaption className="carousel-caption d-none d-md-block">
            <h2>Second slide label</h2>
            <p>Some representative placeholder content for the second slide.</p>
          </figcaption>
        </li>

        <li className="carousel-item">
          <img src={slider1} className="d-block w-100" alt="slider 3" />
          <figcaption className="carousel-caption d-none d-md-block">
            <h2>Third slide label</h2>
            <p>Some representative placeholder content for the third slide.</p>
          </figcaption>
        </li>
      </ul>

      <div className="BKTT-CarrouselControl">
        <button type="button" className="BKTT-Icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Textos descriptivo de las imágenes">
          <span className="BKTT-Icon fa-sharp fa-light fa-circle-info"></span>
        </button>
        <div>
          <button className="BKTT-Button carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="BKTT-Icon fa-light fa-angle-left" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="BKTT-Button carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="BKTT-Icon fa-light fa-angle-right" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </figure>
  );
}
