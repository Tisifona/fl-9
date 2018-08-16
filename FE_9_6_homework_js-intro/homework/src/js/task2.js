// Your code goes here

const a_length = parseFloat(prompt(`Please enter length of first side`));
const b_length = parseFloat(prompt(`Please enter of second side`));
const angle = parseFloat(prompt(`Please enter angle`));
const all_angles = 180;
let output;

const c_length = Math.sqrt(a_length*a_length + b_length*b_length - 2*a_length*b_length*
    Math.cos(Math.PI/all_angles*angle));
const square = a_length * b_length * Math.sin(Math.PI/all_angles*angle)/2;
const perimeter = a_length + b_length + c_length;

if(a_length > 0 && b_length > 0 && angle > 0){
    output = `c length: ` + parseFloat(c_length.toFixed(2)) + '\n'
    + `Triangle square: ` + parseFloat(square.toFixed(2)) + '\n' + `Triangle perimeter: ` +
    parseFloat(perimeter.toFixed(2));
} else{
    output = `Invalid data`;
}
    console.log(output);

