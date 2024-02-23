// src/components/Section.js
import React from 'react';

const Section = ({ title, backgroundUrl, children }) => {
    return (
        <div style={{ backgroundImage: `url(${backgroundUrl})` }} className="section">
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Section;
