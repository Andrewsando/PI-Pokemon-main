export default function validations (data){

    const regex = new RegExp("^[A-Za-z_]+$");

    let incorrect = {};
    
if (data.length > 10) {
        incorrect.name = "Your pokemon's name cannot have more than 10 letters.";

}
if (data.length <= 0) {
    incorrect.name = "You must enter a name";
}

if (!regex.test(data)) {
    incorrect.name = "The name of your pokemon cannot have numbers";
}
return incorrect
}