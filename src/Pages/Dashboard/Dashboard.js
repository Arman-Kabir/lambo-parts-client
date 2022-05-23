import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className="text-3xl font-bold text-purple-500 text-center">Welcome to Dashboard</h2>
                <Outlet></Outlet>
                {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>


            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addareview">Add a Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;