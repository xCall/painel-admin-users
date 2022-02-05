let gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
let name = document.querySelector('#exampleInputName');
let birth = document.querySelector('#exampleInputBirth');
let country = document.querySelector('#exampleInputCountry');
let email = document.querySelector('#exampleInputEmail');
let password = document.querySelector('#exampleInputpassword');
let photo = document.querySelector('#exampleInputFile');
let admin = document.querySelector('#exampleInputAdmin');


var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach((field) => {
  if (field.name == 'gender') {
    if (field.checked) console.log(`sim ${field}`);
  } else {
    console.log('nao');
  }
});