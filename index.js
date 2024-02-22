let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage as array and log it out
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// better separation of concerns, doesnt use onclick method
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
  // Save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Add the item to the listItems variable instead of the ulEl.innerHTML

    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`;

    //method .1
    //   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // method .2 to createElement and append...
    //   const li = document.createElement("li")
    //   li.textContent = myLeads[i]
    //   ulEl.append(li)
  }

  //  Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;
}

//falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false
