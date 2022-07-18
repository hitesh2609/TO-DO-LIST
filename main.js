// Get Element by Id()

// let header = document.getElementById("header-title")
// header.textContent ="hello world"
// header.style.color="green"
// header.style.borderBottom="3px solid red";
// header.style.backgroundColor="black"
// header.style.fontStyle="italic"
// console.log(header)



// get Element by class Name()

// let items = document.getElementsByClassName("list-group-item")
// items[1].style.color="green"
// items[1].style.backgroundColor="black"
// items[1].textContent="This is list"

// for(i=0; i<items.length;i++){
//     if(i%2==0){
//     items[i].style.backgroundColor="black"
//     items[i].style.color="red"
//     items[i].textContent="All list items"
// }
// else{
//     items[i].style.backgroundColor="grey"
//     items[i].style.color="blue"
//     items[i].textContent="All class items"
// }
// }
// console.log(items)




// get Element by Tagname ()

// let tag = document.getElementsByTagName("input")
// tag[1].textContent="click here"
// tag[1].style.color="blue"
// tag[1].style.backgroundColor="grey"
// console.log(tag)

// console.log(document.body.style.backgroundColor = "khaki")

// getElement by id using querySelector

// let head = document.querySelector("#main")
// head.style.border="3px solid red"
// head.style.backgroundColor="grey"
// console.log(head)



// get Element by classname using querySelector

// let list = document.querySelector(".list-group-item")
// list.style.color="red"
// list.textContent="This is first item"
// list.style.backgroundColor = "black"
// console.log(list)



// get Element by tagname using querySelector

// let tagname = document.querySelector("li")
// console.log(tagname)


// let heading = document.querySelector("input[type='submit']")
// heading.style.backgroundColor="black"
// heading.value = "load"
// heading.style.color="green"
// console.log(heading)


// let hd = document.querySelector("h2")
// console.log(hd)




// getElementby id using querySelector all 


// let list = document.querySelectorAll(".list-group-item")
// let odd = document.querySelectorAll(".list-group-item:nth-child(odd)")
// console.log(odd)

// let even = document.querySelectorAll(".list-group-item:nth-child(even)")
// console.log(even)

// for(i=0; i<odd.length; i++){

//     odd[i].style.backgroundColor = "green"
//     even[i].style.backgroundColor = "black"

// }


// let heads = document.querySelectorAll(".title")
// for (i=0; i<heads.length; i++){
//     heads[i].style.backgroundColor = "green"
// }
// console.log(heads)



// let btn = document.getElementById("btn")
// console.log(btn)

// function add(){


// let test = document.getElementById("test")
// console.log(test)

// let heading = document.createElement("h1")
// heading.textContent = "Go to School"
// heading.style.backgroundColor = "black"
// heading.style.color = "green"
// test.appendChild(heading)

// document.body.style.backgroundColor = "orange"
// }

// btn.addEventListener("click",add)

