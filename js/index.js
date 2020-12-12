//defining global variables
var right = 0;
var one = Math.floor(Math.random() * 10);
var two = Math.floor(Math.random() * 10);
var three = Math.floor(Math.random() * 10);
var four = Math.floor(Math.random() * 10);
var five = Math.floor(Math.random() * 10);
var Q1Correct; //What the correct answer is
var Q2Correct;
var Q3Correct;
var Q4Correct;
var Q5Correct;
var Q1Answer; //What the users answer is
var Q2Answer;
var Q3Answer;
var Q4Answer;
var Q5Answer;
var question4Input;
var question4Output;
var Q5selected;

//function to show the confirm window
function submitAll() {
}

//checks the radio box when you click the button
function checkRadio1() {
    document.getElementById("radio1").checked = true;
    document.getElementById("Q3radio1").style.borderColor = "lime";
    document.getElementById("Q3radio2").style.borderColor = "#02639c";
    Q3Answer = 1;
}
function checkRadio2() {
    document.getElementById("radio2").checked = true;
    document.getElementById("Q3radio1").style.borderColor = "#02639c";
    document.getElementById("Q3radio2").style.borderColor = "lime";
    Q3Answer = 2;
}

//highlights around your selected answer
function select1() {
    document.getElementById("Q1button1").style.borderColor = "lime";
    document.getElementById("Q1button2").style.borderColor = " #02639c";
    document.getElementById("Q1button3").style.borderColor = " #02639c";
    document.getElementById("Q1button4").style.borderColor = " #02639c";
    Q1Answer = 1;
}
function select2() {
    document.getElementById("Q1button1").style.borderColor = "#02639c";
    document.getElementById("Q1button2").style.borderColor = " lime";
    document.getElementById("Q1button3").style.borderColor = " #02639c";
    document.getElementById("Q1button4").style.borderColor = " #02639c";
    Q1Answer = 2;
}
function select3() {
    document.getElementById("Q1button1").style.borderColor = "#02639c";
    document.getElementById("Q1button2").style.borderColor = " #02639c";
    document.getElementById("Q1button3").style.borderColor = " lime";
    document.getElementById("Q1button4").style.borderColor = " #02639c";
    Q1Answer = 3;
}
function select4() {
    document.getElementById("Q1button1").style.borderColor = "#02639c";
    document.getElementById("Q1button2").style.borderColor = " #02639c";
    document.getElementById("Q1button3").style.borderColor = " #02639c";
    document.getElementById("Q1button4").style.borderColor = " lime";
    Q1Answer = 4;
}

//highlights around your selected answer for question 2
function Q2select1() {
    document.getElementById("Q2button1").style.borderColor = "lime";
    document.getElementById("Q2button2").style.borderColor = " #02639c";
    document.getElementById("Q2button3").style.borderColor = " #02639c";
    document.getElementById("Q2button4").style.borderColor = " #02639c";
    Q2Answer = 1;
}
function Q2select2() {
    document.getElementById("Q2button1").style.borderColor = "#02639c";
    document.getElementById("Q2button2").style.borderColor = " lime";
    document.getElementById("Q2button3").style.borderColor = " #02639c";
    document.getElementById("Q2button4").style.borderColor = " #02639c";
    Q2Answer = 2;
}
function Q2select3() {
    document.getElementById("Q2button1").style.borderColor = "#02639c";
    document.getElementById("Q2button2").style.borderColor = " #02639c";
    document.getElementById("Q2button3").style.borderColor = " lime";
    document.getElementById("Q2button4").style.borderColor = " #02639c";
    Q2Answer = 3;
}
function Q2select4() {
    document.getElementById("Q2button1").style.borderColor = "#02639c";
    document.getElementById("Q2button2").style.borderColor = " #02639c";
    document.getElementById("Q2button3").style.borderColor = " #02639c";
    document.getElementById("Q2button4").style.borderColor = " lime";
    Q2Answer = 4;
}

//question 1
//1
if (one == 0) {
    a = "What year was FBLA founded?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "1940"; //correct
    document.getElementById("Q1button2").innerHTML = "2020";
    document.getElementById("Q1button3").innerHTML = "1970";
    document.getElementById("Q1button4").innerHTML = "1999";
    Q1Correct = 1;
}
//2
if (one == 1) {
    var a = "How many divisions are there in FBLA?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "2";
    document.getElementById("Q1button2").innerHTML = "3";
    document.getElementById("Q1button3").innerHTML = "4"; //correct
    document.getElementById("Q1button4").innerHTML = "5";
    Q1Correct = 3;
}
//3
if (one == 2) {
    var a = "Where is nationals help for FBLA?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "Phoenix, Arizona";
    document.getElementById("Q1button2").innerHTML = "Salt Lake City, Utah"; //correct
    document.getElementById("Q1button3").innerHTML = "Los Angeles, California";
    document.getElementById("Q1button4").innerHTML = "Houston, Texas";
    Q1Correct = 2;
}
//4
if (one == 3) {
    var a = "Which of the following is not a goal of FBLA goals?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "Develop competent, aggressive business leadership.";
    document.getElementById("Q1button2").innerHTML = "Strengthen the confidence of students in themselves and their work.";
    document.getElementById("Q1button3").innerHTML = "Create more interest in and understanding of American business enterprise.";
    document.getElementById("Q1button4").innerHTML = "Teach students how to defend themselves in one on one combat."; //correct
    Q1Correct = 4;
}
//5
if (one == 4) {
    var a = "Which of the following is a division of FBLA?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "Future Business Leaders of America"; //correct
    document.getElementById("Q1button2").innerHTML = "FBLA-Middle Level"; //correct
    document.getElementById("Q1button3").innerHTML = "Phi Beta Lambda"; //correct
    document.getElementById("Q1button4").innerHTML = "Professional Division"; //correct
    Q1Correct = 0;
}
//6
if (one == 5) {
    var a = "Which of the following is not a part of the FBLA code of ethics?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "I will be honest and sincere.";
    document.getElementById("Q1button2").innerHTML = "I will willinglly accept responsibilities and duties.";
    document.getElementById("Q1button3").innerHTML = "I will abide by the rules and regulations of my school.";
    document.getElementById("Q1button4").innerHTML = "None of the above."; //correct
    Q1Correct = 4;
}
//7
if (one == 6) {
    var a = "What division level is PBL?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "Elementary level";
    document.getElementById("Q1button2").innerHTML = "High School level";
    document.getElementById("Q1button3").innerHTML = "College level"; //correct
    document.getElementById("Q1button4").innerHTML = "All of the above";
    Q1Correct = 3;
}
//8
if (one == 7) {
    var a = "Where is the FBLA center located in Arizona?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "Peoria";
    document.getElementById("Q1button2").innerHTML = "Tuscan";
    document.getElementById("Q1button3").innerHTML = "Phoenix"; //correct
    document.getElementById("Q1button4").innerHTML = "Sun City";
    Q1Correct = 3;
}
//9
if (one == 8) {
    var a = "Who provides cash awards and trophies for top winners at conference events";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "The Government";
    document.getElementById("Q1button2").innerHTML = "Sponsors"; //correct
    document.getElementById("Q1button3").innerHTML = "FBLA";
    document.getElementById("Q1button4").innerHTML = "Advertisers";
    Q1Correct = 2;
}
//10
if (one == 9) {
    var a = "What grade makes up the largest percentage of FBLA members?";
    document.getElementById("Q1").innerHTML = a;
    document.getElementById("Q1button1").innerHTML = "9th grade";
    document.getElementById("Q1button2").innerHTML = "10th grade";
    document.getElementById("Q1button3").innerHTML = "11th grade"; //correct
    document.getElementById("Q1button4").innerHTML = "12th grade";
    Q1Correct = 3;
}

//question 2
//1
if (two == 0) {
    var b = "Where is FBLA headquartered?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Tuscan, Arizona";
    document.getElementById("Q2button2").innerHTML = "Dallas, Texas";
    document.getElementById("Q2button3").innerHTML = "Reston, Virginia"; //correct
    document.getElementById("Q2button4").innerHTML = "San Diego, California";
    Q2Correct = 3;
}
//2
if (two == 1) {
    var b = "When was the first PBL collegiate chapter chartered?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "1956";
    document.getElementById("Q2button2").innerHTML = "1958"; //correct
    document.getElementById("Q2button3").innerHTML = "1960";
    document.getElementById("Q2button4").innerHTML = "1962";
    Q2Correct = 2;
}
//3
if (two == 2) {
    var b = "Where was the first high school chapter of PBL chartered?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Garland City, Texas";
    document.getElementById("Q2button2").innerHTML = "Pittsburgh City, Pennsylvania";
    document.getElementById("Q2button3").innerHTML = "Baltimore City, Maryland";
    document.getElementById("Q2button4").innerHTML = "Johnson City, Tennessee"; //correct
    Q2Correct = 4;
}
//4
if (two == 3) {
    var b = "When was the FBLA concept developed?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "1937"; //correct
    document.getElementById("Q2button2").innerHTML = "1938";
    document.getElementById("Q2button3").innerHTML = "1939";
    document.getElementById("Q2button4").innerHTML = "2020";
    Q2Correct = 1;
}
//5
if (two == 4) {
    var b = "What are NFLCs designed to do?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Teach students how to be good independent workers.";
    document.getElementById("Q2button2").innerHTML = "Teach students leadership skills and team-building."; //correct
    document.getElementById("Q2button3").innerHTML = "Teach students how to treat others with respect.";
    document.getElementById("Q2button4").innerHTML = "Teach students how to wash their hands.";
    Q2Correct = 2;
}
//6
if (two == 5) {
    var b = "What is FBLA-PBL's National Awards Program commonly referred to as?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "FBLA National Awards Program";
    document.getElementById("Q2button2").innerHTML = "Future Business Leader of America";
    document.getElementById("Q2button3").innerHTML = "Competitive events"; //correct
    document.getElementById("Q2button4").innerHTML = "Business Award";
    Q2Correct = 3;
}
//7
if (two == 6) {
    var b = "What division level is FBLA?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Elementary level";
    document.getElementById("Q2button2").innerHTML = "High School level"; //correct
    document.getElementById("Q2button3").innerHTML = "College level";
    document.getElementById("Q2button4").innerHTML = "All of the above";
    Q2Correct = 2;
}
//8
if (two == 7) {
    var b = "Which of the following is not a part of FBLA-PBL creed?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Education is the right of every person.";
    document.getElementById("Q2button2").innerHTML = "Every person should prepare for a useful occupation.";
    document.getElementById("Q2button3").innerHTML = "I have the responsibility to work efficiently and to think clearly.";
    document.getElementById("Q2button4").innerHTML = "I will be honest and sincere."; //correct
    Q2Correct = 4;
}
//9
if (two == 8) {
    var b = "This training conference prepares student leaders and members to assume their elected responsibilities and develop valuable life skills.";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").innerHTML = "Institute for Leaders"; //correct
    document.getElementById("Q2button2").innerHTML = "FBLA code of conduct";
    document.getElementById("Q2button3").innerHTML = "Institute for Students";
    document.getElementById("Q2button4").innerHTML = "FBLA National Awards Program";
    Q2Correct = 1;
}
//10
if (two == 9) {
    var b = "Which has a higher percentage of members in FBLA-PBL, men or women?";
    document.getElementById("Q2").innerHTML = b;
    document.getElementById("Q2button1").style.visibility = "hidden";
    document.getElementById("Q2button2").innerHTML = "Men";
    document.getElementById("Q2button3").innerHTML = "Women"; //correct
    document.getElementById("Q2button4").style.visibility = "hidden";
    Q2Correct = 3;
}

//question 3
//1
if (three == 0) {
    var c = "FBLA is funded by membership dues, conference fees, corporate contributions, and grants.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//2
if (three == 1) {
    var c = "Desert is one of the regions for FBLA-PBL.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True";
    document.getElementById("Q3radio2").innerHTML = "False"; //correct
    Q3Correct = 2;
}
//3
if (three == 2) {
    var c = "When at an FBLA event, you must wear dress pants, and a collared shirt.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//4
if (three == 3) {
    var c = "Top winners in each state are eligible to compete for honors at the National Leadership Conference each summer.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//5
if (three == 4) {
    var c = "FBLA has a hall of fame for past winners.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//6
if (three == 5) {
    var c = "The FBLA has over 60 sponsors and partners.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True";
    document.getElementById("Q3radio2").innerHTML = "False"; //correct
    Q3Correct = 1;
}
//7
if (three == 6) {
    var c = "A larger percentage of people in FBLA are women.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//8
if (three == 7) {
    var c = "Mike Manion from Scottsdale, Arizona was added to the wall of fame in 2018.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//9
if (three == 8) {
    var c = "In 2019, Jean Buckley retired as president and chief executive officer of the national association.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True"; //correct
    document.getElementById("Q3radio2").innerHTML = "False";
    Q3Correct = 1;
}
//10
if (three == 9) {
    var c = "FBLA-PBL is under 75 years old.";
    document.getElementById("Q3").innerHTML = c;
    document.getElementById("Q3radio1").innerHTML = "True";
    document.getElementById("Q3radio2").innerHTML = "False"; //correct
    Q3Correct = 2;
}

//question4
//1
if (four == 0) {
    var d = "There are ____ national officers representing FBLA's membership.";
    document.getElementById("Q4").innerHTML = d;
}
//2
if (four == 1) {
    var d = "What does FBLA stand for?";
    document.getElementById("Q4").innerHTML = d;
}
//3
if (four == 2) {
    var d = "According to the FBLA creed, ____ is the right og every person.";
    document.getElementById("Q4").innerHTML = d;
}
//4
if (four == 3) {
    var d = "How many regions are there in FBLA?";
    document.getElementById("Q4").innerHTML = d;
}
//5
if (four == 4) {
    var d = "How many steps are there to become a member of the FBLA?";
    document.getElementById("Q4").innerHTML = d;
}
//6
if (four == 5) {
    var d = "FBLA-PBL is governed by a set of ____.";
    document.getElementById("Q4").innerHTML = d;
}
//7
if (four == 6) {
    var d = "I shall strive to develope the qualities necessary in becoming a ____ business leader.";
    document.getElementById("Q4").innerHTML = d;
}
//8
if (four == 7) {
    var d = "How many total activities are there in FBLA?";
    document.getElementById("Q4").innerHTML = d;
}
//9
if (four == 8) {
    var d = "FBLA provides programs to help high school students prepare for carreers in ____.";
    document.getElementById("Q4").innerHTML = d;
}
//10
if (four == 9) {
    var d = "How many events does FBLA-PBL have?";
    document.getElementById("Q4").innerHTML = d;
}

//question5
//1
if (five == 0) {
    var e = "Who is the President of the FBLA?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "Khadeem Bernard";
    document.getElementById("Q5option2").innerHTML = "Alexander Graham";
    document.getElementById("Q5option3").innerHTML = "Susan seuferer";
    document.getElementById("Q5option4").innerHTML = "Ryan Paul";
    Q5Correct = 2;
}
//2
if (five == 1) {
    var e = "What does PBL stand for?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "Preparing Business Leaders";
    document.getElementById("Q5option2").innerHTML = "Project Based Learning";
    document.getElementById("Q5option3").innerHTML = "Performance Based Logistics";
    document.getElementById("Q5option4").innerHTML = "Phi Beta Lambda";
    Q5Correct = 4;
}
//3
if (five == 2) {
    var e = "Who developed the idea for FBLA?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "Chris Dzurick";
    document.getElementById("Q5option2").innerHTML = "Dr. Hamden L. Forkner";
    document.getElementById("Q5option3").innerHTML = "Susan seuferer";
    document.getElementById("Q5option4").innerHTML = "Ryan";
    Q5Correct = 2;
}
//4
if (five == 3) {
    var e = "How many members are there in FBLA?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "50,000";
    document.getElementById("Q5option2").innerHTML = "110,000";
    document.getElementById("Q5option3").innerHTML = "392,183";
    document.getElementById("Q5option4").innerHTML = "230,000";
    Q5Correct = 4;
}
//5
if (five == 4) {
    var e = "What does NFLC stand for?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "National Fall Leadership Conference";
    document.getElementById("Q5option2").innerHTML = "National Foreign Language Center";
    document.getElementById("Q5option3").innerHTML = "National Financial Literacy Challenge";
    document.getElementById("Q5option4").innerHTML = "National Football League Committee";
    Q5Correct = 1;
}
//6
if (five == 5) {
    var e = "What does it cost to join FBLA?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "$0 Max";
    document.getElementById("Q5option2").innerHTML = "$10 Max";
    document.getElementById("Q5option3").innerHTML = "$10 Min";
    document.getElementById("Q5option4").innerHTML = "$25";
    Q5Correct = 2;
}
//7
if (five == 6) {
    var e = "How many competitive events are there this 2020-21 school year?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "8 Events";
    document.getElementById("Q5option2").innerHTML = "14 Events";
    document.getElementById("Q5option3").innerHTML = "16 Events";
    document.getElementById("Q5option4").innerHTML = "19 Events";
    Q5Correct = 3;
}
//8
if (five == 7) {
    var e = "What does SLC stand for?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "Student Loan Corporation";
    document.getElementById("Q5option2").innerHTML = "Single-Level Cell";
    document.getElementById("Q5option3").innerHTML = "State Leadership Council";
    document.getElementById("Q5option4").innerHTML = "State Leadership Conference";
    Q5Correct = 4;
}
//9
if (five == 8) {
    var e = "How old is FBLA as of 2020?";
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "83 Years Old";
    document.getElementById("Q5option2").innerHTML = "84 Years Old";
    document.getElementById("Q5option3").innerHTML = "85 Years Old";
    document.getElementById("Q5option4").innerHTML = "66 Years Old";
    Q5Correct = 1;
}
//10
if (five == 9) {
    var e = "Who of the following is on the board of directors"; //Susan seuferer, Ryan Paul, Chris Dzurick, Brandon Griffin
    document.getElementById("Q5").innerHTML = e;
    document.getElementById("Q5option1").innerHTML = "Susan seuferer";
    document.getElementById("Q5option2").innerHTML = "Ryan Paul";
    document.getElementById("Q5option3").innerHTML = "Chris Dzurick";
    document.getElementById("Q5option4").innerHTML = "Brandon Griffin";
    Q5Correct = 0;
}

function calculateQ4() {
    //how many officers
    if (four == 0 && question4Output == "9" || four == 0 && question4Output == "nine" || four == 0 && question4Output == "Nine" || four == 0 && question4Output == "NINE") {
        right ++;
    }
    //what does fbla stand for
    if (four == 1 && question4Output == "Future Business Leaders of America" || four == 1 && question4Output == "Future Business Leaders Of America" || four == 1 && question4Output == "FUTURE BUSINESS LEADERS OF AMERICA") {
        right ++;
    }
    //everyone has the right to education
    if (four == 2 && question4Output == "education" || four == 1 && question4Output == "Education" || four == 1 && question4Output == "EDUCATION") {
        right ++;
    }
    //How many regions does FBLA have
    if (four == 3 && question4Output == "5" || four == 3 && question4Output == "five" || four == 3 && question4Output == "Five" || four == 3 && question4Output == "FIVE") {
        right ++;
    }
    //How many steps are there in becoming a member of FBLA 
    if (four == 4 && question4Output == "3" || four == 4 && question4Output == "three" || four == 4 && question4Output == "Three" || four == 4 && question4Output == "THREE") {
        right ++;
    }
    //FBLA-PBL is governed by a set of [blank] ---Bylaws
    if (four == 5 && question4Output == "bylaws" || four == 5 && question4Output == "Bylaws" || four == 5 && question4Output == "BYLAWS") {
        right ++;
    }
    //I shall strive to develop the qualities necessary in becoming a [blank] business leader. ---responsible
    if (four == 6 && question4Output == "responsible" || four == 6 && question4Output == "Responsible" || four == 6 && question4Output == "RESPONSIBLE") {
        right ++;
    }
    //There a {blank}+ total activities in FBLA --- 70+
    if (four == 7 && question4Output == "70+" || four == 7 && question4Output == "70") {
        right ++;
    }
    //FBLA provides programs to help high school students prepare for careers in [blank]. ---business
    if (four == 8 && question4Output == "business" || four == 8 && question4Output == "Business" ||four == 8 && question4Output == "BUSINESS") {
        right ++;
    }
    //How many events does FBLA-PBL have? --- 60+
    if (four == 9 && question4Output == "70+" || four == 9 && question4Output == "70") {
        right ++;
    }
}

function Q5select1() {
    Q5selected = 1;
    console.log("selected 1");
}
function Q5select2() {
    Q5selected = 2;
}
function Q5select3() {
    Q5selected = 3;
}
function Q5select4() {
    Q5selected = 4;
}

function submitButton() {
    document.getElementById("confirmSubmit").style.visibility = "visible";
}
function cancel() {
    document.getElementById("confirmSubmit").style.visibility = "hidden";
}

function finalSubmit() {
    cancel()
    if (Q1Answer == Q1Correct || Q1Correct == 0) {
        right ++;
    }

    if (Q2Answer == Q2Correct) {
        right ++;
    }

    if (Q3Answer == Q3Correct) {
        right ++;
    }

    //question 4 is calculated here
    question4Input = document.getElementById("Q4text");
    question4Output = question4Input.value;
    calculateQ4();

    var Q5selected = document.getElementById("Q5dropdown").selectedIndex;

    if (Q5Correct == Q5selected) {
        right ++;
    }

    console.log(right + " correct");
    var score = (right / 5) * 100;
    if (right == 1) {
        alert("You answered " + right + " question correctly. " + score + "%");
    } else {
        alert("You answered " + right + " questions correctly. " + score + "%");
    }

    window.location.href = "main.html";
}