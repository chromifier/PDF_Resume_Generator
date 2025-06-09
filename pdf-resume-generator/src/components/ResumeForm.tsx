import React from 'react';

const ResumeForm = () => {
  return (
    <div className="resume-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        {/* Add more fields as needed */}
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}

export default ResumeForm;