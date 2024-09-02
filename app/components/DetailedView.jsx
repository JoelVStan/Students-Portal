import React from 'react';

export default function DetailedView({ student, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          ✖ Close
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {student.name.first} {student.name.last}
        </h2>
        <img
          src={student.picture.large}
          alt={`${student.name.first} ${student.name.last}`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p>Email: {student.email}</p>
        <p>Age: {student.dob.age}</p>
        <p>Phone: {student.phone}</p>
        <p>Location: {student.location.city}, {student.location.country}</p>
        {/* Add more detailed fields as needed */}
      </div>
    </div>
  );
}
