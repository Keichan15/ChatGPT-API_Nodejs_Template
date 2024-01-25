import OpenAI from "openai";

// 1.
import readLine from 'readline';

const openai = new OpenAI({
  apiKey: "取得したAPIキー",
});

async function main() {

  // 2.
  var reader = readLine.createInterface({
    //2.1
    input: process.stdin,
    //2.2
    output: process.stdout
  })
  
  // 3.
  var input_string = '';

  // 4. 
  reader.on('line', async (line) => {
    // 4.1
    input_string = line;
    // 4.2
    reader.close();
    
    // 5.
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: input_string}],
        model: "gpt-3.5-turbo",
    });

    // 6.
    console.log(completion.choices[0].message.content);
    
  });

}

main();