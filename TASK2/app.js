const question = [
    {
        'que': 'Which of the folling is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {
        'que': 'What year was JavaScript launched',
        'a': '1996',
        'b': '1996',
        'c': '1995',
        'd': 'None of the above',
        'correct':'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Cascadinf Style Sheet',
        'c': 'Cyber Security Services',
        'd': 'Comrade Serves the Soviet',
        'correct':'b'
    }
]
let index = 0 ;
const queBox = document.getElementById('queBox');
const optionInputs=document.querySelectorAll('.option')
const loadQuestion = () => { 
    const data = question[index];
    console.log(data);
    queBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    
}

//initial call
loadQuestion();