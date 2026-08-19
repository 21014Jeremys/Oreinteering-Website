window.addEventListener("DOMContentLoaded",() => {
    console.log("Hi")
    fetch("data/news.json").then(response => response.json()).then(data => {
    makeTable(data);
    });

    fetch("data/update_log.txt").then(response => response.text()).then(txt => {
    update_update(txt);
    });
});


const mainTable = document.getElementsByClassName("news_parent")[0];
const update = document.getElementsByClassName("update")[0];


function makeTable(data) {
    let stripe = "two"
    const tableData = document.createElement("tr");
    data.forEach(news => {
        const tableRow = document.createElement("tr");
        if (stripe == "one") {
            stripe = "two"
        } else {
            stripe = "one"
        }

        if (stripe == "one") {
            
            tableData.innerHTML = `
            <td>
            <a href="${news.link}" target="_blank"><img class="image" alt="image" src="${news.image}"></a>
            <h3 class="name"><a href="${news.link}" target="_blank">${news.name}</a></h3>
            </td>`;
            console.log(tableData.innerHTML)
        } else {
            tableRow.innerHTML = tableData.innerHTML + `
            <td>
            <a href="${news.link}" target="_blank"><img class="image" alt="image" src="${news.image}"></a>
            <h3 class="name"><a href="${news.link}" target="_blank">${news.name}</a></h3>
            </td>`;
            tableRow.className = stripe
            mainTable.appendChild(tableRow);
        }   
        
        
    });
};


function update_update(txt) {
    console.log(txt)
    update.textContent = "It was last updated on the " + txt
}