

var businessCase = []
var id = 0;
var parentUl =  document.getElementById('parent');
innerBusinessCase(businessCase)


   




function innerBusinessCase(caselist) {
  removeElements()

  for (var i = 0; i < caselist.length;i++) {
  var li = document.createElement('li');
  li.innerHTML = caselist[i]['value'];
  li.setAttribute('data', i)
  li.addEventListener('click', addSign);



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


var act = document.getElementById('active');
act.addEventListener('click', active);

function active(){
	var active = []
	for(var i = 0;i < businessCase.length;i++){
		if(businessCase[i]['completed'] == false){
         active.push(businessCase[i])
         innerBusinessCase(active)
		}
	}
}


var comp = document.getElementById('complited');
comp.addEventListener('click', complited);

function complited(){
	var complited = []
	for(var i = 0;i < businessCase.length;i++){
		if(businessCase[i]['completed'] == true){
         complited.push(businessCase[i])
         innerBusinessCase(complited)
		}
	}
}


function addSign() {
	for (var i = 0;i < businessCase.length;i++){
		if( i == this.getAttribute('data')){
			businessCase[i]['completed'] = true
		}
	}

   innerBusinessCase(businessCase)
  }




























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
  if (i === 1) {
    td.innerHTML = "sadfgsg"
  }
	td.classList.add(i + 'elements');
	tr.appendChild(td)}	
	use.appendChild(tr);




}