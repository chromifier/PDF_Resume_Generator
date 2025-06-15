import React from 'react';

interface Education {
  school: string;
  degree: string;
  graduationDate: string;
}

interface EducationInputProps {
  education: Education[];
  setEducation: (education: Education[]) => void;
}

const EducationInput: React.FC<EducationInputProps> = ({ education, setEducation }) => {
  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', graduationDate: '' }]);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  return (
    <div className="form-group border-gray-400 border-2">
      <h3 className="text-lg font-semibold p-4 bg-gray-200 text-blue-600 border-b-1 border-gray-400">
        Education (Optional)
      </h3>
      {education.map((entry, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-4">
          <div className="form-group">
            <label className="font-bold" htmlFor={`educationSchool-${index}`}>
              School
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`educationSchool-${index}`}
              placeholder="School Name"
              value={entry.school}
              onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`educationDegree-${index}`}>
              Degree
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`educationDegree-${index}`}
              placeholder="Degree"
              value={entry.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`educationGraduationDate-${index}`}>
              Graduation Date
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`educationGraduationDate-${index}`}
              placeholder="Graduation Date"
              value={entry.graduationDate}
              onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
            />
          </div>
          <button
            type="button"
            className="mt-2 cursor-pointer text-red-500 hover:text-red-700"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="m-auto block my-4 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded shadow transition-colors duration-200"
        onClick={addEducation}
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationInput;