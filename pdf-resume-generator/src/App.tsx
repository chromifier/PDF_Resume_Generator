import "./App.css";
import React, { useState } from "react";
import SkillsInput from "./components/SkillsInput";
import EducationInput from "./components/EducationInput";
import WorkExperienceInput from "./components/WorkExperienceInput";

function App() {
  // const [resumeData, setResumeData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   location: "",
  //   linkedin: "",
  //   github: "",
  //   professionalSummary: "",
  //   education: [] as {
  //     school: string;
  //     degree: string;
  //     graduationDate: string;
  //   }[],
  //   workExperience: [] as {
  //     company: string;
  //     position: string;
  //     startDate: string;
  //     endDate: string;
  //     description: string[];
  //   }[],
  //   projects: [] as { title: string; description: string }[],
  //   skills: [] as string[],
  //   certifications: [] as { title: string; issuer: string; date: string }[],
  //   // Add more fields as needed
  // });

  const [resumeData, setResumeData] = useState({
    name: "Jane Doe",
    email: "jane.doe@email.com",
    phone: "555-123-4567",
    location: "New York, NY",
    linkedin: "https://www.linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    professionalSummary:
      "Results-driven software engineer with 5+ years of experience designing, developing, and deploying scalable web applications. Passionate about clean code and innovative solutions.",
    education: [
      {
        school: "Massachusetts Institute of Technology",
        degree: "B.S. in Computer Science",
        graduationDate: "May 2018",
      },
      {
        school: "Stanford University",
        degree: "M.S. in Artificial Intelligence",
        graduationDate: "June 2020",
      },
    ],
    workExperience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        startDate: "Jan 2022",
        endDate: "Present",
        description: [
          "Lead a team of 6 engineers to deliver enterprise SaaS products.",
          "Architected and implemented a microservices-based backend.",
          "Mentored junior developers and conducted code reviews.",
        ],
      },
      {
        company: "Webify Corp.",
        position: "Frontend Developer",
        startDate: "Jun 2019",
        endDate: "Dec 2021",
        description: [
          "Developed responsive React applications for e-commerce clients.",
          "Optimized UI performance and accessibility.",
          "Collaborated with designers to improve user experience.",
        ],
      },
      {
        company: "Startup Hub",
        position: "Software Engineer Intern",
        startDate: "May 2018",
        endDate: "Aug 2018",
        description: [
          "Built MVP features for a social networking app.",
          "Wrote unit and integration tests to ensure code quality.",
          "Presented project demos to stakeholders.",
        ],
      },
    ],
    projects: [
      {
        title: "Open Source Dashboard",
        description:
          "Created a customizable analytics dashboard using React and D3.js.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Docker",
      "AWS",
    ],
    certifications: [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2021",
      },
    ],
  });

  return (
    <>
      <div
        id="header"
        className="top-0 sticky bg-gray-50 p-8 border-b border-gray-200"
      >
        <h1 className="text-3xl text-center font-bold text-gray-800">
          PDF Resume Generator
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/2 p-8 overflow-y-scroll max-h-screen">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Input</h2>
          <p className="text-gray-600 mb-4">Enter your resume details here.</p>
          <div className="resume-form">
            {/* This form will need to move into a seperate component */}
            <form>
              <div className="border-2 border-gray-400">
                <h3 className="text-lg font-semibold p-4 bg-gray-200 border-b-1 text-blue-600 border-gray-400">
                  Personal Information
                </h3>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, name: e.target.value })
                    }
                    value={resumeData.name}
                    required
                  />
                </div>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, email: e.target.value })
                    }
                    value={resumeData.email}
                    required
                  />
                </div>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, phone: e.target.value })
                    }
                    value={resumeData.phone}
                    required
                  />
                </div>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, State"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, location: e.target.value })
                    }
                    value={resumeData.location}
                  />
                </div>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="linkedin">
                    LinkedIn
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://www.linkedin.com/in/yourprofile"
                    onChange={(e) =>
                      setResumeData({ ...resumeData, linkedin: e.target.value })
                    }
                    value={resumeData.linkedin}
                  />
                </div>
                <div className="form-group px-4 border-gray-200">
                  <label className="font-bold" htmlFor="github">
                    GitHub
                  </label>
                  <input
                    className="m-2 p-2 border-b-2 border-gray-400 focus:border-blue-600 outline-none bg-transparent"
                    type="url"
                    id="github"
                    name="github"
                    placeholder=""
                    onChange={(e) =>
                      setResumeData({ ...resumeData, github: e.target.value })
                    }
                    value={resumeData.github}
                  />
                </div>
                <div className="form-group p-4 border-gray-200">
                  <label className="font-bold" htmlFor="phone">
                    Professional Summary
                  </label>
                  <textarea
                    className="m-2 p-2 border-2 border-gray-400 focus:border-blue-600 w-full"
                    id="professionalSummary"
                    name="professionalSummary"
                    rows={4}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        professionalSummary: e.target.value,
                      })
                    }
                    value={resumeData.professionalSummary}
                  />
                </div>
              </div>

              <WorkExperienceInput
                workExperience={resumeData.workExperience}
                setWorkExperience={(workExperience) =>
                  setResumeData({ ...resumeData, workExperience })
                }
              />
              <SkillsInput
                skills={resumeData.skills}
                setSkills={(skills) => setResumeData({ ...resumeData, skills })}
              />
              <EducationInput
                education={resumeData.education}
                setEducation={(education) =>
                  setResumeData({ ...resumeData, education })
                }
              />
              {/* Add more components for projects, certifications, etc. */}

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
          <p className="text-gray-600 mb-4">
            Your generated resume will appear here.
          </p>
          <div className="resume-output p-6 border border-gray-200 bg-white rounded shadow space-y-6">
            {/* Personal Information */}
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h3 className="text-gray-700 text-2xl">
                {resumeData.name || "Your Name"}
              </h3>
              <div className="flex flex-row gap-2 justify-center">
                <p className="text-gray-700">
                  {resumeData.email || "Your Email"}
                </p>
                {resumeData.phone && <span className="text-gray-700">|</span>}
                <p className="text-gray-700">
                  {resumeData.phone || "Your Phone"}
                </p>
                {resumeData.location && (
                  <span className="text-gray-700">|</span>
                )}
                <p className="text-gray-700">
                  {resumeData.location || "Your Location"}
                </p>
                {resumeData.linkedin && (
                  <span className="text-gray-700">|</span>
                )}
                <p className="text-gray-700">
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                </p>
                {resumeData.github && <span className="text-gray-700">|</span>}
                <p className="text-gray-700">
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>

            {/* Professional Summary */}
            {resumeData.professionalSummary && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Professional Summary
                </h3>
                <p className="text-gray-700">
                  {resumeData.professionalSummary}
                </p>
              </div>
            )}

            {/* Work Experience*/}
            {resumeData.workExperience.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Professional Experience
                </h3>
                <hr />
                {resumeData.workExperience.map((entry, index) => (
                  <div key={index} className="my-2">
                    <div className="flex flex-row gap-2">
                      <p className="text-gray-700 font-bold text-sm">
                        {entry.company || "Your Company"}
                      </p>
                      <span className="text-gray-700 font-bold text-sm">|</span>
                      <p className="text-gray-700 font-bold text-sm">
                        {entry.position || "Your Position"}
                      </p>
                      <p className="ml-auto text-right text-gray-700 text-sm italic">
                        {entry.startDate || "Start Date"} -{" "}
                        {entry.endDate || "Present"}
                      </p>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {entry.description && entry.description.length > 0 ? (
                        entry.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))
                      ) : (
                        <li>Description</li>
                      )}
                    </ul>
                  </div>
                ))}
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Education
                  </h3>
                  {resumeData.education.map((entry, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-gray-700">
                        <strong>School:</strong> {entry.school || "Your School"}
                      </p>
                      <p className="text-gray-700">
                        <strong>Degree:</strong> {entry.degree || "Your Degree"}
                      </p>
                      <p className="text-gray-700">
                        <strong>Graduation Date:</strong>{" "}
                        {entry.graduationDate || "Your Graduation Date"}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
