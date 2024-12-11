import React from 'react';

function BeforeAfterDonationPage() {
    return (
        <div className="font-sans bg-gray-100 text-gray-800 ">
            {/* Header Section */}
            <header className="text-center py-12 bg-blue-600 text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">What to Do Before, During, and After Your Donation</h1>
            </header>

            {/* Section 1: Before Your Donation */}
            <section className="py-12 px-6 lg:px-48 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Before Your Donation</h2>
                <div className='shadow-lg rounded-lg overflow-hidden px-2'>
                    <div className="flex flex-col md:flex-row md:space-x-10 items-start">
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Make an Appointment</h3>
                            <p>Select a donation type and find a convenient time that works best for you.</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Get the Dish on Nutrition</h3>
                            <p>Consume iron-rich foods such as red meat, fish, poultry, beans, spinach, iron-fortified cereals, or raisins.</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Be Well Rested and Hydrate</h3>
                            <p>Get a good night’s sleep, eat healthy foods, and drink extra liquids before your donation.</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mt-10 mb-6">Additional Tips Before Donating:</h3>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Donating Platelets? Don't take aspirin for 2 days before your appointment.</li>
                        <li>Ask a friend to donate at the same time. You can support each other and do twice as much good!</li>
                    </ul>
                </div>
            </section>

            {/* Section 2: On the Day of Your Donation */}
            <section className="py-12 px-6 lg:px-48 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">On the Day of Your Donation</h2>
                <div className='shadow-lg rounded-lg overflow-hidden px-2'>
                    <div className="flex flex-col md:flex-row md:space-x-10 items-start">
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Donation Pass</h3>
                            <p>Take your Donation Pass on that day.</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Photo ID</h3>
                            <p>Please bring your donor card, driver's license, or two other forms of identification.</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Medication List</h3>
                            <p>We'll need to know about all prescription and over-the-counter medications you're taking.</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mt-10 mb-6">Additional Tips for the Day of Your Donation:</h3>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.</li>
                        <li>Eat a healthy meal, avoiding fatty foods like hamburgers, fries, or ice cream.</li>
                        <li>Wear a shirt with sleeves that you can roll up above your elbows.</li>
                        <li>Let us know if you have a preferred arm or vein that has been used successfully before to draw blood.</li>
                        <li>Relax, listen to music, talk to other donors, or read while you donate.</li>
                    </ul>
                </div>
            </section>

            {/* Section 3: After Your Donation */}
            <section className="py-12 px-6 lg:px-48 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">After Your Donation</h2>
                <div className='shadow-lg rounded-lg overflow-hidden px-2'>
                    <div className="flex flex-col md:flex-row md:space-x-10 items-start">
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Enjoy a Snack</h3>
                            <p>Relax for a few minutes in our refreshment & recovery area — have some cookies or other snacks — you’ve earned it!</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Tell Others About Your Good Deed</h3>
                            <p>The gratification of giving blood is a feeling you'll want to share.</p>
                        </div>
                        <div className="text-lg space-y-6 md:w-1/3">
                            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Drink Extra Liquids</h3>
                            <p>Drink an extra four (8 oz.) glasses of liquids and avoid alcohol over the next 24 hours.</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mt-10 mb-6">Additional Tips for After Your Donation:</h3>
                    <ul className="list-disc list-inside text-lg space-y-4">
                        <li>Keep the strip bandage on for the next several hours; to avoid a skin rash, clean the area around the bandage with soap and water.</li>
                        <li>Don’t do any heavy lifting or vigorous exercise for the rest of the day.</li>
                        <li>If the needle site starts to bleed, apply pressure and raise your arm straight up for 5-10 minutes or until bleeding stops.</li>
                        <li>If you experience dizziness or lightheadedness, sit or lie down until you feel better; avoid activities where fainting may lead to injury for at least 24 hours.</li>
                        <li>Keep eating iron-rich foods.</li>
                        <li>If you donate frequently, take multivitamins with iron to replenish your iron stores before your next donation.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default BeforeAfterDonationPage;