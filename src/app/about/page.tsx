import React from "react";

const About = () => {
    return (
        <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{backgroundImage: "url('/aboutus-image.jpg')"}}>
        <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
       <h2 className="text-4xl font-bold mb-4"data-aos="fade-up">About Us</h2>
       <p>Wellcome to Cars World! A car is not just a mode of transportation, it's a statement of style."Built on trust, driven by integrity."Your journey, our priority."</p>
        </div>
        </section>
    );
};

export default About;