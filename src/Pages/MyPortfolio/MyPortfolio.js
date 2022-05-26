import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/images/myImage.jpg';

const MyPortfolio = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
            <div class="card w-96 glass">
                <figure><img className='mask mask-circle w-1/2' src={myImage} alt="car!" /></figure>
                <div class="card-body">
                    <h2 class="text-3xl font-bold text-success">Arman Kabir</h2>
                    <p>armankabir8@gmail.com</p>
                    <p className='font-bold'>Address:</p>
                    <p className=''>District: Bagerhat Sadar,Bagerhat.</p>
                    <p className=''>PO: Bade-Karapara.</p>
                    <p className=''>Village: Fultala. House: 22</p>
                    <div class="flex justify-between">
                        <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current text-success"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </Link>
                        <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current text-success"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current text-success" ><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-success">Educational Background</h2>
                    <div>
                        <p className='my-2'>SSC: Bagerhat Govt. High School Bagerhat</p>
                        <p className='my-2'>HSC: Govt. P.C College, Bagerhat</p>
                        <p className='my-2'>B.Sc in CSE: East West University,Bangladesh.</p>
                    </div>
                    <div>
                        <p className='text-center font-bold'>Web Developer Skills I have </p>

                        <p>HTML-------<progress class="progress progress-success w-56" value="90" max="100"></progress></p>
                        <p>CSS---------<progress class="progress progress-success w-56" value="80" max="100"></progress></p>
                        <p>JS-----------<progress class="progress progress-success w-56" value="70" max="100"></progress></p>
                        <p>React-------<progress class="progress progress-success w-56" value="70" max="100"></progress></p>
                        <p>Node-------<progress class="progress progress-success w-56" value="40" max="100"></progress></p>
                        <p>Express-----<progress class="progress progress-success w-56" value="40" max="100"></progress></p>
                        <p>MongoDB--<progress class="progress progress-success w-56" value="40" max="100"></progress></p>
                        <p>MySql------<progress class="progress progress-success w-56" value="80" max="100"></progress></p>
                        <p>WordPress-<progress class="progress progress-success w-56" value="90" max="100"></progress></p>
                        <p>AWS--------<progress class="progress progress-success w-56" value="30" max="100"></progress></p>
                        <p>UI/UX-------<progress class="progress progress-success w-56" value="70" max="100"></progress></p>
                        <p>SEO---------<progress class="progress progress-success w-56" value="80" max="100"></progress></p>

                    </div>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-3xl font-bold">3 of my Projects</h2>
                    <div>
                        <a className='block font-bold link text-success my-4' href="https://royalbikes-76899.web.app" target='_blank'>Royal Bikes</a>
                        <a className='block font-bold link text-success my-4' href="https://mister-bd-gym.web.app/" target='_blank'>Mister BD Gym</a>
                        <a className='block font-bold link text-success my-4' href="https://falcon-7x-arman-kabir.netlify.app/" target='_blank'>Falcon 7x</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;