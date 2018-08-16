

var businessCase = [{value: '11111111111111',completed: false, id: 222},
                    {value: '333333333333333',completed: false, id: 88},
                    {value: '44444444444444',completed: true, id: 55},
                    {value: '55555555555555',completed: true, id: 66},
                    {value: '66666666666666',completed: false, id: 77}]
var id = 0;
var parentUl =  document.getElementById('parent');
parentUl.addEventListener('click', styleElement);
parentUl.addEventListener('click', removeElement);
innerBusinessCase(businessCase)
var filter = 'all'
 
   




function innerBusinessCase(caselist) {
    removeElements()

    for (var i = 0; i < caselist.length;i++) {

    var li = document.createElement('li');
    

    var div = document.createElement('div');
    div.setAttribute('class', 'logo')
    
    var img = document.createElement('img');
    img.setAttribute('src', 'images/todo.png')
    img.setAttribute('data', caselist[i]['id'])
    div.appendChild(img);






    var input = document.createElement('input');
    input.setAttribute("class", "edit")
    input.value = caselist[i]['value'];
    




    var remove = document.createElement('div');
    remove.setAttribute('class', 'del')

    var del = document.createElement('img');
    del.setAttribute('src', 'images/del.png')
    del.setAttribute('data-del', caselist[i]['id'])

    remove.appendChild(del)



    li.appendChild(div);
    li.appendChild(input);
    li.appendChild(remove);
    
    parentUl.appendChild(li);
    li.classList.add('elements');

  		if (caselist[i]['completed'] == true ) {
  		input.style.textDecoration = 'line-through';
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
    }
 }
 
function removeElements(){
 
    var del = document.querySelectorAll('.elements');
  	for (var i = 0;i < del.length;i++){
  	parentUl.removeChild(del[i]);
  	}
}

var allElement = document.getElementById('all');
allElement.addEventListener('click', all);

function all(){
    filter = 'all'
	
    innerBusinessCase(businessCase)
}



var activeElement = document.getElementById('active');
activeElement.addEventListener('click', active);

function active(){
    filter = 'active'

	var active = getBusinessCase()
    innerBusinessCase(active)
}


var complitedElement = document.getElementById('complited');
complitedElement.addEventListener('click', complited);

function complited(){
    filter = 'complited'

	var complited = getBusinessCase()
	innerBusinessCase(complited)
}


function styleElement() {
	
	event.target.setAttribute('src', 'images/del.png')

	for (var i = 0;i < businessCase.length;i++){

		if( businessCase[i]['id'] == event.target.getAttribute('data')){
			businessCase[i]['completed'] = !businessCase[i]['completed'];

		}

	}

	var inner = getBusinessCase()
	removeElements()
	innerBusinessCase(inner)
}




function removeElement() {
	

	for (var i = 0;i < businessCase.length;i++){

		if( businessCase[i]['id'] == event.target.getAttribute('data-del')){
			businessCase.splice(i, 1);	
		}
	}
	var inner = getBusinessCase()
	removeElements()
	innerBusinessCase(inner)
}


function getBusinessCase(){
	if (filter === 'active'){
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






















var inpute = document.getElementById('num');
inpute.addEventListener('blur', sum);



function sum(){
var str = this.value
var arr = str.split('.')
arr.reverse();
this.value = arr.join('-')

	
}

	



