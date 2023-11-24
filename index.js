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



