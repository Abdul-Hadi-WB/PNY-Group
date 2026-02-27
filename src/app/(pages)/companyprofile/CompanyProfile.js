"use client";

import React from 'react';

const CompanyProfile = () => {
  const pdfUrl = "https://pnygroup.co/wp-content/uploads/2025/02/PNY-Group-1-1.pdf";
  
  return (
    <div style={{ 
      height: '100vh', 
      width: '100%', 
      margin: 0, 
      padding: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
        title="PNY Group Company Profile"
        width="100%"
        height="100%"
        style={{ 
          border: 'none',
          background: 'white',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
};

export default CompanyProfile;