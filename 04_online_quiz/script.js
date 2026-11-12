const questions = [
 {q:'What does HTML stand for?', a:['HyperText Markup Language','HighText Machine Language','Hyper Tool Multi Language'], c:0},
 {q:'Which language styles a web page?', a:['Python','CSS','SQL'], c:1},
 {q:'Which keyword declares a constant in JavaScript?', a:['let','var','const'], c:2},
 {q:'Which HTML element creates a hyperlink?', a:['<link>','<a>','<href>'], c:1},
 {q:'Which method selects an element by its ID?', a:['getElementById()','queryAll()','getClass()'], c:0}
];
let current=0, answers=Array(questions.length).fill(null);
const $=id=>document.getElementById(id);
function render(){
 $('progress').textContent=`Question ${current+1} of ${questions.length}`;
 $('question').textContent=questions[current].q; $('answers').innerHTML='';
 questions[current].a.forEach((answer,i)=>{const b=document.createElement('button');b.className='answer'+(answers[current]===i?' selected':'');b.textContent=answer;b.onclick=()=>{answers[current]=i;render();};$('answers').appendChild(b);});
 $('prev').disabled=current===0; $('next').textContent=current===questions.length-1?'Finish':'Next'; $('feedback').textContent=answers[current]===null?'Choose an answer.':(answers[current]===questions[current].c?'Correct selection saved.':'Selection saved.');
}
$('prev').onclick=()=>{if(current>0){current--;render();}};
$('next').onclick=()=>{if(answers[current]===null){$('feedback').textContent='Please select an answer.';return;}if(current<questions.length-1){current++;render();}else{const score=answers.reduce((s,a,i)=>s+(a===questions[i].c),0);$('quiz').hidden=true;$('result').hidden=false;$('score').textContent=`You scored ${score} out of ${questions.length}.`;}};
$('restart').onclick=()=>{current=0;answers.fill(null);$('quiz').hidden=false;$('result').hidden=true;render();};render();