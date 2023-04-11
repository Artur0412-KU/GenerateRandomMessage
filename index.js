const greetings = ['Hello', 'What`s up', 'Hi', 'Good Morning', 'Salut'];
const subjects = ['mum', 'daddy', 'Jimmy', 'Ann', 'my love'];
const are = ['are'];
const verbs = ['looking', 'cooking', 'cleaning'];
const adjectives = ['great', 'wonderful', 'fantastic', 'horrible'];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getGenerateMessage() {
  const greeting = greetings[getRandomIndex(greetings)];
  const subject = subjects[getRandomIndex(subjects)];
  const Are = are[getRandomIndex(are)];
  const verb = verbs[getRandomIndex(verbs)];
  const adjective = adjectives[getRandomIndex(adjectives)];
  return `${greeting}, ${subject}! You ${Are} ${verb} ${adjective}!`;
}

console.log(getGenerateMessage());
