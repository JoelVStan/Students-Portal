"use client";
import Navbar from './components/Navbar';
import { useState, useEffect, SetStateAction } from 'react';
import TileView from './components/TileView';
import DetailedView from './components/DetailedView';

interface Student {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    age: number;
  };
  phone: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    thumbnail: string;
    large: string;
  };
}

export default function Home() {
  const [view, setView] = useState<'grid' | 'tile'>('grid');
  const [students, setStudents] = useState<Student[]>([]);
  const [expandedStudent, setExpandedStudent] = useState<Student | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://randomuser.me/api/?results=10');
      const data = await res.json();
      setStudents(data.results);
    }
    fetchData();
  }, []);

  // Define the click handler to set the expanded student
  const handleTileClick = (student: Student) => {
    setExpandedStudent(student);
  };

  // Define the close handler to reset the expanded student
  const handleClose = () => {
    setExpandedStudent(null);
  };

  return (
    <div>
      <Navbar />
      <div className='m-3'>
      <h1 className="text-3xl font-bold mb-4">Students</h1>
      <div className="mb-4">
        <button
          className={`px-4 py-2 rounded mr-2 ${
            view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('grid')}
        >
          Grid View
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === 'tile' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('tile')}
        >
          Tile View
        </button>
      </div>

      {view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {students.map((student, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow-md bg-white"
              // onClick={() => handleTileClick(student)}
            >
              <img
                src={student.picture.thumbnail}
                alt={`${student.name.first} ${student.name.last}`}
                className="w-full h-auto mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">
                {student.name.first} {student.name.last}
              </h2>
              <div className='text-sm'>
                <p>{student.email}</p>
                <p>Age: {student.dob.age}</p>
                <p>
                  Location: {student.location.city}, {student.location.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <TileView students={students} onTileClick={handleTileClick} />
      )}

      {expandedStudent && (
        <DetailedView student={expandedStudent} onClose={handleClose} />
      )}
      </div>
    </div>
  );
}