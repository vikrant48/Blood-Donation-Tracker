import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function SeekerRequests() {
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState(requests);
    const [bloodGroupFilter, setBloodGroupFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const snapshot = await getDocs(collection(db, "seeker"));
                const fetchedRequests = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Fetched requests:", fetchedRequests);
                setRequests(fetchedRequests);
            } catch (error) {
                console.error("Error fetching seeker requests:", error);
            }
        };
        fetchRequests();
    }, []);

    useEffect(() => {
        const filtered = requests.filter((request) => {
            return (
                (bloodGroupFilter === "" || request.bloodGroup === bloodGroupFilter) &&
                (locationFilter === "" || request.location.toLowerCase().includes(locationFilter.toLowerCase()))
            );
        });
        setFilteredRequests(filtered);
    }, [bloodGroupFilter, locationFilter, requests]);


    return (
        <div className="mb-6 bg-white p-6 shadow-lg rounded-lg px-8 lg:px-48">
            <h2 className="text-xl font-bold mb-4">Blood Seeker Requests</h2>

            <div className="mb-4 flex gap-4">
                <select
                    value={bloodGroupFilter}
                    onChange={(e) => setBloodGroupFilter(e.target.value)}
                    className="border rounded-lg p-2 w-1/3 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Blood Groups</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>

                <input
                    type="text"
                    placeholder="Filter by location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="border rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left font-semibold">Name</th>
                            <th className="border p-2 text-left font-semibold">Blood Group</th>
                            <th className="border p-2 text-left font-semibold">Location</th>
                            <th className="border p-2 text-left font-semibold">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.length > 0 ? (
                            filteredRequests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50">
                                    <td className="border p-2">{request.name}</td>
                                    <td className="border p-2">{request.bloodGroup}</td>
                                    <td className="border p-2">{request.location}</td>
                                    <td className="border p-2">{request.contect}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center border p-2 text-gray-500">
                                    No matching seeker found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SeekerRequests