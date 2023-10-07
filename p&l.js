const questions=[//the 10 no. of quiz question
    {
        'que':'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
        'a':'15',
        'b':'16',
        'c':'18',
        'd':'25',
        'correct':'b'
    }, 
    {
       'que': 'In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?',
        'a':'30%',
        'b':'70%',
        'c':'100%',
        'd':'250%',
        'correct':'b'   
     },
     {
        
      'que':'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
         'a':'3',
         'b':'4',
         'c':'5',
         'd':'6',
         'correct':'c'
     },

     {
        'que':'The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?',
       'a':' Rs. 2000',
       'b':' Rs. 2200',
        'c':'Rs. 2400',
        'd':'Data inadequate',
        'correct':'a'
     },
     {
        
      'que':'A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?',
'a':'Rs. 18.20',
'b':'Rs. 70',
'c':'Rs. 72',
'd':'Rs. 88.25',
'correct':'c'
     },

     {
        'que':' A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?',
        'a':'Rs. 1090',
        'b':'Rs. 1160',
        'c':'Rs. 1190',
        'd':'Rs. 1202',
        'correct':'c'
        
     },

     {
      'que':'Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:',
      'a':'30%',
      'b':'33%',
      'c':'35%',
      'd':'44%',
      'correct':'d'
     },
{
   'que': 'On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:',
'a':'Rs. 45',
'b':'Rs. 50',
'c':'Rs. 55',
'd':'Rs. 60',
'correct':'d'
},
{
    
'que':'When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?',
'a':'Rs. 21,000',
'b':'Rs. 22,500',
'c':'Rs. 25,300',
'd':'Rs. 25,800',
'correct':'c'
},

{
    
'que':'A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:',
'a':'No profit, no loss',
'b':'5%',
'c':'8%',
'd':'10%',
'correct':'b'
},

]
//initializing //
let score=0;
let index=0;
let right=0,wrong=0;
let questionsAttempted=0;
let sec=10;
let total=questions.length;
let totalQuizTime=0;
let time;

let quesBox=document.getElementById("quesBox");//id for getting  the questions
let timerElement=document.getElementById("timer");//id for the timer 
let optionInputs=document.querySelectorAll(".options");//id for the timer 


var startTime;//initialiazing the start time 
var endTime;//initiakizing the end time

const loadQuestion=()=>{//function for loading the questions & options 
   if(index==total){//if this reaches at the last no. of question for that we have used this 
   return endQuiz();
   }
   reset();
   startTime=new Date().getTime();
const data=questions[index];
quesBox.innerText=`${index+1})${data.que}`;

optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;
document.getElementById("score").innerText=` Score ${score}`

clearInterval(time);
sec=10;
time=setInterval(myTimer,1000);


}// loadQuestion function closed 

function submitQuiz(){// this function is used for submitting the quiz 
   const data=questions[index];
   questionsAttempted++
   const ans=getAnswer()

   if (ans==data.correct){//function for checking the score ,right and wrong ans
      score++;
      right++;
   }else{
      wrong++
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

   })
   return answer;
}//submitQiz function  closed

function reset(){// this function is used to reset the option so it doesnot appear the previous option checked 
   optionInputs.forEach((input)=>{
      input.checked=false;

   })
}//reset function closed 

function startQuiz(){//this is used for time  from the start 
   startTime=new Date().getTime();
   loadQuestion();
}

function endQuiz(){ // this function is used for the end quiz by displaying the result
   var storedName=localStorage.getItem("userName");
   var totalQuizTimeInSeconds=totalQuizTime;
   var percentage=(right/total)*100
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


function myTimer(){// timer for each question as per requisite of 10 sec
   timerElement.innerHTML=sec + "sec left";
   sec--;
   if (sec==-1){
      clearInterval(time);
      alert("time out!!:(");
      submitQuiz();
   }
   totalQuizTime++;
}// timer function closed



 function previous(){//function for previous button
   if(index>0){
      index--;
      loadQuestion()
   }
 }
 function next(){// function for next button
   if(index>=0){
      index++;
      loadQuestion()
   }
 }
 document.getElementById("next").addEventListener("click",next);//calling the previous btn through eventlistener
document.getElementById("prev").addEventListener("click",previous);//calling the next btn through eventlistener


loadQuestion();