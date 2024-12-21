import React from "react";

const Cars = () => {

    const carData = [
     {id: 1, name:'Audi',price: 35.00000,  description: 'An Automobile Manufacturer', image:'/audi.jpg'},
     {id: 2, name:'BMW',price: 65.000000,  description: 'A German Multinational Manufacturer of Luxury Vehicles', image: '/BMW.jpg'},
     {id:3, name:'Jaguar' ,price: 62.00000, description: 'Stunning Sports Car',image: '/jaguar.jpg'},
     {id:4, name:'Lamborghini',price: 70.00000, description: 'An Italian Manufacturer of Luxury Sports Car', image: '/lamborghini.jpg'},
    ];

    return(
        <div className="cars grid grid-rows-1 md:grid-rows-1 gap-10 px-10 my-10">
         {carData.map(car => (
         <div key={car.id} className="car-card bg-white p-5 rounded-md shadow-md text-center">
         <img src={car.image} alt={car.name} className="w-full rounded-md transition-transform duration-200 transform hover:scale-90"/>
         <h3 className="mt-4 text-2xl font-bold">{car.name}</h3>
         <p className="text-gray-600">{car.description}</p>
         <div className="price text-red-700 text-xl font-semibold mt-2">${car.price}</div>
         <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800">Add to Cart</button>
         </div>
       ))}
     </div>
    );
};

export default Cars;