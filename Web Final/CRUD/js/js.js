
class Geek {
  constructor(fname, lname, email, password, cpassword) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.cpassword = cpassword;
    
  }
}


class UI {
  static displayGeeks() {
    const geeks = Store.getGeeks();

    geeks.forEach((geek) => UI.addGeeksToList(geek));
  }

  static addGeeksToList(geek) {
    const list = document.querySelector('#geek-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${geek.fname}</td>
      <td>${geek.lname}</td>
      <td>${geek.email}</td>
      <td>${geek.password}</td>
      <td>${geek.cpassword}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteGeek(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#geek-form');
    container.insertBefore(div, form);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#fname').value = '';
    document.querySelector('#lname').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#password').value = '';
  }
}


class Store {
  static getGeek() {
    let geeks;
    if(localStorage.getItem('geeks') === null) {
      geeks = [];
    } else {
      geeks = JSON.parse(localStorage.getItem('geeks'));
    }

    return geeks;
  }

  static addGeek(geek) {
    const geeks = Store.getGeek();
    geeks.push(geek);
    localStorage.setItem('geeks', JSON.stringify(geeks));
  }

  static removeGeek(isbn) {
    const geeks = Store.getGeek();

    geeks.forEach((geek, index) => {
      if(geek.isbn === isbn) {
        geeks.splice(index, 1);
      }
    });

    localStorage.setItem('geeks', JSON.stringify(geeks));
  }
}


document.addEventListener('DOMContentLoaded', UI.displayGeek);


document.querySelector('#geek-form').addEventListener('submit', (e) => {
  
  e.preventDefault();

 
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const cpassword = document.querySelector('#cpassword').value;


 
  if(fname === '' || lname === '' || email === '' || password === '' || cpassword === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
   
    const geek = new Geek(fname, lname, email, password, cpassword);

    
    UI.addGeeksToList(geek);

   
    Store.addGeek(geek);

    
    UI.showAlert('Geek person Added', 'success');

    
    UI.clearFields();
  }
});


document.querySelector('#geek-list').addEventListener('click', (e) => {
  
  UI.deleteGeek(e.target);

  
  Store.removeMovie(e.target.parentElement.previousElementSibling.textContent);

  
  UI.showAlert('Movie Removed', 'success');
});