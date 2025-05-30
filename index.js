let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  const whoRandom = who[Math.floor(Math.random() * who.length)];
  const actionRandom = action[Math.floor(Math.random() * action.length)];
  const whatRandom = what[Math.floor(Math.random() * what.length)];
  const whenRandom = when[Math.floor(Math.random() * when.length)];
  return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
}
let p = document.querySelector('#excuse');
p.innerHTML = generateExcuse();