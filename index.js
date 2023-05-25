const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '',
});
const openai = new OpenAIApi(configuration);
const audioName = 'your_audio.format';


// Transcribe audio
async function transcribeAudio(filename) {
  const transcript = await openai.createTranscription(
    fs.createReadStream(audioName),
    'whisper-1'
  );
  return transcript.data.text;
}

// Main function
async function main() {
  const audioFilename = audioName;
  const transcription = await transcribeAudio(audioFilename);
  console.log('Transcription:', transcription);
}

main();