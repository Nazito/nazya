

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

	var active = []
	for(var i = 0;i < businessCase.length;i++){
		if(businessCase[i]['completed'] == false){
         active.push(businessCase[i])
         innerBusinessCase(active) 
		}
	}
}


var complitedElement = document.getElementById('complited');
complitedElement.addEventListener('click', complited);

function complited(){
    filter = 'complited'

	var complited = []
	for(var i = 0;i < businessCase.length;i++){
		if(businessCase[i]['completed'] == true){
         complited.push(businessCase[i])
         innerBusinessCase(complited)
		}
	}
}


function styleElement() {
	for (var i = 0;i < businessCase.length;i++){
		if( businessCase[i]['id'] == event.target.getAttribute('data')){
			businessCase[i]['completed'] = true
		}
	}
   
   innerBusinessCase(businessCase)

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




console.log(getBusinessCase())




















var use = document.getElementById('user');
use.addEventListener('click', addText);




function addText(){
	var text = prompt("name","")
  event.target.innerHTML = text;
}


var adic = document.getElementById('add');
adic.addEventListener('click', addef);


function addef(){
	var tr = document.createElement('tr')
	for(var i = 0;i < 2;i++){
  var td = document.createElement('td');
  if (i === 0) {
  	var name = document.getElementById('name');
    td.innerHTML = name.value
  }else if(i === 1){
  	var secondName = document.getElementById('secondName');
  	td.innerHTML = secondName.value
  }
	
	tr.appendChild(td)}	
	use.appendChild(tr);




}
var forms = document.forms;
var elements = document.forms.elements;
//var rezult = 0



///for (var i = 0;i < forms.length;i++){
 ///  rezult += forms[i]
	//for (var j = 0;j < elements.length;i++){
//
	///	rezult += elements[j]
	//}
  // rezult += forms[i]
////}
///alert(rezult)