// Listener for submitting
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
document.getElementById('results').style.display='none';

  // Show loader for 2 seconds
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults(){
console.log('Calculating... '); 

// UI vars
const amount= document.getElementById('amount');
const interest= document.getElementById('interest');
const years= document.getElementById('years');
const monthlyPayment= document.getElementById('monthly-payment');
const totalPayment= document.getElementById('total-payment');
const totalInterest= document.getElementById('total-interest');

const principal= parseFloat(amount.value); 
const calculatedInterest= parseFloat(interest.value) /100 / 12;
const caculatePayment= parseFloat(years.value)*12;


// compute montly payment (pw give us power)
const x= Math.pow(1+calculatedInterest, caculatePayment); 
const montly = (principal*x*calculatedInterest)/(x-1); 
if(isFinite(montly)){
  // Tofixed for decemal numbers
  monthlyPayment.value= montly.toFixed(2);
  totalPayment.value= (montly * caculatePayment).toFixed(2);
  totalInterest.value= ((montly * caculatePayment)-principal).toFixed(2);

  // Show results
  document.getElementById('results').style.display = 'block';

  // Hide loader 
  document.getElementById('loading').style.display = 'none';

}else{
 showError('Please check your Numbers')
}
}

// Show Error
function showError(error){
  // hide results
  document.getElementById('results').style.display = 'none';

  // Hide loader 
  document.getElementById('loading').style.display = 'none';
const errorDiv= document.createElement('div');

// Get Element 
const card= document.querySelector('.card');
const heading = card.querySelector('.heading');


// Add class 
errorDiv.className="alert alert-danger"; 

//Create text and append to div
errorDiv.appendChild(document.createTextNode(error));


//Insert heading above heading
card.insertBefore(errorDiv, heading);

// Clear Error message
setTimeout(clearError, 3000);

}

// Clear Error Message
function clearError() {
  document.querySelector('.alert').remove();
}

