var questionList = [
    {
        no: 1,
        q: "Which type of JavaScript language is ___",
        opt1: "A. Object-Oriented",
        opt2: "B. Object-Based",
        opt3: "C. Assembly-language",
        opt4: "D. High-level",
        ansKey: 2
    },
    {
        no: 2,
        q: "Which one of the following also known as Conditional Expression ?",
        opt1: "A. Alternative to if-else",
        opt2: "B. Switch statement",
        opt3: "C. If-then-else statement",
        opt4: "D. immediate if",
        ansKey: 4
    },
    {
        no: 3,
        q: "The 'function' and 'var' are known as :",
        opt1: "A. Keywords",
        opt2: "B. Data types",
        opt3: "C. Declaration statements",
        opt4: "D. Prototypes",
        ansKey: 3
    },
    {
        no: 4,
        q: "Which of the following variables takes precedence over the others if the names are the same ?",
        opt1: "A. Global variable",
        opt2: "B. The local element",
        opt3: "C. The two of the above",
        opt4: "D. None of the above",
        ansKey: 2
    },
    {
        no: 5,
        q: "Which one of the following is the correct way for calling the JavaScript code ?",
        opt1: "A. Preprocessor",
        opt2: "B. Triggering Event",
        opt3: "C. RMI",
        opt4: "D. Function/Method",
        ansKey: 4
    },
    {
        no: 6,
        q: "Which of the following type of a variable is volatile ?",
        opt1: "A. Mutable variable",
        opt2: "B. Dynamic variable",
        opt3: "C. Volatile variable",
        opt4: "D. Immutable variable",
        ansKey: 1
    },
    {
        no: 7,
        q: "Which of the following option is used as hexadecimal literal beginning ?",
        opt1: "A. 00",
        opt2: "B. 0x",
        opt3: "C. 0X",
        opt4: "D. Both 0x and 0X",
        ansKey: 4
    },
    {
        no: 8,
        q: "In the JavaScript, which one of the following is not considered as an error ?",
        opt1: "A. Syntax error",
        opt2: "B. Missing of semicolons",
        opt3: "C. Division by zero",
        opt4: "D. Missing of Bracket",
        ansKey: 3
    },
    {
        no: 9,
        q: "Which of the following number object function returns the value of the number ?",
        opt1: "A. toString()",
        opt2: "B. valueOf()",
        opt3: "C. toLocaleString()",
        opt4: "D. toPrecision()",
        ansKey: 2
    },
    {
        no: 10,
        q: "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL' :",
        opt1: "A. if(a!==null)",
        opt2: "B. if(a!)",
        opt3: "C. if(a!null)",
        opt4: "D. if(a!=null)",
        ansKey: 1
    },
]

var question = document.getElementById("question");
var qno = document.getElementById("qno");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

function startTest() {
    document.getElementById("startTest").style.display = "none";
    document.getElementById("exam").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("currentQue").style.display = "block";
    timeStart();
    setInterval(()=>{
        t--;
        timer.innerHTML = t>=10?("00:"+t):("00:0"+t);
        if(t==0)
        {
            t=0;
        }
    },1000)
}

var timer = document.getElementById("next");
var t = 14;
function timeStart()
{
    setInterval(()=>{
        nextQuestion()
    },15000)
}

qno.innerHTML = questionList[0].no;
question.innerHTML = questionList[0].q;
opt1.innerHTML = questionList[0].opt1;
opt2.innerHTML = questionList[0].opt2;
opt3.innerHTML = questionList[0].opt3;
opt4.innerHTML = questionList[0].opt4;
document.getElementById("queNo").innerHTML = 1;

var marks = 0;
var i = 0;
var keyOfAns;
var check = false;
var collectAns = [];

function nextQuestion() {
    t=15;
    i++;
    if (i >= 10) {
        document.getElementById("next").style.display = "none";
        document.getElementById("submit").style.display = "block";
        // setQuestion()
    }
    else {
        setQuestion()
        document.getElementById("queNo").innerHTML = questionList[i].no;
    }
}

function setQuestion() {
    opt1.classList.remove('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');
    qno.innerHTML = questionList[i].no;
    question.innerHTML = questionList[i].q;
    opt1.innerHTML = questionList[i].opt1;
    opt2.innerHTML = questionList[i].opt2;
    opt3.innerHTML = questionList[i].opt3;
    opt4.innerHTML = questionList[i].opt4;
    if (questionList[i - 1].ansKey == keyOfAns) {
        marks++;
        collectAns.push(keyOfAns);
    }
    else
    {
        keyOfAns = 0;
        collectAns.push(0);
    }
}

function submitTest() {
    document.getElementById("startTest").style.display = "none";
    document.getElementById("currentQue").style.display = "none";
    document.getElementById("exam").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("gohome").style.display = "block";
    if (i >= 9) {
        if (questionList[i-1].ansKey == keyOfAns) {
            marks++;
            collectAns.push(keyOfAns);
        }
        else
        {
            keyOfAns = 0;
        }
    }
    var grade;
    if (marks >= 8) {
        grade = "A"
    }
    else if (marks >= 6) {
        grade = "B"
    }
    else if (marks >= 4) {
        grade = "C"
    }
    else {
        grade = "Fail"
    }
    document.getElementById("trueAns").innerHTML = marks;
    document.getElementById("wrongAns").innerHTML = 10 - marks;
    document.getElementById("obMarks").innerHTML = marks;
    document.getElementById("perce").innerHTML = marks;
    document.getElementById("grade").innerHTML = grade;
    collectedAns();
    
}

function optSelected1(optKey) {
    var optKey = optKey;
    opt1.classList.add('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');
    keyOfAns = 1;
}

function optSelected2(optKey) {
    var optKey = optKey;
    opt2.classList.add('active');
    opt1.classList.remove('active');
    opt3.classList.remove('active');
    opt4.classList.remove('active');
    keyOfAns = 2;
}

function optSelected3(optKey) {
    var optKey = optKey;
    opt3.classList.add('active');
    opt2.classList.remove('active');
    opt1.classList.remove('active');
    opt4.classList.remove('active');
    keyOfAns = 3;
}

function optSelected4(optKey) {
    var optKey = optKey;
    opt4.classList.add('active');
    opt2.classList.remove('active');
    opt3.classList.remove('active');
    opt1.classList.remove('active');
    keyOfAns = 4;
}

function collectedAns()
{
    var trueAnsKeys = [2,4,3,2,4,1,4,3,2,1];
    var myAnsKeys = "";

    for(k=0; k<trueAnsKeys.length; k++)
    {
        if(trueAnsKeys[k] == collectAns[k])
        {
            myAnsKeys += '<i class="fa-solid fa-check"></i>\n';
        }
        else
        {
            myAnsKeys += '<i class="fa-solid fa-xmark"></i>\n';
        }
    }
    document.getElementById("ans").innerHTML = myAnsKeys;
}

function gotoHome() {
    location.reload();
}

var themes = document.getElementById("themes");

var theme = 'black';
themes.addEventListener('click' ,()=>{
    {
        if(theme == "black")
        {
            document.documentElement.style.setProperty('--dark', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--lightdark', 'rgb(240, 240, 240)');
            document.documentElement.style.setProperty('--white', 'rgb(0, 0, 0)');
            theme = "white";
        }
        else
        {
            document.documentElement.style.setProperty('--dark', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--lightdark', 'rgb(36, 36, 36)');
            document.documentElement.style.setProperty('--white', 'rgb(255, 255, 255)');
            theme = "black";
        }
    }
})