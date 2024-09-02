import React from 'react';

// Define the type for the props
interface TileViewProps {
  students: Student[];
  onTileClick: (student: Student) => void;
}

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

const TileView: React.FC<TileViewProps> = ({ students, onTileClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student, index) => (
        <div
          key={index}
          className="p-4 border rounded shadow-md bg-white flex items-center justify-between"
          onClick={() => onTileClick(student)}
        >
          <div className="flex items-center">
            <img
              src={student.picture.thumbnail}
              alt={`${student.name.first} ${student.name.last}`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {student.name.first} {student.name.last}
              </h2>
              <p className='text-sm'>{student.email}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="px-2 py-1 text-sm text-blue-600">
              Edit
            </button>
            <button className="px-2 py-1 text-sm text-red-600">
              Delete
            </button>
            <button className="px-2 py-1 text-sm text-yellow-600">
              Flag
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TileView;
