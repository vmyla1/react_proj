import React from 'react';

function Sidebar() {
    return (
      <div className="w-64 bg-green-600 p-5">
        <div>
            <div className="text-white mb-10">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="text-2xl font-bold"> Borrowed</span>
            </div>
            <div className="bg-white p-2 rounded text-green-600 font-bold">
                <button className="mr-2 bg-green-200 px-4 py-1 rounded">Owner</button>
                <button className="px-4 py-1 rounded">Renter</button>
            </div>
            <div className="mt-5 text-white">
                <div className="mb-5">Dashboard</div>
                <button className="bg-green-700 text-white px-4 py-2 rounded flex items-center">
                    <i className="fas fa-plus mr-2"></i> Add New Listing
                </button>
                <div className="mt-5">Reporting & Analytics</div>
                <div className="mt-2">Rented Items</div>
                <div className="mt-2">Rental History</div>
            </div>
        </div>
      </div>
    );
  }

  function MainContent() {
    return (
      <div className="flex-1 p-10">
        <div className="flex-1 p-10">
                    <div className="flex justify-between mb-5">
                        <div className="flex space-x-2">
                            <input type="text" placeholder="What can we help you find?" className="border p-2 rounded"/>
                            <button className="border p-2 rounded bg-gray-200">Sort By: <span className="font-bold">Cost</span></button>
                        </div>
                        <div>
                            <i className="fas fa-bell fa-lg mr-4"></i>
                            <i className="fas fa-envelope fa-lg mr-4"></i>
                            <i className="fas fa-user-circle fa-lg mr-4"></i>
                            <i class="fas fa-bars fa-lg "></i>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded shadow">
                        <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                            <div>Item</div>
                            <div>Cost</div>
                            <div>Periods</div>
                            <div>Status</div>
                        </div>
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="grid grid-cols-4 gap-4 items-center py-4 border-b">
                                <div className="flex items-center">
                                    <img src="https://placehold.co/50x50" alt="Placeholder image of Bridal's Shoes" className="mr-2"/>
                                    Bridal's Shoes
                                </div>
                                <div>$70.33</div>
                                <div>3 days<br/>09/04/2023 - 10/04/2023</div>
                                <div>{index % 4 === 2 ? 'Overdue' : `Ends in ${5 - index} days`}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="border px-4 py-2 mx-1">1</button>
                        <button className="border px-4 py-2 mx-1">2</button>
                        <button className="border px-4 py-2 mx-1">3</button>
                        <span className="mx-1">...</span>
                        <button className="border px-4 py-2 mx-1">4</button>
                    </div>
                </div>
              </div>
    );
  }


  function Borrowod() {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    );
  }

export default Borrowod;