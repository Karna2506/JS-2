               
               
               // Task - 1
               

   var membership = "premium";
   if(membership == 'premium'){
      console.log("Access to all books, including exclusive content");
   }
   else if(membership == 'standard'){
      console.log("Access to free books and discounted paid books");
   }
   else if(membership == 'basic'){
     console.log("Access to only free books");
   }
   else{
    console.log("please  enter a valid membership");
   }

               
               // Task - 2
                
var customer = "vip";
var price = 100;
var finalprice;
var discount = 0;

if(price < 0){
  console.log("invalid price. please enter a valid price");
}
if(customer === "regular"){
    if(price < 100){
         discount = price * 0;
    }
    else if(price >= 100 && price <= 500){
        discount = price * 0.05;
    }
    else  {
        discount = price * 0.10;
    }
}
else if(customer === "vip"){
    if(price < 100){
        discount = price * 0.10;
    }
    else if( price >= 100 && price <= 500){
       discount = price * 0.15;
    }
    else{
        discount = price * 0.20;
    }
}
else{
    console.log("Invalid customer, please enter 'regular' or 'vip'");
}
finalprice = price - discount;
console.log( "Total Price: " +finalprice);


                   // Task - 3


var gpa = .7;
var extracurricularActivities = 0;
var communityServiceHours = 0;
 

console.log("Scholarships the student is eligible for:" );

if (gpa >= 3.5) { 
    console.log("Merit-Based Scholarship");
}
if (extracurricularActivities >= 2 && gpa >= 3.0) {
     console.log("Leadership Scholarship");
}
if (communityServiceHours >= 100 && gpa >= 2.5) {
     console.log("Community Service Scholarship");
}
else {
    console.log("The student is not eligible for any scholarships.");
}


                   // Task - 4

var dayOfWeek = "riday";  
var customerAge = 20;      

var ticketPrice;  


if (customerAge < 10) {
    console.log("Invalid age. Please enter a valid age.");
} else {
    
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
         
        ticketPrice = 15;  
        if (customerAge >= 65 || customerAge < 12) {
            ticketPrice *= 0.7;  
        }
    } else if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        
        ticketPrice = 12;  
        if (customerAge >= 65 || customerAge < 12) {
            ticketPrice *= 0.5;  
        }
    } else {
        
        console.log("Invalid day of the week. Please enter a valid day.");
    }
    console.log(  "Ticket Price: " + ticketPrice);
}


                          // Task - 5

var userAge = 25;  
var Participants = 1;  
var userEmail = "cmr@gmail.com";  

 
if (userAge < 18) {
    console.log("You must be 18 years or older to register.");
} 
else if (Participants >= 100) {
    console.log("The event is currently full. No more registrations are accepted.");
} 
else if (!userEmail.includes("@") || !userEmail.includes(".")) {
    console.log("Please provide a valid email address.");
} 
else {
    console.log("Registration successful!");
}                          


                  // Task - 6


var teaType = "Ginger";
var addOn = "Extra Sugar";

var basePrice;
var addOnPrice;
var totalPrice;
 
if (teaType === "Regular") {
    basePrice = 15;
} else if (teaType === "Masala") {
    basePrice = 20;
} else if (teaType === "Ginger") {
    basePrice = 25;
} else {
    console.log("Invalid tea type. Please choose Regular, Masala, or Ginger.");
}

 
if (addOn === "Extra Sugar") {
    addOnPrice = 2.50;
} else if (addOn === "Extra Milk") {
    addOnPrice = 5;
} else if (addOn === "No Add-ons") {
    addOnPrice = 0;
} else {
    console.log("Invalid add-on option. Please choose Extra Sugar, Extra Milk, or No Add-ons.");
}
 
totalPrice = basePrice + addOnPrice;

console.log( "Total Price: " + totalPrice.toFixed(2));