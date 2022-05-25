import React from 'react';

const Summary = () => {
    return (
        <div className=' my-28'>
            <div className='my-16'>
                <h2 className='text-center font-bold text-primary text-5xl'>Successfully Served</h2>
                <h3 className='text-center font-bold text-success text-xl my-4'>Providing great quality is our promise</h3>
            </div>
            <div class="stats shadow w-full">

                <div class="flex flex-col items-center">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    {/* <div class="stat-title">Total Likes</div> */}
                    <div class="stat-value text-primary">72</div>
                    <div class="stat-desc text-2xl">Countries</div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    {/* <div class="stat-title">Page Views</div> */}
                    <div class="stat-value text-secondary">35+</div>
                    <div class="stat-desc text-2xl">Unique Parts</div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    {/* <div class="stat-title">Page Views</div> */}
                    <div class="stat-value text-secondary">5M+</div>
                    <div class="stat-desc text-2xl">Happy Clients</div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    {/* <div class="stat-title">Page Views</div> */}
                    <div class="stat-value text-secondary">2M+</div>
                    <div class="stat-desc text-2xl">Feedbacks</div>
                </div>

                

            </div>
        </div>
    );
};

export default Summary;