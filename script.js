console.log("--- E-COMMERCE SYSTEM LOADED ---");

let productName = "NoiseCancel Pro";
let category = "Audio";

let productPrice = 299.99;
let stockQuantity = 50;

let isAvailable = true;

console.log("Product Name:", productName, "(Type: " + typeof productName + ")");
console.log("Price: $" + productPrice, "(Type: " + typeof productPrice + ")");
console.log("In Stock:", isAvailable, "(Type: " + typeof isAvailable + ")");




function validateEmail() {
    
    let emailInput = document.getElementById("userEmail");
    let feedback = document.getElementById("feedbackMsg");

    if (!emailInput) return;

    let emailText = emailInput.value;

    if (emailText.includes("@") && emailText.includes(".")) {
        feedback.style.display = "block";
        feedback.style.color = "#4ecca3"; 
        feedback.innerText = "Thanks! Message sent successfully.";
    } else {
        feedback.style.display = "block";
        feedback.style.color = "red";
        feedback.innerText = "Error: Please enter a valid email address.";
    }
}