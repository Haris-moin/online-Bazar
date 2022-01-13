import React from 'react';
import Carousel from 'react-material-ui-carousel';
import TShirt from '../features/clothes/tshirt';
import Banner1 from '../assets/dashboard-banners/1.jpeg';
import Banner2 from '../assets/dashboard-banners/attachment.jpeg';
import Banner3 from '../assets/dashboard-banners/online-shop-banner-design-template-ced8d381ed48595c749de9949ff917ae_screen.jpeg';
import Banner4 from '../assets/dashboard-banners/Online-Shopping-AD-Banner-Design-in-Photoshop-scaled.jpeg';
import './style.css';
function Dashboard() {
  var items = [
    {
      name: 'Random Name #1',
      src: Banner1,
    },
    {
      name: 'Random Name #2',
      src: Banner2,
    },
    {
      name: 'Random Name #3',
      src: Banner3,
    },
    {
      name: 'Random Name #4',
      src: Banner4,
    },
  ];
  return (
    <div>
      <Carousel className="carousel">
        {items.map((item, i) => (
          <div key={i} className="carousel-img-conatiner">
            <img width="100%" height="90%" src={item.src} alt={item.name} />
          </div>
        ))}
      </Carousel>
      <TShirt />
    </div>
  );
}

export default Dashboard;
