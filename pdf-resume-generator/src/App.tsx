import './App.css'
import React, {useState} from 'react';
import SkillsInput from './components/SkillsInput';
import EducationInput from './components/EducationInput';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    professionalSummary: '',
    skills: [] as string[],
    education: [] as { school: string; degree: string; graduationDate: string }[],
    // Add more fields as needed
  });

  return (
    <>
      <div id="header" className="top-0 sticky bg-gray-50 p-8 border-b border-gray-200">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          PDF Resume Generator
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Input</h2>
          <p className="text-gray-600 mb-4">Enter your resume details here.</p>
          <div className="resume-form">
          {/* This form will need to move into a seperate component */}
            <form>
                <div className='border-2 border-gray-400'>
                <h3 className="text-lg font-semibold p-4 bg-gray-200 border-b-1 text-blue-600 border-gray-400">Personal Information</h3>
                <div className="form-group p-4 border-gray-200">
                <label className='font-bold' htmlFor="name">Name</label>
                <input
                  className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setResumeData({...resumeData, name: e.target.value})}
                  value={resumeData.name}
                  required
                />
                </div>
              <div className="form-group p-4 border-gray-200">
                <label className='font-bold' htmlFor="email">Email</label>
                <input 
                  className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent" 
                  type="email" 
                  id="email" 
                  name="email" 
                  onChange={(e) => setResumeData({...resumeData, email: e.target.value})}
                  value={resumeData.email}
                  required />
              </div>
              <div className="form-group p-4 border-gray-200">
                <label className='font-bold' htmlFor="phone">Phone</label>
                <input 
                className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent" 
                type="tel" 
                id="phone"
                name="phone" 
                onChange={(e) => setResumeData({...resumeData, phone: e.target.value})}
                value={resumeData.phone}
                required />
              </div>
              <div className="form-group p-4 border-gray-200">
                <label className='font-bold' htmlFor="phone">Professional Summary (optional)</label>
                <textarea 
                className="m-2 p-2 border-2 border-gray-400 focus:border-blue-600 w-full"
                id="professionalSummary"
                name="professionalSummary" 
                rows={4}
                onChange={(e) => setResumeData({...resumeData, professionalSummary: e.target.value})}
                value={resumeData.professionalSummary} />
              </div>
            </div>
                
              
              <SkillsInput
                skills={resumeData.skills}
                setSkills={(skills) => setResumeData({ ...resumeData, skills })}
              />
              <EducationInput
                education={resumeData.education}
                setEducation={(education) => setResumeData({ ...resumeData, education })}
              />
                
              {/* Add more fields as needed */}
                <button
                className="mt-6 w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200"
                type="submit"
                >
                Generate Resume
                </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 p-8 bg-gray-50 border-l border-gray-200">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Output</h2>
  <p className="text-gray-600 mb-4">Your generated resume will appear here.</p>
  <div className="resume-output p-6 border border-gray-200 bg-white rounded shadow space-y-6">
    {/* Personal Information */}
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Information</h3>
      <p className="text-gray-700"><strong>Name:</strong> {resumeData.name || 'Your Name'}</p>
      <p className="text-gray-700"><strong>Email:</strong> {resumeData.email || 'Your Email'}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {resumeData.phone || 'Your Phone'}</p>
    </div>

    {/* Professional Summary */}
    {resumeData.professionalSummary && (
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Summary</h3>
        <p className="text-gray-700">{resumeData.professionalSummary}</p>
      </div>
    )}

    {/* Skills */}
    {resumeData.skills.length > 0 && (
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Education */}
<div>
  {resumeData.education.length > 0 && (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
      {resumeData.education.map((entry, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-700"><strong>School:</strong> {entry.school || 'Your School'}</p>
          <p className="text-gray-700"><strong>Degree:</strong> {entry.degree || 'Your Degree'}</p>
          <p className="text-gray-700"><strong>Graduation Date:</strong> {entry.graduationDate || 'Your Graduation Date'}</p>
        </div>
      ))}
    </>
  )}
</div>
  </div>
</div>
      </div>
    </>
  )
}

export default App
