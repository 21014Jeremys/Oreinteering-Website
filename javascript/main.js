console.log("Hey, you are reading this!");
let list_data = [];
const demon_button = document.getElementById("demon_button");
console.log(demon_button);

const style = document.styleSheets[0];
console.log(style.cssRules[0]);

const iframe = document.getElementById("header");
/*iframe.onload = function(){
    const iframeDoc = iframe.contentWindow.document;
    
    const logo = iframeDoc.getElementById("website_logo");
    const header = iframeDoc.getElementById("header");

    if (demon_button != null){
        demon_button.onclick = function() {
            window.alert("You have doomed yourself!");
            logo.src = "../images/logo_with_demon.svg";
            header.style.backgroundColor = "#000000";
            console.log(logo.src);
        };
    }
};*/




const sub_button = document.getElementById("submit_button");

if (sub_button != null) {
    sub_button.onclick = function() {
        list_data.push(document.getElementById("name_input").value);
        list_data.push(document.getElementById("email_input").value);
        list_data.push(document.getElementById("message_input").value);
        console.log(list_data);

        fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("name_input").value,
                email: document.getElementById("email_input").value,
                message: document.getElementById("message_input").value
            })
        })
        .then(res => res.text())
        .then(msg => alert(msg))
        .catch(err => console.error(err));
    };
} else {
    console.log("No button found :(");
}





function spam() {
    window.alert("This is a warning!");
    window.alert("The sun is not exploding!");
    window.alert("I am hungary");

}
