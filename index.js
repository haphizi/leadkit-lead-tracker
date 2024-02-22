let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");

const tabBtn = document.getElementById("tab-btn");

// Get the leads from the localStorage as array and log it out
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    render(myLeads);
  });

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

deleteBtn.addEventListener("dblclick", function () {
  // When clicked, clear localStorage, myLeads, and the DOM
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  // ulEl.innerHTML = null;
});

// better separation of concerns, doesnt use onclick method
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  render(myLeads);
  // Save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // Add the item to the listItems variable instead of the ulEl.innerHTML

    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;

    //method .1
    //   ulEl.innerHTML += "<li>" + leads[i] + "</li>";

    // method .2 to createElement and append...
    //   const li = document.createElement("li")
    //   li.textContent = leads[i]
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
