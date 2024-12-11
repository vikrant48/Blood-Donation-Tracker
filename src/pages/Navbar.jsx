import React, { useState } from "react";
import logo from '../assets/logo.png'

function Navbar() {

  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-lg font-bold">Blood Donation</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
