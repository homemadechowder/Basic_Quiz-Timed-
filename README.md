# Basic_Quiz (Timed)
This is the Readme for this app: Basic Timed Quiz.
You have 1 minute to finish this trivia quiz, answer them and results will show up after time has ran out. 

## Front End

The Front End set up for this webpage was tedious but highly self explanatory. The questions were not dynamically generated but rather hard coded. I put 10 marine biology/geography trivia questions inside a column of size 12 from the bootstrap. I set up 4 radio buttons for each questions with a horizontal divider <hr> to make it look better.

## Back End

To start, I had two options. One is straightforward and brute forcing by hardcoding each question with big if else statements and loops. The other, which is big brained if I must say so myself, turned a potentially 2-300+ lines of code into less than 100. While I believe with more practice I can make the code more dry, I believe my solution is quite optimal to the point I'm questioning myself whether or not I'm overthinking it.

### Here is a run down of my high-level logic starting with my variables with code snippets:

```javascript
  var answerArr = ["B","A","D","C","B","D","A","D","C","B"];
  var userArr = [" "," "," "," "," "," "," "," "," "," "];
```
I declared two arrays used to compare to determine the right and wrong answers.

```javascript
  var answer = $("[type = 'radio']"); //<input type="radio" name="0" value="A">
  var userAnswer = "";

  for (i = 0; i < answer.length; i++){
    if (answer[i].checked){
        userAnswer = answer[i].value;  
        var order = parseInt(answer[i].name);
        userArr[order]= userAnswer; 
    }
```
I used its type to grab all the radio functions, and I store the ones that are checked into userAnswer. I also declared  the variable order to by calling the name attribute of the radio button, which in my genius is set to a string number I could parseInt(). So I then use this order to determine which position in the array userAnswer should be stored in.

```javascript
  var unchecked = 0;
  var correct = 0;
  var wrong= 0;
```
To get these variables I simply run another for loop userArr.length times and if the elements between userArr and answerArr are equal, then correct++, else if userArr is " ", then unchecked++, then if they are not equal, then wrong++.

```javascript  
  var number = 60;
  var intervalId;
```
These are variables for timer functions, the simplest part of this app.


