const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const sentences = tutorials.map((sentence => sentence.split(" ")));
 
   for (let word of sentences){
    for (let num=0;num<word.length;num++){
     word[num] = (word[num].charAt(0).toUpperCase() + word[num].slice(1));
     }
   }
  
   const newSentences = sentences.map((sentence) => sentence.join(" "));
   
   return newSentences;
 }
 

