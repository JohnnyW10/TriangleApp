//In this function we check that we can create triangle from values of the inputs in HTML and after that we check what kind of triangle is that

function check_traingle() {
  let A = document.getElementById('FirstN').value;
  let B = document.getElementById('SecondN').value;
  let C = document.getElementById('ThirdN').value;

  let display_result = document.getElementById('result');

  //This variables is to do Pythagorean theorem which is needed to check rectangularity
  let k_A = A*A;
  let k_B = B*B;
  let k_C = C*C;

  //Variable to return string
  let result = '';

  let array = [A,B,C];
  array.sort(function(a, b){return a-b});
  
//checking value if it is null program will stoped and after this we verify if two shorter sides can create triangle with longer third side if they are equal with longer or their sum is bigger
  if((A!=0 && B!=0 && C!=0) && (parseInt(array[0]) + parseInt(array[1]) >= array[2])) {
    if (A===B && B===C && A===C) {
      result += "This is an equilateral triangle. ";
    } else if(A===B || B===C || A===C) {
      result += "It is an isosceles triangle. ";
    }
    if ((k_A + k_B === k_C) || (k_A + k_C === k_B) || (k_C + k_B === k_A)) {
      result += "It is a rectangular triangle. ";
    }
    if (A!=B && C!=A && C!=B ) {
      result += "This is an equilateral triangle. ";
    } 
    
  } else {
    result += "The data is wrong!!! Change value. ";
  }

  console.log(result);
  display_result.innerHTML = result;
  return result;
}

//This variable is our button and after clicked we call our function
let button = document.getElementById('but');
button.addEventListener("click", check_traingle);

