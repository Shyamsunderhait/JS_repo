 // Question 11

 const ul = document.getElementById('first');
 const list = document.createElement('li')

 ul.appendChild(list)
 list.innerText="php"

 //Question 12
 function click() {
    alert("button is clicked")
 }

 const b = document.getElementById('firstButton')

 b.setAttribute('onclick',click());


 //Question
 const form= document.createElement("form")
 document.body.append(form)

 const name = document.createElement("label");
 form.appendChild(name)
name.innerText="Name"
const input1 = document.createElement("input")
form.appendChild(input1)
input1.setAttribute("id","name");

const email = document.createElement("input")
form.appendChild(email)
email.innerText="Email";
const input2=document.createElement("input")
form.appendChild(input2)
input2.setAttribute("id","email")

const pass = document.createElement("label")
form.appendChild(pass)
pass.appendChild(pass)
pass.innerText="Password"
const input3 = document.createElement("input");
form.appendChild(input3)
input3.setAttribute("id","password")

const btn = document.createElement("button");
form.appendChild(btn)
btn.setAttribute("id","btn")
btn.addEventListener("click",add)

const n= document.getElementById("name")
const i= document.getElementById("email")
const g= document.getElementById("password")
const a= document.getElementById("btn")


















