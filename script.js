

var objects = [
 {value: 'dsfasd1', completed: false},
 {value: 'dsfasd2', completed: true},
 {value: 'dsfasd3', completed: true},
 {value: 'dsfasd4', completed: false},
 {value: 'dsfasd5', completed: false},
 {value: 'dsfasd5', completed: true},
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
  arri(objects)

  var val = document.getElementById('fix');
  val.onkeypress = go;

	
	
function go(event) {
  var code = event.keyCode;

  if (code == 13){
  var p =  document.createElement('p');
  p.classList.add('www');
  p.innerHTML = this.value;
  val.value = '';
  }

  document.body.appendChild(p);    

  var elem = document.getElementsByClassName('www');
  for (var i = 0;i < elem.length;i++) {
  elem[i].addEventListener('click', func);}
}

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
