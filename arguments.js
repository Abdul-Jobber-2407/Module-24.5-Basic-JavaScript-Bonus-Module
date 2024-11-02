//  24.5 - 1-3-arguments.js

function add (num1, num2){
    console.log(num1 , num2);
}
add(12, 45, 13, 89, 78);

/************************************************ */
function add (num1, num2){
    console.log(num1 , num2);
    console.log(arguments);
}
add(12, 45, 13, 89, 78);  

// output is not array , but this is a  array object . 