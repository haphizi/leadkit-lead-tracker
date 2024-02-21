let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

// better separation of concerns, doesnt use onclick method
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = ""
});


function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML

    listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"


    //method .1
    //   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // method .2 to createElement and append...
    //   const li = document.createElement("li")
    //   li.textContent = myLeads[i]
    //   ulEl.append(li)
  }

  // 3. Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;
}
