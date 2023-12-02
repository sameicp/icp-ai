// File: /components/AssignmentForm.js

import { useState } from "react";
import useApi from "@/hooks/useApi";
import { getUserPrompt } from "../prompts/promptUtils";

const AssignmentForm = () => {
  const [subject, setSubject] = useState("");
  const [requirements, setRequirements] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = `${subject} - ${requirements} - ${instructions}`; // Combine input fields for the assignment
    setSubmitValue(getUserPrompt(input));
  };

  // Fetch suggestions from the API
  const { data, error, loading } = useApi("/api/openai", "POST", submitValue);

  // Log data for debugging
  if (data) {
    console.log("Data from API:", data.result); // Log the received suggestions for debugging
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="requirements">Requirements:</label>
        <textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" disabled={loading}>
        Submit
      </button>
      {/* Display loading or errors if present */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AssignmentForm;
