import React from "react";

function CampList() {
  const camps = [
    { id: 1, name: "City Hospital Camp", location: "Downtown" },
    { id: 2, name: "Red Cross Camp", location: "Westside" },
  ];

  return (
    <div className="mb-6 bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Nearby Donation Camps</h2>
      <ul>
        {camps.map((camp) => (
          <li key={camp.id} className="mb-2">
            <strong>{camp.name}</strong> - {camp.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampList;
