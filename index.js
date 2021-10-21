let input = document.querySelector('.input');
let button = document.querySelector('.btn');


button.addEventListener('click', yourCurrentAge);

function yourCurrentAge(e) {
    e.preventDefault();
    if (input.value.trim() == ''  ) {
        alert('The field must not be empty!');
        input.value = ''
        return
    }   
    if (input.value.trim() <=0) {
        alert('The field must not be negative number!');
        input.value = ''
        return
    }  
  var currentAge = input.value;
  var leftAges = 90-currentAge;
  var leftDays = 365*leftAges;
  var leftWeeks = 52*leftAges;
  var leftMonths = 12*leftAges;
  let output = document.querySelector('.output').innerHTML = "If the average life expectancy is 90 years, you have " + leftDays + " days, " + leftWeeks + " weeks and " + leftMonths + " months left.";
  console.log(output);
}


