import { pipeline } from '@huggingface/transformers';

// Wrap in async function to properly handle await
async function analyzeSentiment() {
    const classifier = await pipeline('sentiment-analysis');
    const result = await classifier('I love my girl friend and i want to marry her!');
    console.log(result);
}

// Execute the function
analyzeSentiment().catch(console.error);