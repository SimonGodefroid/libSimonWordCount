# Word Count Lib

This lib was made to count the number of words in a sample text.

Put the text excerpt inside the sampleText.json or require your own JSON with the format [{"content":"Some text"}] and require it from the right path in index.js.

Run by doing npm run count.

The outcome of the lib is an object with the words counted in lowerCase as keys and the occurences as values.

e.g. 
{
  'some':1,
  'text':1
}

This lib currently ignores numbers, words that are under 2 characters and it strips dots "." and commas ",".

By default it will also log the sentence <\counted word> appears <\occurences> in that excerpt.