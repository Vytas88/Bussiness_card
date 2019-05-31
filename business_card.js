document.getElementById("submit_button").addEventListener("click", function(){
  var fullName = document.getElementById("full_name").value;
  var email = document.getElementById("email").value;
  var adress = document.getElementById("adress").value;
  var phoneNumber = document.getElementById("phone_number").value;
  var description = document.getElementById("description").value;
  let output = document.getElementById("output");

  var par1 = document.createElement("P");
  var par2 = document.createElement("P");
  var par3 = document.createElement("P");
  var par4 = document.createElement("P");
  var par5 = document.createElement("P");

  par1.textContent = fullName;
  par2.textContent = email;
  par3.textContent = adress;
  par4.textContent = phoneNumber;
  par5.textContent = description;

  output.innerHTML= null; //isvalom diva ir tada appendinam

  output.appendChild(par1);
  output.appendChild(par2);
  output.appendChild(par3);
  output.appendChild(par4);
  output.appendChild(par5);
  localStorage.setItem('full_name', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('adress', adress);
  localStorage.setItem('phone_number', phoneNumber);
  localStorage.setItem('description', description);
});

window.addEventListener("load", function(){
  var fullName = window.localStorage.getItem("full_name"); //gauni is Local Storago info
  var email = window.localStorage.getItem("email");
  var adress = window.localStorage.getItem("adress");
  var phoneNumber = window.localStorage.getItem("phone_number");
  var description = window.localStorage.getItem("description");

  var par1 = document.createElement("P");
  var par2 = document.createElement("P");
  var par3 = document.createElement("P");
  var par4 = document.createElement("P");
  var par5 = document.createElement("P");

  par1.textContent = fullName;
  par2.textContent = email;
  par3.textContent = adress;
  par4.textContent = phoneNumber;
  par5.textContent = description;

  output.appendChild(par1);
  output.appendChild(par2);
  output.appendChild(par3);
  output.appendChild(par4);
  output.appendChild(par5);
})
