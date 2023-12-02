// AssignmentIdeasDisplay.js

import React from "react";

const AssignmentIdeasDisplay = ({ ideas }) => {
  return (
    <div className="assignment-ideas">
      <h2>Generated Assignment Ideas</h2>
      {ideas && ideas.length > 0 ? (
        <ul>
          {ideas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      ) : (
        <p>No ideas generated yet.</p>
      )}
    </div>
  );
};

export default AssignmentIdeasDisplay;
