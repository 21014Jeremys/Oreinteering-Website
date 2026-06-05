


console.log("Is this working?");
console.log("Attempt two!");

let list_data = []


const sub_button = document.getElementById("submit_button")

if (sub_button != null){
    sub_button.onclick = function(){
        list_data.push(document.getElementById("name_input").value);
        list_data.push(document.getElementById("email_input").value);
        list_data.push(document.getElementById("subject_input").value);
        list_data.push(document.getElementById("message_input").value);
        console.log(list_data);
    }
} else {
    console.log("No button found :(");
}






function spam() {
    window.alert("This is a warning!");
    window.alert("The sun is not exploding!");
    window.alert("I am hungary");

}
