//initialize variblles form Html (grab)
const header = document.querySelector(".header");
const main = document. querySelector(".main");

//create a new varible "optionswrapper with a div"
const optionsWrapper = document.createElement("div");
//set the value of the attribute
optionsWrapper.setAttribute("class", "optionsWrapper");
//append the div to the header
header.appendChild(optionsWrapper)


//create a new paragraph with varible CurrentDate
const currentDate = document.createElement("p");
//set valuefor the attribute
currentDate.setAttribute("class", "currentDate");
//append the currentDate Paragraph
optionsWrapper.appendChild(currentDate);

//Add button
const modeBtn = document.createElement("Button");
//set Value attribute for the Button
modeBtn.setAttribute("class", "modeBtn");
//ADD css class to the Button
modeBtn.classList.add("btn");
//set the text content
modeBtn.innerText="* Change Mode *"
//Append the Button to the optionwrapper div
optionsWrapper.appendChild(modeBtn);


const greetings = document.createElement("p");
// Set Class for greetings
greetings.setAttribute("class", "greeeting");
// Append the paragraph to the paragraph
header.appendChild(greetings);

let counter = document.createElement("div")
//set value attribute to the div
counter.setAttribute("class", "counter");
//append the div to the main section
main.appendChild(counter);


const btnsWrapper = document.createElement("div");
//set class for the div
btnsWrapper.setAttribute("class", "btns-Wrapper");
// append the div to the main section
main.appendChild(btnsWrapper);

const downBtn = document.createElement("button");
//set the btn classs value
downBtn.setAttribute("class", "btn");
// set the textContent of the Down Button
downBtn.innerText = "< DOWN >";
//Append the  downbtn to the BtnsWrapper element
btnsWrapper.appendChild(downBtn);

const resetBtn = document.createElement("button");
//set class atrriubute for the rset button
resetBtn.setAttribute("class", "btn");
// set the content of the reset Button
resetBtn.innerText = "< RESET >";
// Append the resetBtn to the btnsWrapper element
btnsWrapper.appendChild(resetBtn);

const upBtn = document.createElement("button");
//set the class attribute for upbtn
upBtn.setAttribute("class", btn);
// set content of the upbtn
upBtn.innerText= " < UP >";
//Append upBtn to the btnsWrapper button
btnsWrapper.appendChild(upBtn);


// initialize Date
const generateCurrentDate = () => {
    const months = [
        "Jan",
        "feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];


    // initialize Variable
    let fullDate = newDate();
    let Date = fullDate.getDate().string().padStart(2, "0");
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();
}

