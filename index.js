  //package
  const readlineSync = require("readline-sync");
  const username=readlineSync.question("What is your name ? ")
  console.log("Welcome "+username+" To 'Do you know Bala Quiz !'")
  //function writing to check question and answer
  let score=0;
  // function checkAnswer(question,answer){

  const checkAnswer=(question,answer)=>{
    const useranswer=readlineSync.question(question);
    if(useranswer === answer){
      console.log("You are answered: "+ useranswer +" and its Right !")
      score=score+1;
    }else{
      console.log("You are answered: "+ useranswer +                       " and its Wrong !");
    }
    console.log("--------------")
    
  }
  
  let HighScores=[
      {
        name:"Bala",
        score:5
      },
      {
        name:"Ajith",
        score:4
      }
  ]
  
  //list of questions answer storeing in objects
  let QuestionOne={
    question:'Where bala lives ? \n a.bangalore  \n b.coimbatore \n c.mumbai \n ',
    answer:"b"
  }
  let QuestionTwo={
   question:'What bala is doing  ?  \n a.student  \n b.graduate \n c.working \n',
    answer:"c"
  }
  let QuestionThree={
    question:'What is his favorite sport ?  \n a.hockey \n b.cricket \n c.football \n',
    answer:"b"
  }
  let QuestionFour={
    question:'Who is his favorite actor ? \n a.salman  \n b.Rajini   \n c.kamal \n',
    answer:"b"
  }
  let QuestionFive={
    question:'Which is his favorite place to chill ? \n a.withfriends  \n b.withfamily   \n c.withlover \n',
    answer:"a"
  }
  
  //calling functions and passing question and answer
  const ListOfQuestions=[QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive]
  for(let i=0;i<ListOfQuestions.length;i++){
    const QuesAns=ListOfQuestions[i];
    checkAnswer(QuesAns.question,QuesAns.answer);
  }
  console.log("You have scored "+ score +"! Thanks for playing !!");
  
  //if(score>)
  for(let i=0;i<HighScores.length;i++){
    const highscoresList=HighScores[i];
    console.log("Highest scorers of this quiz is " + highscoresList.name+"'s score is " +highscoresList.score+ " out of 5");
  }
  console.log("If you have scored high please share the screenshot i will update it ")  