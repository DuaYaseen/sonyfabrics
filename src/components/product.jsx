import React from 'react';
import './product.css';
import { useNavigate } from 'react-router-dom';

import catalog1 from '../assets/pictures/catalog 25.jpeg';
import catalog2 from '../assets/pictures/catalog 24.jpeg';
import catalog3 from '../assets/pictures/catalog 23.jpeg';
import catalog4 from '../assets/pictures/catalog 22.jpeg';
import catalog5 from '../assets/pictures/catalog 21.jpeg';
import catalog6 from '../assets/pictures/catalog 20.jpeg';
import catalog7 from '../assets/pictures/catalog 19.jpeg';
import catalog8 from '../assets/pictures/catalog 18.jpeg';
import catalog9 from '../assets/pictures/catalog 17.jpeg';
import catalog10 from '../assets/pictures/catalog 16.jpeg';
import catalog11 from '../assets/pictures/catalog 15.jpeg';
import catalog12 from '../assets/pictures/catalog 14.jpeg';
import catalog13 from '../assets/pictures/catalog 13.jpeg';
import catalog14 from '../assets/pictures/catalog 12.jpeg';
import catalog15 from '../assets/pictures/catalog 11.jpeg';
import catalog16 from '../assets/pictures/catalog 10.jpeg';
import catalog17 from '../assets/pictures/catalog 9.jpeg';
import catalog18 from '../assets/pictures/catalog 8.jpeg';
import catalog19 from '../assets/pictures/catalog 7.jpeg';
import catalog20 from '../assets/pictures/catalog 6.jpeg';
import catalog21 from '../assets/pictures/catalog 5.jpeg';
import catalog22 from '../assets/pictures/catalog 4.jpeg';
import catalog23 from '../assets/pictures/catalog 27.jpeg';
import catalog24 from '../assets/pictures/catalog 28.jpeg';
import catalog25 from '../assets/pictures/catalog 29.jpeg';
import catalog26 from '../assets/pictures/catalog 30.jpeg';
import catalog27 from '../assets/pictures/catalog 31.jpeg';
import catalog28 from '../assets/pictures/catalog 32.jpeg';
import catalog29 from '../assets/pictures/catalog 33.jpeg';
import catalog30 from '../assets/pictures/catalog 34.jpeg';

import catalog31 from '../assets/pictures/catalog 35.jpeg';
import catalog32 from '../assets/pictures/catalog 36.jpeg';
import catalog33 from '../assets/pictures/catalog 37.jpeg';
import catalog34 from '../assets/pictures/catalog 38.jpeg';
import catalog35 from '../assets/pictures/catalog 39.jpeg';
import catalog36 from '../assets/pictures/catalog 40.jpeg';
import catalog37 from '../assets/pictures/catalog 41.jpeg';
import catalog38 from '../assets/pictures/catalog 42.jpeg';
import catalog39 from '../assets/pictures/catalog 43.jpeg';


import catalog40 from '../assets/pictures/catalog 44.jpeg';
import catalog41 from '../assets/pictures/catalog 45.jpeg';
import catalog42 from '../assets/pictures/catalog 46.jpeg';
import catalog43 from '../assets/pictures/catalog 47.jpeg';
import catalog44 from '../assets/pictures/catalog 48.jpeg';
import catalog45 from '../assets/pictures/catalog 49.jpeg';
import catalog46 from '../assets/pictures/catalog 50.jpeg';
import catalog47 from '../assets/pictures/catalog 51.jpeg';
import catalog48 from '../assets/pictures/catalog 52.jpeg';

import catalog49 from '../assets/pictures/catalog 53.jpeg';
import catalog50 from '../assets/pictures/catalog 54.jpeg';
import catalog51 from '../assets/pictures/catalog 55.jpeg';
import catalog52 from '../assets/pictures/catalog 56.jpeg';
import catalog53 from '../assets/pictures/catalog 57.jpeg';
import catalog54 from '../assets/pictures/catalog 58.jpeg';
import catalog55 from '../assets/pictures/catalog 59.jpeg';

import catalog56 from '../assets/pictures/catalog 61.jpeg';
import catalog57 from '../assets/pictures/catalog 62.jpeg';
import catalog58 from '../assets/pictures/catalog 63.jpeg';
import catalog59 from '../assets/pictures/catalog 64.jpeg';
import catalog60 from '../assets/pictures/catalog 65.jpeg';
import catalog61 from '../assets/pictures/catalog 66.jpeg';
import catalog62 from '../assets/pictures/catalog 67.jpeg';
import catalog63 from '../assets/pictures/catalog 68.jpeg';
import catalog64 from '../assets/pictures/catalog 69.jpeg';
import catalog65 from '../assets/pictures/catalog 70.jpeg';

import catalog66 from '../assets/pictures/catalog 71.jpeg';
import catalog67 from '../assets/pictures/catalog 72.jpeg';
import catalog68 from '../assets/pictures/catalog 73.jpeg';
import catalog69 from '../assets/pictures/catalog 74.jpeg';
import catalog70 from '../assets/pictures/catalog 75.jpeg';
import catalog71 from '../assets/pictures/catalog 76.jpeg';
import catalog72 from '../assets/pictures/catalog 77.jpeg';
import catalog73 from '../assets/pictures/catalog 78.jpeg';
import catalog74 from '../assets/pictures/catalog 79.jpeg';
import catalog75 from '../assets/pictures/catalog 80.jpeg';

import catalog76 from '../assets/pictures/catalog 81.jpeg';
import catalog77 from '../assets/pictures/catalog 82.jpeg';
import catalog78 from '../assets/pictures/catalog 83.jpeg';
import catalog79 from '../assets/pictures/catalog 84.jpeg';
import catalog80 from '../assets/pictures/catalog 85.jpeg';
import catalog81 from '../assets/pictures/catalog 86.jpeg';
import catalog82 from '../assets/pictures/catalog 87.jpeg';
import catalog83 from '../assets/pictures/catalog 88.jpeg';
import catalog84 from '../assets/pictures/catalog 89.jpeg';
import catalog85 from '../assets/pictures/catalog 90.jpeg';
import catalog86 from '../assets/pictures/catalog 91.jpeg';
import catalog87 from '../assets/pictures/catalog 92.jpeg';

import catalog88 from '../assets/pictures/catalog 93.jpeg';
import catalog89 from '../assets/pictures/catalog 94.jpeg';
import catalog90 from '../assets/pictures/catalog 95.jpeg';
import catalog91 from '../assets/pictures/catalog 96.jpeg';
import catalog92 from '../assets/pictures/catalog 97.jpeg';
import catalog93 from '../assets/pictures/catalog 98.jpeg';
import catalog94 from '../assets/pictures/catalog 99.jpeg';
import catalog95 from '../assets/pictures/catalog 100.jpeg';
import catalog96 from '../assets/pictures/catalog 101.jpeg';
import catalog97 from '../assets/pictures/catalog 102.jpeg';

import catalog98 from '../assets/pictures/catalog 103.jpeg';
import catalog99 from '../assets/pictures/catalog 104.jpeg';
import catalog100 from '../assets/pictures/catalog 105.jpeg';
import catalog101 from '../assets/pictures/catalog 106.jpeg';
import catalog102 from '../assets/pictures/catalog 107.jpeg';
import catalog103 from '../assets/pictures/catalog 108.jpeg';
import catalog104 from '../assets/pictures/catalog 109.jpeg';
import catalog105 from '../assets/pictures/catalog 110.jpeg';
import catalog106 from '../assets/pictures/catalog 111.jpeg';
import catalog107 from '../assets/pictures/catalog 112.jpeg';
const products = [
    {
      title: 'Mehak Premium',
      description: 'Unstitched Doriya Lawn',
      images: [catalog1, catalog2, catalog3, catalog4, catalog5, catalog6, catalog7, catalog8, catalog9],
      price: 'PKR 27,00',
      collection: 'Digital Printed Lawn 2025',
      style: '3 piece ',
      fabric: 'Lawn shirt with lawn doriya dupatta'
    },
    {
        title: 'Eshaal Premium',
        description: 'Unstitched Printed Lawn',
        images: [catalog10, catalog11, catalog12, catalog13, catalog14, catalog15],
        price: 'PKR 27,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with printed lawn dupatta'
      },
      {
        title: 'Innaya Ali Premium',
        description: 'Unstitched Printed Lawn',
        images: [catalog16, catalog17, catalog18, catalog19, catalog20, catalog21, catalog22],
        price: 'PKR 24,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with printed lawn dupatta'
      },
      {
        title: 'Divine Embroidered',
        description: 'Unstitched Embroidered Lawn',
        images: [catalog24, catalog25, catalog26, catalog27, catalog28, catalog29, catalog30],
        price: 'PKR 32,00',
        collection: 'Embroidered Lawn 2025',
        style: '3 piece ',
        fabric: 'Chicken kari embroidered daman shirt with printed lawn dupatta and trouser'
      },
      {
        title: 'Printed Jacquard',
        description: 'Unstitched Printed Jacquard',
        images: [catalog31, catalog32, catalog33, catalog34, catalog35, catalog36, catalog37, catalog38, catalog39],
        price: 'PKR 29,00',
        collection: 'Jaquard Lawn 2025',
        style: '3 piece ',
        fabric: 'Jacquard lawn shirt with printed lawn dupatta and trouser'
      },
     
      {
        title: 'Maria.B Premium',
        description: 'Unstitched Printed Lawn',
        images: [catalog40, catalog41, catalog42, catalog43, catalog44, catalog45, catalog46, catalog47, catalog48],
        price: 'PKR 24,00',
        collection: 'Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Printed lawn shirt and trouser with printed Chiffon dupatta'
      },
      {
        title: 'Mehek Embroidered',
        description: 'Unstitched Embroidered Doria Cutwork',
        images: [catalog49, catalog50, catalog51, catalog52, catalog53, catalog54, catalog55],
        price: 'PKR 34,00',
        collection: 'Heavy Embroidered Cutwork 2025',
        style: '3 piece ',
        fabric: 'Digital heavy embroidered front with cutwork daman with doria cutwork embroidered dupatta'
      },
      {
        title: 'Salina Premium',
        description: 'Unstitched Printed Lawn',
        images: [catalog56, catalog57, catalog58, catalog59, catalog60, catalog61, catalog62, catalog63, catalog64, catalog65],
        price: 'PKR 27,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with digital printed lawn dupatta'
      },
      {
        title: 'Regalia Bana Dora ',
        description: 'Unstitched Printed Lawn',
        images: [catalog66, catalog67, catalog68, catalog69, catalog70, catalog71, catalog72, catalog73, catalog74, catalog75],
        price: 'PKR 29,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with digital printed lawn dupatta'
      },
      {
        title: 'Izhaan Premium ',
        description: 'Unstitched Printed Lawn',
        images: [catalog76, catalog77, catalog78, catalog79, catalog80, catalog81, catalog82, catalog83, catalog84, catalog85, catalog86, catalog87],
        price: 'PKR 24,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with digital printed lawn dupatta'
      },
      {
        title: 'Saya Premium ',
        description: 'Unstitched Printed Lawn',
        images: [catalog88, catalog89, catalog90, catalog91, catalog92, catalog93, catalog94, catalog95, catalog96, catalog97],
        price: 'PKR 26,00',
        collection: 'Digital Printed Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed lawn shirt with digital printed lawn dupatta'
      },
      {
        title: 'Almeerah Stripe Dora ',
        description: 'Unstitched Printed Doriya lawn',
        images: [catalog98, catalog99, catalog100, catalog101, catalog102, catalog103, catalog104, catalog105, catalog106, catalog107],
        price: 'PKR 27,00',
        collection: 'Digital Printed Doriya Lawn 2025',
        style: '3 piece ',
        fabric: 'Digital printed doriya dhaga stripe shirt with stripe dupatta'
      },

];

const Product = () => {
  const navigate = useNavigate();

  return (
    <section className="product-section">
      <h2 className="product-heading">Our Product Catalog</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div
            className="product-card"
            key={index}
            onClick={() =>
                navigate('/catalog', {
                  state: {
                    images: item.images,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    collection: item.collection,
                    style: item.style,
                    fabric: item.fabric
                  },
                })
              }
              
          >
            <img src={item.images[0]} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
