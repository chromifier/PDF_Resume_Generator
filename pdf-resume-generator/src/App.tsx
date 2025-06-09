import './App.css'
import React, {useState} from 'react';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
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
                <div className="form-group p-4 border-gray-200">
                <label className='font-bold' htmlFor="name">Name:</label>
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
                <label className='font-bold' htmlFor="email">Email:</label>
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
                <label className='font-bold' htmlFor="phone">Phone:</label>
                <input 
                className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent" 
                type="tel" 
                id="phone"
                name="phone" 
                onChange={(e) => setResumeData({...resumeData, phone: e.target.value})}
                value={resumeData.phone}
                required />
              </div>
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
          <div className="resume-output p-4 border border-gray-200 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">{resumeData.name || 'Your Name'}</h3>
            <p className="text-gray-700 mb-1">{resumeData.email || 'Your Email'}</p>
            <p className="text-gray-700 mb-1">{resumeData.phone || 'Your Phone'}</p>
            {/* Add more fields as needed */}
            <p className="text-gray-500">This is a placeholder for your resume content.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
