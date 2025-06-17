import React from "react";

interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperienceInputProps {
  workExperience: WorkExperience[];
  setWorkExperience: (workExperience: WorkExperience[]) => void;
}

const WorkExperienceInput: React.FC<WorkExperienceInputProps> = ({
  workExperience,
  setWorkExperience,
}) => {
  const handleWorkExperienceChange = (
    index: number,
    field: keyof WorkExperience,
    value: string
  ) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [field]: value,
    };
    setWorkExperience(updatedWorkExperience);
  };

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeWorkExperience = (index: number) => {
    // Remove the work experience entry at the given index
    const updatedWorkExperience = [
      ...workExperience.slice(0, index),
      ...workExperience.slice(index + 1),
    ];
    setWorkExperience(updatedWorkExperience);
  };

  return (
    <div className="form-group border-gray-400 border-2 mt-4">
      <h3 className="text-lg font-semibold p-4 bg-gray-200 text-blue-600 border-b-1 border-gray-400">
        Work Experience
      </h3>
      {workExperience.map((entry, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 p-4">
          <div className="form-group">
            <label className="font-bold" htmlFor={`workCompany-${index}`}>
              Company
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`workCompany-${index}`}
              placeholder="Company Name"
              value={entry.company}
              onChange={(e) =>
                handleWorkExperienceChange(index, "company", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`workPosition-${index}`}>
              Position
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`workPosition-${index}`}
              placeholder="Position"
              value={entry.position}
              onChange={(e) =>
                handleWorkExperienceChange(index, "position", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`workStartDate-${index}`}>
              Start Date
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`workStartDate-${index}`}
              placeholder="Start Date"
              value={entry.startDate}
              onChange={(e) =>
                handleWorkExperienceChange(index, "startDate", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`workEndDate-${index}`}>
              End Date
            </label>
            <input
              className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              type="text"
              id={`workEndDate-${index}`}
              placeholder="End Date"
              value={entry.endDate}
              onChange={(e) =>
                handleWorkExperienceChange(index, "endDate", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label className="font-bold" htmlFor={`workDescription-${index}`}>
              Description
            </label>
            <textarea
              className="m-2 p-2 border-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent w-full"
              id={`workDescription-${index}`}
              placeholder="Description of your role and responsibilities"
              rows={3}
              value={entry.description}
              onChange={(e) =>
                handleWorkExperienceChange(index, "description", e.target.value)
              }
            />
          </div>
          <button
            type="button"
            className="mt-2 cursor-pointer text-red-500 hover:text-red-700"
            onClick={() => removeWorkExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="block m-auto my-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded shadow transition-colors duration-200"
        onClick={addWorkExperience}
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceInput;
