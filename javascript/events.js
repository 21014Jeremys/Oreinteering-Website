fetch("../data/events.json").then(response => response.json()).then(data => {
    makeTable(data);
});


const mainTable = document.getElementsByClassName("main_table_parent")[0];
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
