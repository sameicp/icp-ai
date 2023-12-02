// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content:
      "You are an AI assistant specialized in providing innovative ideas for academic assignments.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate innovative ideas and approaches for completing an academic assignment on '${input}'.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_assignment_ideas",
      description: "Generate ideas and approaches for an academic assignment.",
      parameters: {
        type: "object",
        properties: {
          ideas: {
            type: "array", // Use lowercase "array" for the array type
            items: {
              type: "string", // Define the type of items in the array (e.g., string)
            },
            description: "Array of generated ideas for the assignment",
          },
        },
        required: ["ideas"],
      },
    },
  ];
}
