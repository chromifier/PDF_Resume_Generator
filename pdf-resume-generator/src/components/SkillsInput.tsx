import React from 'react';

interface SkillsInputProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

const SkillsInput: React.FC<SkillsInputProps> = ({ skills, setSkills }) => {
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="my-4 form-group border-2 border-gray-400">
      <h3 className="text-lg font-semibold p-4 bg-gray-200 text-blue-600 border-b-1 border-gray-400">Skills (optional)</h3>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent flex-grow"
            type="text"
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
          <button
            type="button"
            className="ml-2 cursor-pointer text-red-500 hover:text-red-700"
            onClick={() => removeSkill(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="m-auto block my-4 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded shadow transition-colors duration-200"
        onClick={addSkill}
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsInput;