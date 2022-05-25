import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-12'>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-info">How will you improve the performance of a React Application?</h2>
                    <div className=''>
                        <p>1.Keeping component state local where necessary</p>
                        <p>2.Windowing or list virtualization in React</p>
                        <p>3.Lazy loading images in React</p>
                        <p>4.Memoizing React components to prevent unnecessary re-renders</p>
                        <p>5.Code-splitting in React using dynamic import()</p>
                        <p>6.CSS Animations Instead of JS Animations</p>
                        <p>7.Using a CDN</p>
                        <p>7.Consider Server-side Rendering</p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-info">What are the different ways to manage a state in a React application?</h2>
                    <div className=''>
                        <p>four main types of state to properly manage in React apps</p>
                        <p>1.Local state.</p>
                        <p>2.Global state.</p>
                        <p>3.Server state.</p>
                        <p>4.URL state.</p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-info">How does prototypical inheritance work?</h2>
                    <div className=''>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-info">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <div className=''>
                        <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                    </div>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-info">What is a unit test? Why should write unit tests?</h2>

                    <div className=''>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;