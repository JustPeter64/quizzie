var question1 = {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Language"],
    correct: 0
  };

var question2 = {
    question: "The Bootstrap grid system is based on how many columns?",
    answers: ['6', '9', '12', '3'],
    correct: 2
  };

var question3 = {
    question: 'What does CSS stand for?',
    answers: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
    correct: 1
  }

var question4 = {
    question: "Which property is used to change the background color?",
    answers: ["bgcolor", "color", "background-color"],
    correct: 2
  };

var question5 = {
    question: "Javasctipt is the same as Java?",
    answers: ["True", "False"],
    correct: 1
  };

var question6 = {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onchange", "onmouseclick", "onmouseover","onclick"],
    correct: 3
  };

var question7 = {
    question: "Is JavaScript case-sensitive?",
    answers: ["True", "False"],
    correct: 0
  };


var questions = [question1, question2, question3, question4, question5, question6, question7];

function juistAntwoord(vraagNummer){

    document.getElementById("feedback").innerHTML = `Je hebt vraag ${vraagNummer} <b>goed</b> geantwoord!`

    document.body.style.backgroundColor = "lightgreen";
    document.getElementsByClassName("color")[0].style.backgroundColor = '#DC231D';
        document.getElementsByClassName("color")[1].style.fill = '#DC231D';

};

function onjuistAntwoord(vraagNummer){

    document.getElementById("feedback").innerHTML = `Je hebt vraag ${vraagNummer} <b>onjuist</b> geantwoord!`

    document.color.style.backgroundColor = "red";
    document.getElementsByClassName('color')[0].style.backgroundColor = '#DC231D';
        document.getElementsByClassName('color')[1].style.fill = '#DC231D';
};

function check() {

  let givenA = document.getElementById('multiChoise');

  let i = 0;

  
  if (givenA == question1.answers[0 || 1 || 2]) {

      // document.getElementById('question').innerHTML = questionArray[i].question;
    
      for (let i = 0; i < array.length; i++) {
      
        document.getElementById('question').innerHTML = questionArray[i].question;
    }i++



  } else if(givenA == '') {

    document.getElementById("feedback").innerHTML =('nothing? really?')

  } else {

      
      document.getElementById("feedback").innerHTML = 'dumbass'

  }

} 

function toonVraag(){

   document.getElementById("question").innerHTML = question1.question

}

function volgendeVraag(){

  // document.getElementById("question").innerHTML = 
};