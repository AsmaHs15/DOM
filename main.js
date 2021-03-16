
let myInput = document.getElementById('myInput')
let addBtn = document.querySelector('.addBtn')
let myList = document.getElementById('myUL')

function toDoList(){

let text = document.createTextNode(myInput.value)

	if (myInput.value.trim()=== "")
	{
		alert ('Veuillez saisir un text svp ! ')
	}
	else
	{
		let li = document.createElement('li')
		li.appendChild(text) 
  
		let removeBtn= document.createElement('button')
			removeBtn.innerText='X'
			removeBtn.setAttribute('class','removeBtn')
			removeBtn.classList.add('removeBtn')

		li.appendChild(removeBtn) 
		myList.appendChild(li)
		myInput.value=""
			
			li.addEventListener('mouseover', function()
				{
						li.style.backgroundColor= '#90EE90' ;

				})
				
			li.addEventListener('mouseout', function()
			{
				li.style.backgroundColor= 'lightgray' ;

			})

		removeBtn.addEventListener('click',function(){
        myList.removeChild(li.remove())

			})


	}
}

						addBtn.addEventListener('click',toDoList)

