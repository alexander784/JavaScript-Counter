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



