import React from 'react';
import lamborghini from '../../assets/images/lamborghini.jpg'

const Banner = () => {
    return (
        <div>
            {/* */}

            <div class="hero min-h-screen" style={{
                background: `url(${lamborghini})`,
                backgroundSize: 'cover'
            }}>
                <div class="hero-overlay bg-black bg-opacity-80"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="text-xl font-bold">Decorate Your Lamborghini With Our</h1>
                        <h1 class="mb-5 text-5xl font-bold"> Custom made parts</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;