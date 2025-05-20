import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn.",
});

console.log(response.output_text);
/*
To run this project, you need:
1. Node.js installed on your system.
2. The 'openai' npm package installed. Run:
    npm install openai
3. An OpenAI API key set as an environment variable (OPENAI_API_KEY).

Also, ensure your Node.js version supports top-level await or wrap the code in an async function.
*/