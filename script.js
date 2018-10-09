var businessCases = []
var id = 0;
var businessCasesList =  document.getElementById('parent');
var container =  document.getElementById('container');
var filter = 'all'

initializaApplication() 

function initializaApplication(){

  businessCasesList.addEventListener('click', toggleBusinessCaseCompleted);
  businessCasesList.addEventListener('click', removeBusinessCase);

  container.appendChild(createFooter())

  showBusinessCases(businessCases)

}

function showBusinessCases(caselist) {
  removeElements()
  caselist.forEach(function(businessCase) {
    var businessCaseElement = createBusinessCaseElement(businessCase)
    businessCasesList.appendChild(businessCaseElement);
  })
  footerActive()
  leftItems()
  // buttonValue()
}
  
var addBusines = document.getElementById('input');
addBusines.onkeypress = addBusinessCase;
	
function addBusinessCase(event) {
  var code = event.keyCode;
  	if (code == 13){
    id = id + 1; 
    businessCases.push({value: this.value,completed: false, id: id})
    addBusines.value = '';
    showBusinessCases(businessCases)
    }
 }
 
function removeElements(){
  var del = document.querySelectorAll('.businessCase');
  for (var i = 0;i < del.length;i++){
    businessCasesList.removeChild(del[i]);
  }
}

var allElement = document.getElementById('all');
allElement.addEventListener('click', showAll);

function showAll(){
    filter = 'all'
    setSelectedFooterFilterButton('all')
    showBusinessCases(businessCases)
}

var activeElement = document.getElementById('active');
activeElement.addEventListener('click', showActive);

function showActive(){
  filter = 'active'

  setSelectedFooterFilterButton('active')
	var active = getBusinessCaseByFilter()
  showBusinessCases(active)
}

var complitedElement = document.getElementById('complited');
complitedElement.addEventListener('click', complited);

function showComplited(){
  filter = 'complited'
  setSelectedFooterFilterButton('complited')
	var complited = getBusinessCaseByFilter()
	showBusinessCases(complited)
}

function toggleBusinessCaseCompleted() {
	for (var i = 0;i < businessCases.length;i++){

		if( businessCases[i]['id'] == event.target.getAttribute('data')){
			businessCases[i]['completed'] = !businessCases[i]['completed'];
			buttonValue()
		}	
	}

	var inner = getBusinessCaseByFilter()
	removeElements()
	showBusinessCases(inner)
}

function removeBusinessCase() {					/*кнопка удаления елементов */
	for (var i = 0;i < businessCases.length;i++){

		if( businessCases[i]['id'] == event.target.getAttribute('data-del')){
			businessCases.splice(i, 1);	
		}
	}
	var inner = getBusinessCaseByFilter()
	showBusinessCases(inner)
}


function getBusinessCaseByFilter(){
	if (filter === 'active'){    			/*возврат нужного масива в переключатель */
		var activeElement = []
		for(var i = 0; i < businessCases.length;i++){
			if(businessCases[i]['completed'] == false){
        	activeElement.push(businessCases[i])
			}	
		}
		return  activeElement
	}
    else if (filter === 'complited'){
		var complitedElement = []
		for(var i = 0; i < businessCases.length;i++){
			if(businessCases[i]['completed'] == true){
        	complitedElement.push(businessCases[i])
			}	
		}
		return  complitedElement
	}

     else if (filter === 'all'){
		return businessCases
	}
}

	
function leftItems(){
  var counter = document.getElementById('spanFooter'); 			/*счетчик елементов массива */
  if(counter) {
    counter.innerHTML = "<strong>" + businessCases.length + ' items left' + "</strong>"	
  }
}


var clear = document.getElementById('inputFooter');
clear.addEventListener('click', clearComplited);

function clearComplited() {
  businessCases = businessCases.filter(function(businessCase){
    return !businessCase['completed']
  })
	buttonValue()
  showBusinessCases(businessCases)	
}



var logoType = document.getElementById('logoImg');
logoType.addEventListener('click', logoEdit);

function logoEdit(){
	if(event.target.getAttribute('class') === "logoImg"){		/*смена стилизацыи всех елементов контента (кнопка header) */
		event.target.setAttribute("class", "newlogoImg")
			for(var i = 0;i < businessCases.length;i++){
			businessCases[i]['completed'] = true
			buttonValue()
			showBusinessCases(businessCases)	
			}
	}
	else if(event.target.getAttribute('class') === "newlogoImg"){
		event.target.setAttribute("class", "logoImg")
			for(var i = 0;i < businessCases.length;i++){
			businessCases[i]['completed'] = false
			buttonValue()
			showBusinessCases(businessCases)	
			}
	}
}


function buttonValue(){
  
var clear = document.getElementById('inputFooter');			/*активацыя value в button */
var sum = [];
	for (var i = 0;i < businessCases.length;i++){
		if(businessCases[i]['completed'] === true){
		sum.push(businessCases[i])
		}
	}
	if(sum.length > 0){
	return clear.value = 'Clear completed'	
	}
	else{return clear.value = ''}
}

function setSelectedFooterFilterButton(id){
	var elem = document.querySelectorAll('.footerTools li')  /*активацыя border переключателя */

	for (var i = 0;i < elem.length;i++){
	elem[i].classList.remove("selected");
	}											
	document.getElementById(id).classList.add('selected')					
}

function footerActive(){
  var footer = document.getElementById('footer');	
  if (businessCases.length && !footer.classList.contains('active')) {
    footer.classList.add('active')
  } else if (!businessCases.length && footer.classList.contains('active')) {
    footer.classList.remove('active')
  }
} 


function createBusinessCaseElement(businessCase) {
  var businessCaseElement = document.createElement('li');
  businessCaseElement.classList.add('businessCase');
  

  var logo = document.createElement('div');
  logo.setAttribute('class', 'logo')
  
  var logoImg = document.createElement('img');
  logoImg.setAttribute('data', businessCase['id'])
  logoImg.classList.add('businessCaseLogoImg')
  logo.appendChild(logoImg);

  var content = document.createElement('div');
  content.setAttribute("class", "businessCaseContent")
  content.innerHTML = businessCase['value'];

  var remove = document.createElement('div');
  remove.setAttribute('class', 'del')
  remove.setAttribute('data-del', businessCase['id'])

  var removeIcon = document.createElement('img');
  remove.appendChild(removeIcon);

  businessCaseElement.appendChild(logo);
  businessCaseElement.appendChild(content);
  businessCaseElement.appendChild(remove);
  if (businessCase['completed'] == true ) {
    businessCaseElement.classList.add('completed');
  }
  return businessCaseElement
}

function createFooterFilterButton(text, type, selected) {
  var button = document.createElement('li');
  button.innerHTML = text
  button.setAttribute("id", type)
  button.classList.add("footerFilterButton")
  if (selected) {
    button.classList.add("selected")
  }
  return button
}

function createFooter() {
  var footer = document.createElement('div');
  footer.setAttribute("class", "footer")
  footer.setAttribute("id", "footer")
  footer.style.height = '40px'

  var span = document.createElement('span');
  span.innerHTML = '0 items left'
  span.setAttribute("class", "spanFooter")
  span.setAttribute("id", "spanFooter")

  var ul = document.createElement('ul');
  ul.setAttribute("class", "footerTools")

  var allFilterButton = createFooterFilterButton('All', "all", true);
  var activeFilterButton = createFooterFilterButton('Ative', 'active', false);
  var complitedFilterButton = createFooterFilterButton('Completed', 'complited', false);
 

  var input = document.createElement('input');
  input.setAttribute("type", "button")
  input.setAttribute("value", "")
  input.setAttribute("class", "inputFooter")
  input.setAttribute("id", "inputFooter")

  footer.appendChild(input);
  ul.appendChild(complitedFilterButton);
  ul.appendChild(activeFilterButton);
  ul.appendChild(allFilterButton);
  footer.appendChild(ul);
  footer.appendChild(span);

  return footer
}
