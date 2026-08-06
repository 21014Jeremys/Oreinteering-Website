window.addEventListener("DOMContentLoaded",() => {
    console.log("Hi")
    fetch("../data/events.json").then(response => response.json()).then(data => {
    makeTable(data, "All");
    });

    fetch("../data/update_log.txt").then(response => response.text()).then(txt => {
    update_update(txt);
    });
});


const mainTable = document.getElementsByClassName("main_table_parent")[0];
const update = document.getElementsByClassName("update")[0];
const dropdown = document.getElementById("drop_down");
let stripe = "two"


function makeTable(data, sort) {
    let clubs = ["All"]
    allData = data
    mainTable.replaceChildren();
    data.forEach(event => {
        if (!clubs.includes(event.club)) {
            clubs.push(event.club)
        }
        
        if (event.club == sort || sort == "All") {
            const tableRow = document.createElement("tr");
            if (stripe == "one") {
                stripe = "two"
            } else {
                stripe = "one"
            }

            tableRow.innerHTML = `
            <td class="date">${event.date}</td>
            <td class="name"><a href="${event.link}" target="_blank">${event.name}</a></td>
            <td class="location">${event.location}</td>
            <td class="club">${event.club}</td>`;
            tableRow.className = stripe

            mainTable.appendChild(tableRow);
        };
    });
    makeDropdown(clubs);
};

function makeDropdown(clubs) {
    for (index = 0; index < clubs.length; index ++) {
        const button = document.createElement("div");
        button.innerHTML = `<button onclick="updateTable(this)">${clubs[index]}</button>`;
        dropdown.appendChild(button);
        
    };
}

function updateTable (thisButton){
    let sort = thisButton.innerText;
    dropdown.textContent = sort
    makeTable(allData, sort)
    
}

function update_update(txt) {
    console.log(txt)
    update.textContent = "Last updated: " + txt
}