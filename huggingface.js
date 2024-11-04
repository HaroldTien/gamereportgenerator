import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "hello"
};

for await (const event of replicate.stream("01-ai/yi-34b-chat:914692bbe8a8e2b91a4e44203e70d170c9c5ccc1359b283c84b0ec8d47819a46", { input })) {
  process.stdout.write(`${event}`)
  //=> ""
};
process.stdout.write("\n");