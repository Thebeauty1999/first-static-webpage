const questions=[
    {
        'que':'The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
       'a': "4 years",
       'b': "8 years",
        'c':"10 years",
       'd': "None of these",
       'correct':'a'
    },
    {
       'que':'A father said to his son, "I was as old as you are at the present at the time of your birth". If the fathers age is 38 years now, the sons age five years back was:',
       'a':'14 years',
       'b':'19 years',
       'c':'33 years',
       'd':'38 years',
       'correct':'a'
       
    },
    {
        'que':'A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?',
       'a':' 7',
       'b':' 8',
       'c':' 9',
        'd':'10',
    'correct':'d'

    },
    {
        'que':'Present ages of Sameer and Anand are in the ratio of 5:4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anands present age in years?',
        'a':'24',
       'b': '27',
       'c': '40',
       'd': 'Cannot be determined',
       'correct':'a'
    },

    {
        'que':'A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:',
        'a':'14 years',
        'b':'18 years',
        'c':'20 years',
        'd':'22 years',
        'correct':'d'
    },
    {
        'que':'Six year,s ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11:10. What is Sagars age at present?',
        'a':'16 years',
        'b':'18 years',
        '':'20 years',
        'd':'Cannot be determined',
    'correct':'a'
    },
    {
        'que':'The sum of the present ages of a father and his son is 60 years. Six years ago, fathers age was five times the age of the son. After 6 years, sons age will be:',
        'a':'12 years',
        'b':'14 years',
        'c':'18 years',
        'd':'20 years',
        'correct':'d'
    },

    {
'que':'At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Aruns age will be 26 years. What is the age of Deepak at present ?',
'a':'12 years',
'b':'15 years',
'c':'19 and half',
'd':'21 years',
'correct':'b'  
 },

 {
    'que':' Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?',
  'a':'16 years',
  'b':'18 years',
  'c':'28 years',
  'd':'24.5 years',
  'correct':'d'
     
 },

 {
    'que':'The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).',
'a':'8, 20, 28',
 'b':'16, 28, 36',
 'c':'20, 35, 45',
 'd':'None of these',
 'correct':'b'
 },
]
//initializing //
let totalQuizTime = 0;
let index = 0;
let score = 0;
let questionsAttempted=0;
let right = 0, wrong = 0;
let sec = 10; 
let time; 
let total = questions.length;

var startTime;//initialiazing the start time 
var endTime;//initiakizing the end time


const quesBox = document.getElementById("quesBox");//id for getting  the questions
const optionInputs = document.querySelectorAll(".options");//for getting the options
const timerElement = document.getElementById('timer');//id for the timer 


const loadQuestion = () => {//function for loading the questions & options 
    if (index === total) {//if this reaches at the last no. of question for that we have used this
        return endQuiz();
    }
    startTime = new Date().getTime();
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

    clearInterval(time);
    sec = 10;
    time = setInterval(myTimer, 1000);
    document.getElementById('score').innerText = `Score: ${score}`

};// loadQuestion function closed 

const submitQuiz = () => {// this function is used for submitting the quiz 
    questionsAttempted++; 
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {//function for checking the score ,right and wrong ans
        score++
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};//submitQiz function  closed

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {// this function is used to reset the option so it doesnot appear the previous option checked 
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};//reset function closed 

function startQuiz() {//this is used for time  from the start 
    startTime = new Date().getTime(); 
    loadQuestion();
}



function next() {// function for next button
    if (index >= 0) {
        index ++;
        loadQuestion();
    }
}

// Function to handle the "Previous" button click
function previous() {
    if (index > 0) {
        index --;
        loadQuestion();
    }
}

// Attach event listeners to buttons
document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", previous);

function endQuiz() { // this function is used for the end quiz by displaying the result
    clearInterval(time);
     var storedName = localStorage.getItem("userName");
    var totalQuizTimeInSeconds=totalQuizTime;
    var percentage=(right/total)*100;

    var resultMessage=`<h2>Thank you ${storedName} for playing the quiz</h2>`
   resultMessage+=`<h3>Total Questions:10</h3>`
   resultMessage+=`<h3>Number of Questions Attempt:${questionsAttempted}</h3>`
   resultMessage+=`<h3>Total time taken:${totalQuizTimeInSeconds}seconds</h3>`
    resultMessage+=`<h3>Right Answer=${right}</h3>`
    resultMessage+=`<h3>Wrong Answer=${wrong}</h3>`
   resultMessage += `<h3>Percentage: ${percentage.toFixed(2)}%</h3>`;
   resultMessage+=`<button id="start-again"><a href="probability.html">Start-Again</a></button> `
   resultMessage+=`<button id="home-page"><a href="quizApp.HTML">Go To Home Page</a></button>` 
    
    
    document.getElementById("box").innerHTML = resultMessage;
}//endQuiz function closed 




function myTimer() {// timer for each question as per requisite of 10 sec
    timerElement.innerHTML = sec + "sec left";
    sec--;

    if (sec === -1) {
        clearInterval(time);
        alert("Time out!! :(");
        submitQuiz();
    }

    // Update the total time for each second
    totalQuizTime++;
}


loadQuestion();