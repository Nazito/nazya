

var objects = [
 {value: 'dsfasd1', completed: false},
 {value: 'dsfasd2', completed: true},
 {value: 'dsfasd3', completed: true},
 {value: 'dsfasd4', completed: false},
 {value: 'dsfasd5', completed: false},
 {value: 'dsfasd5', completed: false},
]

var parent =  document.getElementById('parent');

function arri(num) {
 for (var i = 0; i < num.length;i++) {
  var li = document.createElement('li');
  li.innerHTML = num[i]['value'];
  parent.appendChild(li);

  if (num[i]['completed'] == true ) {
  li.style.textDecoration = 'line-through';
  li.classList.add('true');
  }
 }
}
  



  var val = document.getElementById('fix');
  val.onkeypress = go;

	
	
function go(event) {
  var code = event.keyCode;

  if (code == 13){
  var li =  document.createElement('li');
  li.classList.add('true');
  li = this.value;
  objects.push({value: li,completed: true})
  val.value = '';
  arri(objects)
  }
  




   parent.appendChild(li);   

  var elem = document.getElementsByClassName('www');
  for (var i = 0;i < elem.length;i++) {
  elem[i].addEventListener('click', func);}
}

alert(objects)
function func(){
  this.style.color = 'red'
  this.classList.add('ppp')
}
  var rem = document.getElementById('rem');
  rem.addEventListener('click', deli);

function deli(){
	var del = document.querySelectorAll('.www.ppp');
for (var i = 0;i < del.length;i++){
	this.parentElement.removeChild(del[i]);
}
}


var use = document.getElementById('user');
use.addEventListener('click', addText);




function addText(){
	var text = prompt("name","")
	event.target.innerHTML = text;
	var tr = document.createElement('tr');
	tr.classList.add('www')
	use.appendChild(tr);
	var tr = document.getElementsByClassName('www');
	for (var i = 0;i<3;i++){
		var td = document.createElement('td');
		tr[i].appendChild(td);
	}
	

}

var button = document.getElementById('createLi');
button.addEventListener('click', creatElem);
function creatElem(){
		var li = document.createElement('li');
	li.innerHTML = 'новая li';
	ul.appendChild(li);
}

