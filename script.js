

var businessCase = [{value: '11111111111111',completed: false, id: 222},
                    {value: '333333333333333',completed: false, id: 88},
                    {value: '44444444444444',completed: true, id: 55},
                    {value: '55555555555555',completed: true, id: 66},
                    {value: '66666666666666',completed: false, id: 77}]
var id = 0;
var parentUl =  document.getElementById('parent');
parentUl.addEventListener('click', styleElement);
innerBusinessCase(businessCase)
var filter = 'all'
 
   




function innerBusinessCase(caselist) {
    removeElements()

    for (var i = 0; i < caselist.length;i++) {

    var li = document.createElement('li');
    li.innerHTML = caselist[i]['value'];
    li.setAttribute('data', caselist[i]['id'])

    parentUl.appendChild(li);
    li.classList.add('elements');

  		if (caselist[i]['completed'] == true ) {
  		li.style.textDecoration = 'line-through';
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
	
	var inner = getBusinessCase()
	for (var i = 0;i < inner.length;i++){

		if( inner[i]['id'] == event.target.getAttribute('data')){
			inner[i]['completed'] = !inner[i]['completed'];
			removeElements()
			innerBusinessCase(inner)
				
		}
	}
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






















var cklack = document.getElementById('suma');
cklack.addEventListener('click', sum);



function sum(){
var num = document.getElementsByClassName('num');
var rez = 0
var rezult = document.getElementById('rezult');
		for(var i = 0;i < num.length;i++){
		  rez += Number(num[i].value)
		}
	rezult.innerHTML = rez
}


