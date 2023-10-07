const questions=[//the 10 no. of quiz question
    {
     'que':'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
      'a' : '1/2',
      'b': '2/5',
      'c': '8/15',
      'd': '9/20',
    'correct':'d'
},

      {
       'que':'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
       'a': '10/21',
       'b': '11/21',
       'c': '2/7',
       'd': '5/7',
       'correct': 'a',
      },

{
    'que':'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
'a':'1/3',
'b':'3/4',
'c':'7/19',
'd':'9/21',
'correct':'a'

},

{
'que': 'What is the probability of getting a sum 9 from two throws of a dice?',
  'a': ' 1/6',
  'b': ' 1/8',
  'c': ' 1/9',
  'd': ' 1/12',
  'correct':'c'
   
},

{
    'que': 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
   'a': '3/4',
   'b': '1/4',
   'c': '3/8',
   'd': '7/8',
   'correct': 'd'
},

{
  'que': 'Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?',
   'a':' 1/2',
   'b':' 3/4',
   'c':' 3/8',
    'd':'5/16',
    'correct':'b',
},

   { 
    'que':'In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:',
  'a': '21/46',
   'b': '25/117',
  'c':'1/50',
  'd':'3/25',
  'correct':'a',
    
},

{
  'que': 'In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?',
'a':'1/10',
'b':'2/5',
'c':'2/7',
'd':'5/7',

},

{
    
'que':'From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?',
'a':'1/15',
'b':'25/57',
'c':'35/256',
'd':'1/221',
'correct':'d'

},

{
    
'que':'Two dice are tossed. The probability that the total score is a prime number is:',
'a':'1/6',
'b':'5/12',
'c':'1/2',
'd':'7/9',
'correct':'b'

},
]
//initializing //
let index=0;
let score=0;
let questionsAttempted=0;
let right=0,wrong=0;
let time;
let sec=10;
let totalQuizTime=0;
let total=questions.length;

let quesBox=document.getElementById("quesBox");//id for getting  the questions
let optionInputs=document.querySelectorAll('.options');//for getting the options 
let timerElement=document.getElementById("timer");//id for the timer 

var startTime;//initialiazing the start time 
var endTime;//initiakizing the end time


const loadQuestion=()=>{//function for loading the questions & options 
    if(index===total){//if this reaches at the last no. of question for that we have used this 
      return endQuiz();
    }
    startTime=new Date().getTime();
   reset();
    const data=questions[index];
    quesBox.innerText=`${index+1})${data.que}`;

    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
     
    clearInterval(time);
    sec=10;
    time=setInterval(mytimer,1000);
     document.getElementById('score').innerText = `Score: ${score}`
    


}// loadQuestion function closed 

const submitQuiz=()=>{// this function is used for submitting the quiz 
    const data =questions[index];
    questionsAttempted++;
    const ans =getAnswer();

    if(ans==data.correct){//function for checking the score ,right and wrong ans
        score++;
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()

}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }

    });
    return answer;
};//submitQiz function  closed

const reset=()=>{// this function is used to reset the option so it doesnot appear the previous option checked 
    optionInputs.forEach((input)=>{
input.checked=false;
    });
};//reset function closed 

function startQuiz(){//this is used for time  from the start 
    startTime=new Date().getTime();
    loadQuestion();
}


function next(){// function for next button
    if(index>=0){
        index++;
        loadQuestion()
    }
}

function previous(){//function for previous button
    if(index>0){
        index--;
        loadQuestion()
    }
}
document.getElementById("next").addEventListener("click",next);//calling the next btn through eventlistener
document.getElementById("prev").addEventListener("click",previous)//calling the previous btn through eventlistener



function endQuiz(){ // this function is used for the end quiz by displaying the result
    clearInterval(time);
    var storedName = localStorage.getItem("userName");
    var totalQuizTimeInSeconds=totalQuizTime;
    var percentage=(right/total)*100;

    var resultMessage=`<h2>Thank you ${storedName} for playing the quiz </h2>`;
    resultMessage+=`<h3>Total Question: 10</h3>`
    resultMessage+=`<h3>Total time taken: ${totalQuizTimeInSeconds}seconds</h3>`
    resultMessage+=`<h3>Number of Question Attempt=${questionsAttempted}</h3>`
    resultMessage+=`<h3>Right Answer=  ${right}</h3>`;
    resultMessage+=`<h3>Wrong Answer=${wrong}</h3>`;
    resultMessage+=`<h3>Your Percentage=${percentage.toFixed(2)}% <br>`;
    resultMessage+=`<button id="start-again"><a href="probability.html">Start-Again</a></button> `
    resultMessage+=`<button id="home-page"><a href="quizApp.HTML">Go To Home Page</a></button>`

    document.getElementById("box").innerHTML=resultMessage
}//endQuiz function closed 


function mytimer(){// timer for each question as per requisite of 10 sec
   timerElement.innerHTML= sec +"sec left";
    sec--;
    if(sec==-1){
        clearInterval(time);
        alert("Time out!! :(");
        submitQuiz()
    }
    totalQuizTime++;
}




loadQuestion();
