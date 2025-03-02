import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://api.deepgram.com/v1",
	apiKey: process.env.DEEPGRAM_API_KEY,
});

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "deepseek-chat",
    });
  
    console.log(completion.choices[0].message.content);
  }

main();
