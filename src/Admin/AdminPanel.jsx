// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import './css/App.css';
import React from 'react'

const AdminPanel = () => {
  return (
    <div>
      
   <div>
  <title>
    Dashboard
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
  <div className="flex">
    {/* Sidebar */}
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 text-xl font-bold">
        CodingMSTR
      </div>
      <ul className="mt-6">
        <li className="flex items-center p-4 hover:bg-gray-200">
          <i className="fas fa-home mr-3">
          </i>
          Home
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200">
          <i className="fas fa-shopping-cart mr-3">
          </i>
          Products
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200">
          <i className="fas fa-chart-line mr-3">
          </i>
          Analytics
        </li>
        <li className="flex items-center p-4 hover:bg-gray-200">
          <i className="fas fa-cog mr-3">
          </i>
          Settings
        </li>
      </ul>
    </div>
    {/* Main Content */}
    <div className="flex-1 p-6">
      <div className="flex justify-between">
        <div className="w-1/3 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-wallet text-3xl mr-4">
            </i>
            <div>
              <div className="text-2xl">
                $500
              </div>
              <div>
                Total Earning
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-shopping-bag text-3xl mr-4">
            </i>
            <div>
              <div className="text-2xl">
                $900
              </div>
              <div>
                Total Order
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="fas fa-store text-3xl mr-4">
            </i>
            <div>
              <div className="text-2xl">
                $203k
              </div>
              <div>
                Total Income
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex">
        <div className="w-2/3 p-4 bg-white rounded-lg shadow-md">
          <div className="text-lg font-semibold">
            Company Performance
          </div>
          <div className="text-sm text-gray-500">
            Sales, Expenses, and Profit: 2014-2017
          </div>
          <img alt="Bar chart showing company performance from 2014 to 2021 with sales, expenses, and profit data" className="mt-4" height={300} src="https://storage.googleapis.com/a1aa/image/g25jksLl9rt_cSoxi5_1BjFtUcFMvdt_BzLdYzDpKx4.jpg" width={600} />
        </div>
        <div className="w-1/3 ml-6 p-4 bg-white rounded-lg shadow-md">
          <div className="text-lg font-semibold">
            Popular Products
          </div>
          <div className="mt-4">
            <div className="border-b py-2">
              Accordion 1
            </div>
            <div className="border-b py-2">
              Accordion 2
            </div>
            <div className="border-b py-2">
              Accordion 2
            </div>
            <div className="border-b py-2">
              Accordion 2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AdminPanel
