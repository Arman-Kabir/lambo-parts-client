import React from 'react';

const Inquiry = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 my-28">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-3xl font-bold text-primary">Want to know anything from Us?</h1>
                        <h1 class="text-xl font-bold">We are waiting for your message</h1>
                        <p class="py-6">Our Support center members are waiting for you to reach them.
                        If u have any inquiry then message us and we will reply u soon in your mailbox.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Question</span>
                                </label>
                                <input type="text" placeholder="Your question" class="input input-bordered" />
                                
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-success">Ask Us Anything</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;