// add
// delete
// search

h
let form = document.getElementById("addForm")
console.log(form)
let ulitems = document.getElementById("items")
console.log(ulitems)
let searchitem = document.getElementById("filter")
console.log(searchitem)

function additem(e){

e.preventDefault()
console.log(e)

let input = document.getElementById("item").value
document.getElementById("item").value=""
// console.log(input)
let node = document.createTextNode(input)
let newlist = document.createElement("li")
newlist.appendChild(node)
console.log(newlist)

let ul = document.getElementById("items")
newlist.className= "list-group-item"
ul.appendChild(newlist)
// console.log(ul)

let btn = document.createElement("button")
btn.appendChild(document.createTextNode("x"))
btn.className="btn btn-danger btn-sm float-right delete"
newlist.appendChild(btn)
console.log(btn)

}

function removeitem(e){

// console.log(e)

if(e.target.classList.contains("delete")){

    // console.log("btn")
if(confirm("are you sure")){
  ulitems.removeChild(e.target.parentElement)
   console.log(e.target.parentElement)

}
else{
    alert("don't waste time")
}
}
else{
    console.log("somewhere")
}

}

function finditem(e){
    let text = e.target.value.toLowerCase()
    console.log(text)
    let list = document.getElementsByTagName("li")
//   console.log(list)
  let arraylist = Array.from(list)
  console.log(arraylist)

  arraylist.forEach(function(value){

   if(value.firstChild.textContent.toLowerCase().indexOf(text)!=-1){
    value.style.display = "block"
   }
   else{
    value.style.display = "none"
   }
})


}
form.addEventListener("submit",additem)
ulitems.addEventListener("click",removeitem)
searchitem.addEventListener("keyup",finditem)