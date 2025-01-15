import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-[440px]" style={{ backgroundImage: 'url(/path/to/coffee-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                <div>
                    <h1 className="text-5xl font-bold mb-4">Brew the Perfect Coffee</h1>
                    <p className="text-lg mb-6">Experience the finest coffee blends, delivered fresh to your door.</p>
                    <a
                        href="#shop"
                        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300"
                    >
                        Shop Now Here
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
