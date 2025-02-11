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
	let prom = new Promise((res, rej) => {
		if(age.value > 18){
			setTimeout(() => {
				res(alert(`Welcome, ${name.value}. You can vote.`))
			}, 4000)
		}else{
			setTimeout(() => {
				rej(alert(`Oh sorry ${name.value}. You aren't old enough.`))
			},4000)
		}
	})
	prom.then(() => {
		console.log("Successfull")
	}).catch(() => {
		console.log("Error")
	})
})

