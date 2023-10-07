const questions= [
    {
        'que':"Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?" ,
        'a': "5/11" ,
        'b':" 6/11",
        'c':" 7/11",
        'd':" 8/11",
         'correct' :'b'
    },
    {
       'que':"Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after?" ,
        'a':"5 min",
        'b' : "9 min",
        'c':"10 min",
        'd':"15 min", 
        'correct':'b'
    },

    {
        'que':"A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is",
       'a': "6 hours",
       'b': "10 hours",
       'c': "15 hours",
       'd': "30 hours",
        'correct':'c'
    },
    {
        'que':"Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is",
       'a': "60 gallons",
       'b': "100 gallons",
       'c': "120 gallons",
       'd': "180 gallons",
        'correct':'c'
    },
    {
      'que':"  A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
      'a':"20 hours",
      'b':"25 hours",
      'c':"35 hours",
      'd':"Cannot be determined",
      'correct':'c'
    },
    {
        'que':"Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        'a':"1 hour",
       'b':"2 hours",
        'c':"6 hours",
        'd':"8 hours",
        'correct':'c'
    },
    {
        'que':"Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
       'a':" 12 min",
       'b':" 15 min",
       'c':" 25 min",
       'd':" 50 min",
       'correct':'a'
        
    },
    {
        'que':"Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        'a':"10 min. 20 sec." , 
       'b':" 11 min. 45 sec." ,
       'c':" 12 min. 30 sec.", 
       'd':" 14 min. 40 sec.",
       'correct':'d'
    },
    {
        'que':"One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
    
    'a':" 81 min.",
    'b':" 108 min.",
    'c': " 144 min.",
    'd': " 192 min.",
    'correct':'c'
    },
    {
        'que':"Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
       'a':" 10 ",
       'b':" 12",
       'c':" 14",
       'd':" 16",
    'correct':'c'
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
    
    const ans =getAnswer();
    
    if(ans==data.correct){//function for checking the score ,right and wrong ans
        score++;
        right++;
    }else{
        wrong++;
    }
    index++;
    questionsAttempted++;
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
// Add this code to your JavaScript




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
