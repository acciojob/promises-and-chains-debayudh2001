//your JS code here. If required.
let form = document.querySelector("#form")
let name = document.querySelector("#name")
let age = document.querySelector("#age")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	if(name.value == "" && age.value == ""){
		alert("Please enter valid details")
		return
	}
	let prom = new Promise((resolve, reject) => {
	if(age.value > 18){
		resolve(setTimeout(() => {
			alert(`Welcome, ${name.value}. You can vote.`)
		}, 4000))
	}else{
		reject(setTimeout(() => {
			alert("Oh sorry . You aren't old enough.")
		}, 4000))
	}
    })
})

