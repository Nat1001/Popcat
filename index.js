////// TRY WITH GOT MODULE //////
// const got = require('got')
// console.log("running...")

// const instance = got.extend({
//   hooks: {
//     beforeRequest: [
//       options => {
//         // if (!options.context || !options.context.token) {
//         //   throw new Error('Token required');
//         // }

//         // options.headers.token = options.context.token;
//         options.headers.Authorization = "Bearer iVp3tnwuYRPiuUo4xmXys5Jg"
//       }
//     ]
//   }
// });

// (async () => {
//   console.log("checking...")
//   const context = {
//     Authorization: "Bearer iVp3tnwuYRPiuUo4xmXys5Jg"
//   };

//   const response = await instance('https://betteruptime.com/api/v2/monitors/256862', {context});
//   console.log(response.body)

//   // Let's see the headers
//   // console.log(response.body);
// })()

const curl = require('curl')

curl.post("https://stats.popcat.click/pop?pop_count=800&captcha_token=03AGdBq27P4p_AW0iUPQIsWpE7elDi2rdNCnlrnGBwEjP8-cHCNh7fmCi8tpHG4Q7jGXxpciTUwTipCqbp8lf4GCtLMfPco-tVCggK-VMfOcQ55LpL0aw4CDKeEmxY4aEhVGRZSwkEYJxAnFUpRUGT0zXBa8Y6PFJzztafJCFJh9KzF3fpr0GHBrB3fFI48qxYrhAFL6tmP1GBpJNmRXGKp9boB2SQXqzcwMsPZvwqxEQhiIDSQads1_OSJPyvxUJ2l4_eDlKRZUlj9s4h9G3y80bbSZAK9ynqVExMKr9vkQi7EZaW14Nou5cozloJsJgN7D7XZmrePoSX0qL5dnDs4-yP2sBtfpvToBH9ioL_uTSlYchpXIHV31T6R5nhJRsd3J_bgVPlCCLDgYgJrMn4JbkhjHVTQma7ezaD4XTZjn8qe9bN6ayccsz0U4yRuUFv2VtQPRHfLgO0", "", {navigator: "Mozilla"}, function(err, response, body) {
  console.log(response.body)
  console.log("end");
});
/*
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDb3VudHJ5Q29kZSI6IkZSIiwiSVAiOiIxNzYuMTM3LjE4OS4yMDYiLCJJRCI6NSwiZXhwIjoxNjM2NjM2OTMwfQ.O8vpFcGoPpeXinV9xED-PAIacvpLxX2FHjN--jjuvRQ
Code: "FR"
User-Agent: PostmanRuntime/7.28.4
Host: stats.popcat.click
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 0
*/