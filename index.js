let myLeads = `["www.example.com"]`;
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");


//localstorage only accepts strings
// 1. Turn the myLeads string into an array
console.log(typeof myLeads)
myLeads = JSON.parse(myLeads)
console.log(typeof myLeads)
// 2. Push a new value to the array
myLeads.push("www.zz.com")
console.log(myLeads)
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)



// better separation of concerns, doesnt use onclick method
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);

  // test localStorage usage to save leads
  localStorage.setItem("myLeads", "www.example.com");
  let getLocal = localStorage.getItem("myLeads");
  console.log(getLocal);
  
  renderLeads();
  inputEl.value = "";
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
