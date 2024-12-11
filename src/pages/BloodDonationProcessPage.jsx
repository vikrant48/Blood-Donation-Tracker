import React from 'react';
import regi from '../assets/regi.jpg';
import donate from '../assets/donate.jpeg';
import refresh from '../assets/refreshment.png';

function BloodDonationProcessPage() {
    return (
        <div className="font-sans bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="text-center py-12 bg-red-500 text-white px-8 lg:px-32">
                <h1 className="text-4xl md:text-5xl font-bold">The Blood Donation Process</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    The entire blood donation process, from arrival to departure, typically takes around an hour. However, the actual donation usually lasts only 8 to 10 minutes.
                </p>
            </header>

            {/* Section 1: Registration and Medical Screening */}
            <section className="py-12 px-6 lg:px-48 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Registration and Medical Screening</h2>
                <div className="flex flex-col shadow-lg rounded-lg overflow-hidden md:flex-row items-center md:space-x-10">
                    <img
                        src={regi}
                        alt="Registration Desk"
                        className="w-full md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
                    />
                    <div className="text-lg space-y-6 md:w-1/2 px-2">
                        <p>Start your donation process by scanning your ID or entering your details, then proceed to the waiting area.</p>
                        <p>We’ll verify your identity using an accepted ID, such as a driver’s license, military ID, passport, or green card.</p>
                        <p>Your personal details, including name, date of birth, and address, will be confirmed.</p>
                        <p>Health checks will include measuring your temperature, pulse, blood pressure, and hemoglobin levels.</p>
                        <p>In a confidential interview, you’ll be asked about your medical history, travel, and any medications you're taking.</p>
                    </div>
                </div>
            </section>

            {/* Section 2: Your Donation */}
            <section className="py-12 px-6 lg:px-48 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Your Donation</h2>
                <div className="flex flex-col shadow-lg rounded-lg overflow-hidden md:flex-row items-center md:space-x-10">
                    <img
                        src={donate}
                        alt="Donation Process"
                        className="w-full md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
                    />
                    <div className="text-lg space-y-6 md:w-1/2 px-2">
                        <p>The process begins with cleaning an area on your arm before inserting a sterile needle for the blood draw. (This quick pinch lasts only a few seconds.)</p>
                        <p>A whole blood donation typically takes 8-10 minutes, during which you’ll relax comfortably as about a pint of blood is collected.</p>
                        <p>For a Power Red donation, a special device extracts two units of red blood cells and returns your plasma and saline through the same sterile needle in around 45 minutes.</p>
                        <p>Plasma donation uses a single-use kit to separate plasma while returning your red cells, platelets, and saline, taking about 45 minutes.</p>
                        <p>Platelet donation involves collecting platelets and a small amount of plasma using a single-use kit, which takes approximately two hours.</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Refreshment and Recovery */}
            <section className="py-12 px-6 lg:px-48 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Refreshment and Recovery</h2>
                <div className="flex flex-col shadow-lg rounded-lg overflow-hidden md:flex-row items-center md:space-x-10">
                    <img
                        src={refresh}
                        alt="Refreshment Area"
                        className="w-full md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
                    />
                    <div className="text-lg space-y-6 md:w-1/2 px-2">
                        <p>After donating, you’ll have a snack and something to drink in the refreshment area.</p>
                        <p>You’ll leave after approximately 15 minutes and continue your normal routine.</p>
                        <p>Enjoy the feeling of accomplishment knowing you are helping to save lives.</p>
                        <p>Take a selfie or share your good deed with friends to inspire them to become blood donors.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BloodDonationProcessPage;
