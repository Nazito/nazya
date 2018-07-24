

var businessCase = [
  {value: 'dsfasd1', completed: false},
  {value: 'dsfasd2', completed: true},
  {value: 'dsfasd3', completed: true},
  {value: 'dsfasd4', completed: false},
  {value: 'dsfasd5', completed: false},
  {value: 'dsfasd5', completed: false},
]

var parentUl =  document.getElementById('parent');

function innerBusinessCase(caselist) {
  removeElements()

  for (var i = 0; i < caselist.length;i++) {
  var li = document.createElement('li');
  li.innerHTML = caselist[i]['value'];
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
  
  businessCase.push({value: this.value,completed: true})
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






























var use = document.getElementById('user');
use.addEventListener('click', addText);




function addText(){
	var text = prompt("name","")
	event.target.innerHTML = text;
for(var i = 0;i < use.length;i++){
	var tr = document.createElement('tr')
	for(var j = 0;j < 2;j++){
		var td = document.createElement('td');
		tr.appendChild(td)
	}
	var name = = document.getElementById('');
	table.appendChild(tr);
}
	
	

}



