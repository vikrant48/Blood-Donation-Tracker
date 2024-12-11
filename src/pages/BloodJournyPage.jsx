import React from 'react'
import stepOneImg from '../assets/firstimg.jpeg'
import stepTwoImg from '../assets/steptwoimg.jpeg'
import stepThreeImg from '../assets/stepthreeimg.jpeg'
import stepFourImg from '../assets/stepfourimg.jpeg'
import stepFiveImg from '../assets/stepfiveimg.jpeg'
import stepSixImg from '../assets/stepsiximg.jpeg'

function BloodJournyPage() {
    const steps = [
        {
            image: stepOneImg,
            title: 'Step One',
            subtitle: 'The Donation',
            description: [
                'You arrive for your blood donation appointment.',
                'Health history and mini physical are completed.',
                'For a whole blood donation, about 1 pint of blood is collected; several small test tubes of blood are also collected for testing.',
                'Your donation, test tubes and your donor record are labeled with an identical bar code label.',
                'Your donation is kept on ice before being taken to a Red Cross center for processing; the test tubes go to the lab.',
            ],
        },
        {
            image: stepTwoImg,
            title: 'Step Two',
            subtitle: 'Processing',
            description: [
                'At our processing center, information about your donation is scanned into a computer database.',
                'Most whole blood donations are spun in centrifuges to separate it into transfusable components: red cells, platelets, and plasma.',
                'Plasma may be processed into components such as cryoprecipitate, which helps control the risk of bleeding by helping blood to clot.',
                'Red cells and platelets are leukoreduced, which means white cells are removed in order to reduce the possibility of the recipient having a reaction to the transfusion.',
                'Each component is packaged as a "unit," a standardized amount that doctors will use when transfusing a patient.',
            ],
        },
        {
            image: stepThreeImg,
            title: 'Step Three',
            subtitle: 'Testing',
            description: [
                'In parallel with Step 2, your test tubes arrive at a testing laboratory.',
                'A dozen tests are performed to establish the blood type and test for infectious diseases.',
                'Test results are transferred electronically to the processing center within 24 hours.',
                'If a test result is positive, your donation will be discarded and you will be notified.',
            ],
        },
        {
            image: stepFourImg,
            title: 'Step Four',
            subtitle: 'Storage',
            description: [
                'When test results are received, units suitable for transfusion are labeled and stored.',
                'Red cells are stored in refrigerators at 6°C for up to 42 days.',
                'Platelets are stored at room temperature in agitators for up to five days.',
                'Plasma and cryo are frozen and stored in freezers for up to one year.',
            ],
        },
        {
            image: stepFiveImg,
            title: 'Step Five',
            subtitle: 'Distribution',
            description: [
                'Blood is available to be shipped to hospitals 24 hours a day, 7 days a week.',
                'Hospitals typically keep some blood units on their shelves, but may call for more at any time, such as in case of large-scale emergencies.',
            ],
        },
        {
            image: stepSixImg,
            title: 'Step Six',
            subtitle: 'Transfusion',
            description: [
                'An ill or injured patient arrives at a hospital or treatment center.',
                'Physicians determine whether the patient requires a transfusion and, if so, which type.',
                'Blood transfusions are given to patients in a wide range of circumstances, including serious injuries, surgeries, childbirth, anemia, blood disorders, and more.',
            ],
        },
    ];
    return (
        <div className="bg-gray-100 py-10">
            <header className="text-center py-10 bg-red-500 text-white">
                <h1 className="text-4xl font-bold">What Happens to Donated Blood</h1>
                <p className="mt-2 text-lg">
                Your blood journeys through many steps and tests that ensure our blood supply is as safe as possible and helps as many people as possible.
                </p>
            </header>
            <h1 className="text-center text-3xl font-bold mb-6">Learn About Each Step of the Blood Journey</h1>
            <div className="container mx-auto px-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center mb-10 bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={step.image}
                            alt={step.subtitle}
                            className="w-full md:w-1/3 h-64 object-cover"
                        />
                        <div className="p-6 w-full md:w-2/3">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h2>
                            <h3 className="text-lg font-semibold text-gray-600 mb-4">{step.subtitle}</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                {step.description.map((desc, i) => (
                                    <li key={i} className="mb-2">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BloodJournyPage