let form=document.getElementById('localStorage')
let input=document.getElementById('storage')
let button=document.getElementById('submit')
let h2=document.getElementById('display')

window.onload = function() {
// To retrieve the stored value from local storage and also make it an array to store multiple values
let items = JSON.parse(localStorage.getItem('inputValue')) || [];
// when the page loads, retrieve the stored value from local storage and display it on the page
h2.innerHTML = items.join('<br>');
}

form.addEventListener('submit', function(e) {
e.preventDefault();
// To display the input value on the page
let h2=document.getElementById('display');
let input=document.getElementById('storage').value;
h2.innerHTML=input
// To get the old values in local storage and also make it an array to store multiple values
let items = JSON.parse(localStorage.getItem('inputValue')) || [];
// To add the new input value to the old values in local storage
items.push(input);
// To set the new value in local storage
localStorage.setItem('inputValue', JSON.stringify(items));
// To display all the values in local storage on the page
h2.innerHTML = items.join('<br>');
// reset the form after submission
form.reset()
});