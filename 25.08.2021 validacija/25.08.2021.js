/** @format */

let gradovi = [
  {
    name: "Beograd",
  },
  {
    name: "Novi Sad",
  },
  {
    name: "Nis",
  },
  {
    name: "Subotica",
  },
  
];

const select = document.querySelector("#select-grad");
const option = document.createElement('option')
option.textContent = 'Odaberite grad'
const d = option.setAttribute('selected', 'selected')
option.disabled = true
select.append(option)

//lista dinosaurusa iz niza po petlji
for(let i = 0; i< gradovi.length; i++){
    let opt = document.createElement('option')
    opt.innerHTML = gradovi[i].name
    select.append(opt)
}

//

let kupci = [];
const itemContainer = document.querySelector("#item-container");

const addKupac = (kupac) => {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <p><span>Name:</span> ${kupac.ime}</p>
    <p><span>Surname:</span> ${kupac.prezime}</p>
    <p><span>Password:</span> ${kupac.password}</p>
    <p><span>Reenter Password:</span> ${kupac.reenterPassword}</p>
    <p><span>Kurs:</span> ${kupac.kurs}</p>
    <p><span>City: </span> ${kupac.grad}</p>
    <p><span>Gender: </span> ${kupac.pol}</p>
    `;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  itemContainer.append(item);
  item.append(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    item.remove();
    kupci.splice(kupci.indexOf(kupac), 1);
    console.log(kupci);
  });
};

kupci.forEach((kupac) => {
  addKupac(kupac);
});


const forma = document.querySelector("#forma");

//unos nove porudzbine
forma.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#kupac");
  const surnameInput = document.querySelector('#surname')
  const passwordInput = document.querySelector('#password')
  const reenterPasswordInput = document.querySelector('#confirm')
  const check = document.querySelector('.checkBox')
  const grad = document.querySelector("#select-grad");
  const pol = document.querySelector('#pol')

  const errorName = document.querySelector('#name_error')
  const errorSurname = document.querySelector('#surname_error')
  const errorPassword = document.querySelector('#password_error')
  const errorReenterPassword = document.querySelector('#reenterPassword_error')
  const errorCheckbox = document.queryCommandIndeterm('#checkbox_error')

  

  let item = {
    ime: nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1).trim(),
    prezime: surnameInput.value,
    password: passwordInput.value,
    reenterPassword: reenterPasswordInput.value,
    kurs: check.value,
    grad: grad.value,
    pol: pol.value
    
  };
  function sadrziBroj(str) {
         number = /\d/
         return number.test(str)
  }
  function sadrziVelikoSlovo(str) {
    slovo = /[A-Z]/
    return slovo.test(str)
  }

/*   function checkBox (valid) {
    var valid = false;
    if(document.querySelector('#kurs1').checked) {
      valid = true
  
    } else if (document.querySelector('#kurs2').checked) {
      valid = true
    } else if (document.querySelector('#kurs3').checked) {
      valid = true
    }
    if(!valid) {
      errorCheckbox.test = 'Jedna opcija mora da bude odabrana'
    }
  }
    */
if(nameInput.value.length < 5 || nameInput.value.length > 10) {
  errorName.textContent = ''
  errorName.textContent = 'Broj karaktera mora da bude izmedju 5 i 10'
  return false
}
if(surnameInput.value.length < 5 || surnameInput.value.length > 20) {
  errorSurname.textContent = 'Broj karaktera mora da bude izmedju 5 i 20'
  return -1
}
if(passwordInput.value.length < 8) {
  errorPassword.textContent = 'Sifra mora da bude duza od 8 karaktera'
  return -1
}

if(!sadrziBroj(passwordInput.value)) {
  errorPassword.textContent = 'Sifra mora da sadrzi jedan broj'
  return -1
}
if(!sadrziVelikoSlovo(passwordInput.value)) {
  errorPassword.textContent = 'Sifra mora da sadrzi jedno veliko slovo'
  return -1
}
if(reenterPasswordInput.value != passwordInput.value) {
  errorReenterPassword.textContent = 'Polje mora da bude isto kao sifra'
  return -1
}
//if(checkBox()) 
  
// unos
  kupci.push(item);
  addKupac(item);
  console.log(kupci);

  //resetovanje polja
  nameInput.value = ''
  surnameInput.value = ''
  passwordInput.value = ''
  reenterPasswordInput.val = ''
  check.value = ''
  grad.value = ''
  pol.value = '' 

  
});

