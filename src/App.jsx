import React, { useState } from "react";
import './App.css'
import Navbar from "./pages/Navbar";
import DonationRequests from "./components/DonationRequests";
import SeekerRequests from "./components/SeekerRequests";
import Footer from "./pages/Footer";
import BloodDonationProcessPage from "./pages/BloodDonationProcessPage";
import BloodJournyPage from "./pages/BloodJournyPage";
import BeforeAfterDonationPage from "./pages/BeforeAfterDonationPage";
import RegisterForm from "./components/RegisterForm";
import BloodSeekerForm from "./components/BloodSeekerForm";
// import CampList from "./components/CampList";


function App() {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    { name: "Blood Donation Process ", component: <BloodDonationProcessPage /> },
    { name: "Blood Donation form", component: <RegisterForm/> },
    { name: "Blood Seeker form", component: <BloodSeekerForm /> },
    { name: "Donation Requests", component: <DonationRequests /> },
    { name: "Seeker Requests", component: <SeekerRequests /> },
    { name: "What to Do Before and After Donation", component: <BeforeAfterDonationPage /> },
    { name: "Blood Journey ", component: <BloodJournyPage /> },
  ];

  const togglePage = (index) => {
    setActivePage((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="w-full mx-auto bg-white shadow-md">
          {pages.map((page, index) => (
            <div key={index}>
              <div
                className={`flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-100 ${
                  activePage === index ? "bg-gray-100" : ""
                }`}
                onClick={() => togglePage(index)}
              >
                <span className="font-medium text-gray-800">{page.name}</span>
                <span className="text-gray-600">
                  {activePage === index ? "▼" : "▶"}
                </span>
              </div>

              {/* Page Content */}
              {activePage === index && (
                <div className="p-4 bg-gray-50">
                  {page.component}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default App
