let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};

document.querySelectorAll('#form-user-create').forEach(() => {
  this.addEventListener('submit', (event) => {
    event.preventDefault();
    fields.forEach((field) => {
      if (field.name == 'gender') {
        if (field.checked) user[field.name] = field.value;
      } else {
        user[field.name] = field.value;
      }
    });
  });
});

console.log(user);