import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function BloodSeekerForm() {
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "",
        location: "",
        contect: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "seeker"), formData);
            alert("Registration Successful!");
            setFormData({ name: "", bloodGroup: "", location: "", contect: "" });
        } catch (error) {
            alert("Error registering: " + error.message);
        }
    };

    return (
        <div className="mb-6 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Blood Seeker Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Blood Group:</label>
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="O+">O+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="O-">O-</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Contact Number:</label>
                    <input
                        type="tel"
                        name="contect"
                        value={formData.contect}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button className="bg-red-500 text-white py-2 px-4 rounded">Register</button>
            </form>
        </div>
    );
}

export default BloodSeekerForm