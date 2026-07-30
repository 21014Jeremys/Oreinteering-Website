window.addEventListener("DOMContentLoaded",() => {
    console.log("Hi")
    fetch("../data/events.json").then(response => response.json()).then(data => {
    makeTable(data);
    });

    fetch("../data/update_log.txt").then(response => response.text()).then(txt => {
    update_update(txt);
    });
});


const mainTable = document.getElementsByClassName("main_table_parent")[0];
const update = document.getElementsByClassName("update")[0];
let stripe = "two"


function makeTable(data) {
    data.forEach(event => {
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
    });
    
    
    
};


function update_update(txt) {
    console.log(txt)
    update.textContent = "Last updated: " + txt
}