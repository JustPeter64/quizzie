const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const false2Btn = document.getElementById('false2');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let quistions = [
  {
    question: "Waar staat het GLR?",
    answers: [
      {option:"Rotterdam!",answer:true},
      {option:"Amsterdam!",answer:false},
      {option:"Utrecht!",answer:false}
    ]
  },
  {
    question: "Welke dag komt na maandag?",
    answers: [
      {option:"Woensdag!",answer:false},
      {option:"Zaterdag!",answer:false},
      {option:"Dinsdag!",answer:true}
    ]
  },
  {
    question: "Is deze opdract leuk?",
    answers: [
      {option:"Nee",answer:false},
      {option:"Ja",answer:true},
      {option:"meschien!",answer:false}
    ]
  },
  {
    question: "Ja of Nee?",
    answers: [
      {option:"Nee",answer:false},
      {option:"of",answer:false},
      {option:"Ja",answer:true}
    ]
  },
  {
    question: "Wie heeft deze quiz gemaakt?",
    answers: [
      {option:"Remco",answer:false},
      {option: "Quillan",answer:false},
      {option:"Peter",answer:true}
    ]
  },
  {
    question: "is dit een testvraag?",
    answers: [
      {option:"Nee",answer:false},
      {option:"hopelijk",answer:false},
      {option:"Ja",answer:true}
    ]
  },
  {
    question: "Is Nederland klein?",
    answers: [
      {option:"Nee",answer:false},
      {option:"Relatief",answer:true},
      {option:"Ja",answer:false}
    ]
  },
  {
    question: "Amerika is groot?",
    answers: [
      {option:"Nee",answer:false},
      {option:"Relatief",answer:false},
      {option:"Ja",answer:true}
    ]
  },
  {
    question: "Bij de laaste 8 vragen is het antwoord altijd waar",
    answers: [
      {option:"Nee",answer:false},
      {option:"Ja",answer:false},
      {option:"Niet meer",answer:true}
    ]
  },
  {
    question: "Dit is de laaste vraag?",
    answers: [
      {option:"Nee",answer:false},
      {option:"Ja",answer:true},
      {option:"he he",answer:false}
    ]
  }
]

restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz(){
  currentQuestion = 0;
  questionText.innerHTML = quistions[currentQuestion].question;
  trueBtn.innerHTML = quistions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  falseBtn.innerHTML = quistions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  false2Btn.innerHTML = quistions[currentQuestion].answers[2].option;
  false2Btn.onclick = () => {
    let ano=2;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  
  prevBtn.classList.add('hide');
}

beginQuiz();

function restart(){
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  false2Btn.classList.remove('hide');
  score =0;
  userScore.innerHTML = score;
  beginQuiz();
}

function next(){
  currentQuestion++;
  if(currentQuestion>=10){
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = quistions[currentQuestion].question;
  trueBtn.innerHTML = quistions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  falseBtn.innerHTML = quistions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  false2Btn.innerHTML = quistions[currentQuestion].answers[2].option;
  false2Btn.onclick = () => {
    let ano=2;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  prevBtn.classList.remove('hide');
}

function prev(){
  currentQuestion--;
  if(currentQuestion>=10){
    nextBtn.classList.remove('hide');
    prevBtn.classList.add('hide');
  }
  questionText.innerHTML = quistions[currentQuestion].question;
  trueBtn.innerHTML = quistions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  falseBtn.innerHTML = quistions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  false2Btn.innerHTML = quistions[currentQuestion].answers[2].option;
  false2Btn.onclick = () => {
    let ano=2;
    if(quistions[currentQuestion].answers[ano].answer){
      if(score<10){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<10){
      next();
    }
  }
  nextBtn.classList.remove('hide');
}

function submit(){
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');
  false2Btn.classList.add('hide');
  questionText.innerHTML = "Quiz is done!"
}
