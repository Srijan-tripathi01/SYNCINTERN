const question = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct':"a"
    },
    {
        'que': 'What year was JavaScript launched',
        'a': '1994',
        'b': '1996',
        'c': '1995',
        'd': 'None of the above',
        'correct':"b"
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Cyber Security Services',
        'd': 'Comrade Serves the Soviet',
        'correct':"b"
    }
]
let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const queBox = document.getElementById('queBox');
const optionInputs=document.querySelectorAll('.option')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
   
    
    const data = question[index];
    console.log(data);
    queBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    
}

const submitQuiz = () => { 
    const data = question[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else { 
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => { 
            if (input.checked) { 
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => { 
            input.checked = false;
        }
    )
}
const endQuiz = () => { 
    document.getElementById("box").innerHTML = `
        <h1>Thank you for playing the Quiz</h1>
        <h2>You scored ${right} out of ${total} </h2>
        <style>
            h1{
                color:purple;
            }
            h2{
                color:Green;
            }
        </style>
    `
}
//initial call
loadQuestion();