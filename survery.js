const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  console.log(`Cool! Nice to meet you ${answer}`);
  let name = answer
  rl.question(`What's an activity you like doing? `, (answer1) => {
    console.log(`Nice, ${answer1} is always good fun.`);
    let activity = answer1
    
    rl.question(`What do you listen to while doing that? `, (answer2) => {
      console.log(`Sweet ${answer2} is a bop!`);
      let music = answer2
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer3) => {
        console.log(`Duh ${answer3} is easily the best meal of the day. `);
        let meal = answer3
        rl.question(`What's your favourite thing to eat for that meal? `, (answer4) => {
          console.log(`🤤 Oh man, I could really go for some ${answer4} right now. `);
          let food = answer4
          rl.question(`Which sport is your absolute favourite? `, (answer5) => {
            console.log(` Right on, ${answer5} is alot of fun. `);
            let sport = answer5
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer6) => {
              console.log(` ${name} Loves to listen to ${music} while ${activity}, devouring ${food} for ${meal}, playing ${sport} and is amazing at ${answer6}  `);
              console.log('\n')
              rl.close();
            });
          });
          
        });
      });
    });
  });
  
});

