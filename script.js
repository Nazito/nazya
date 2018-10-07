

var businessCase = []
var id = 0;
var parentUl =  document.getElementById('parent');
var first =  document.getElementById('first');
parentUl.addEventListener('click', styleElement);
parentUl.addEventListener('click', removeElement);

var filter = 'all'

   
function innertodo(){




var div = document.createElement('div');
div.setAttribute("class", "footer")

div.style.height = '40px'


var span = document.createElement('span');
span.innerHTML = '0 items left'
span.setAttribute("class", "spanFooter")
span.setAttribute("id", "spanFooter")



var ul = document.createElement('ul');
ul.setAttribute("class", "ulFooter")


var all = document.createElement('li');
all.innerHTML = 'All'
all.setAttribute("id", "all")
all.setAttribute("class", "borderActive")




var active = document.createElement('li');
active.innerHTML = 'Ative'
active.setAttribute("id", "active")
active.setAttribute("class", "borderNone")



var complited = document.createElement('li');
complited.innerHTML = 'Completed'
complited.setAttribute("id", "complited")
complited.setAttribute("class", "borderNone")



var input = document.createElement('input');
input.setAttribute("type", "button")
input.setAttribute("value", "")
input.setAttribute("class", "inputFooter")
input.setAttribute("id", "inputFooter")


div.appendChild(input);
ul.appendChild(complited);
ul.appendChild(active);
ul.appendChild(all);
div.appendChild(ul);
div.appendChild(span);
first.appendChild(div);




}



function innerBusinessCase(caselist) {
    removeElements()

    for (var i = 0; i < caselist.length;i++) {




    var li = document.createElement('li');
    li.classList.add('elements');
    

    var div = document.createElement('div');
    div.setAttribute('class', 'logo')
    
    var img = document.createElement('img');
    img.setAttribute('src', 'images/todo.png')
    img.setAttribute('data', caselist[i]['id'])
    img.setAttribute('class', 'readyGo')
    img.style.width = '35px'
    img.style.height = '35px'
    div.appendChild(img);






    var content = document.createElement('div');
    content.setAttribute("class", "edit")
    content.innerHTML = caselist[i]['value'];
    




    var remove = document.createElement('div');
    remove.setAttribute('class', 'del')
    remove.setAttribute('data-del', caselist[i]['id'])
   

    var del = document.createElement('img');
    remove.appendChild(del);
    
    

    
   

    



    li.appendChild(div);
    li.appendChild(content);
    li.appendChild(remove);
    
    parentUl.appendChild(li);



    

  		if (caselist[i]['completed'] == true ) {
  	
  		content.style.textDecoration = 'line-through';
  		content.style.color = '#d9d9d9'
  		img.setAttribute('src', 'images/ready.png')
  		buttonValue()

  		
  		}
    }
    


   




   
}
  
var addBusines = document.getElementById('input');
addBusines.onkeypress = addBusinessCase;
	
function addBusinessCase(event) {
  var code = event.keyCode;
  	if (code == 13){
    id = id + 1; 
    console.log(id)
    businessCase.push({value: this.value,completed: false, id: id})
    addBusines.value = '';
    innerBusinessCase(businessCase)
    innertodo()
    
    leftItems()

    
    }
 }
 
function removeElements(){
 
    var del = document.querySelectorAll('.elements');
  	for (var i = 0;i < del.length;i++){
  	parentUl.removeChild(del[i]);
  	}i
}

var allElement = document.getElementById('all');
allElement.addEventListener('click', all);


function all(){
    filter = 'all'
    borderStyle('all')
    innerBusinessCase(businessCase)
    

}



var activeElement = document.getElementById('active');
activeElement.addEventListener('click', active);


function active(){
    filter = 'active'

    borderStyle('active')
	var active = getBusinessCase()
    innerBusinessCase(active)
    
   
  
}


var complitedElement = document.getElementById('complited');
complitedElement.addEventListener('click', complited);

function complited(){
    filter = 'complited'
    borderStyle('complited')
	var complited = getBusinessCase()
	innerBusinessCase(complited)
}


function styleElement() {
	
	

	for (var i = 0;i < businessCase.length;i++){

		if( businessCase[i]['id'] == event.target.getAttribute('data')){
			businessCase[i]['completed'] = !businessCase[i]['completed'];
			buttonValue()
			if(businessCase[i]['completed'] == true){
				
			}

			else if (businessCase[i]['completed'] == false){
				buttonValue()
			}
		}	

	}

	var inner = getBusinessCase()
	removeElements()
	innerBusinessCase(inner)
}




function removeElement() {					/*кнопка удаления елементов */
	for (var i = 0;i < businessCase.length;i++){

		if( businessCase[i]['id'] == event.target.getAttribute('data-del')){
			businessCase.splice(i, 1);	
			leftItems()
			buttonValue()
		}
	}
	var inner = getBusinessCase()
	removeElements()
	innerBusinessCase(inner)
}


function getBusinessCase(){
	if (filter === 'active'){    			/*возврат нужного масива в переключатель */
		var activeElement = []
		for(var i = 0; i < businessCase.length;i++){
			if(businessCase[i]['completed'] == false){
        	activeElement.push(businessCase[i])
			}	
		}
		return  activeElement
	}
    else if (filter === 'complited'){
		var complitedElement = []
		for(var i = 0; i < businessCase.length;i++){
			if(businessCase[i]['completed'] == true){
        	complitedElement.push(businessCase[i])
			}	
		}
		return  complitedElement
	}

     else if (filter === 'all'){
		return businessCase
	}
}

	
function leftItems(){
var items = document.getElementById('spanFooter'); 			/*счетчик елементов массива */
return items.innerHTML = businessCase.length + ' items left'	
}


var clear = document.getElementById('inputFooter');
clear.addEventListener('click', clearComplited);

function clearComplited() {
			businessCase.sort (function(a, b) {					/*сортировка и удаление отмеченых елементов */
			return(b['completed'] - a['completed'])  	
			});
			var newArr = []
			for(var i = 0;i < businessCase.length;i++){
				if(businessCase[i]['completed'] == true){
					newArr.push(businessCase[i])
				}	
			}
			businessCase.splice(0, newArr.length);
			buttonValue()
innerBusinessCase(businessCase)	
}



var logoType = document.getElementById('logoImg');
logoType.addEventListener('click', logoEdit);

function logoEdit(){
	if(event.target.getAttribute('class') === "logoImg"){		/*смена стилизацыи всех елементов контента (кнопка header) */
		event.target.setAttribute("class", "newlogoImg")
			for(var i = 0;i < businessCase.length;i++){
			businessCase[i]['completed'] = true
			buttonValue()
			innerBusinessCase(businessCase)	
			}
	}
	else if(event.target.getAttribute('class') === "newlogoImg"){
		event.target.setAttribute("class", "logoImg")
			for(var i = 0;i < businessCase.length;i++){
			businessCase[i]['completed'] = false
			buttonValue()
			innerBusinessCase(businessCase)	
			}
	}
}


function buttonValue(){
  
var clear = document.getElementById('inputFooter');			/*активацыя value в button */
var sum = [];
	for (var i = 0;i < businessCase.length;i++){
		if(businessCase[i]['completed'] === true){
		sum.push(businessCase[i])
		}
	}
	if(sum.length > 0){
	return clear.value = 'Clear completed'	
	}
	else{return clear.value = ''}
}

function borderStyle(id){
	var elem = document.querySelectorAll('.ulFooter li')  /*активацыя border переключателя */

	for (var i = 0;i < elem.length;i++){
	elem[i].setAttribute('class', 'borderNone')
	}											
	document.getElementById(id).setAttribute('class', 'borderActive')					
}


/* */


												






