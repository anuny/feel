constructor:feel,
init:function(options) {
	
	var classes = {
		actionbar: 'feel-actionbar',
		button: 'feel-button',
		content: 'feel-content'
	}
	options.classes = classes
	
	this.options = options;
	
	this.run();
	return this;
},
exec:function(command,value){
	document.execCommand(command, false, value)
},
preventTab:function(event){
	if (event.which === 9) event.preventDefault()
},
run:function(){
	
	var tests = "😀,😃,😄,😁,😆,😅,😂,😊,😇,🙂,🙃,😉,😌,😍,😘,😗,😙,😚,😋,😜,😝,😛,🤑,🤗,🤓,😎,😏,😒,😞,😔,😟,😕,🙁,,😣,😖,😫,😩,😤,😠,😡,😶,😐,😑,😯,😦,😧,😮,😲,😵,😳,😱,😨,😰,😢,😥,😭,😓,😪,😴,🙄,🤔,😬,🤐".split(',');
	console.log(tests)
	
	var actionbar = document.createElement('div')
	actionbar.className = this.options.classes.actionbar;
	var element = this.options.element;

	element.appendChild(actionbar)
	element.content = document.createElement('div')
	element.content.contentEditable = true;
	element.content.spellcheck= false
	
	
	element.content.className = this.options.classes.content
	var onChange = this.options.onChange;
	element.content.oninput = function(event){
		
		onChange(event.target.innerHTML)
	}
	element.content.onkeydown = this.preventTab
	element.appendChild(element.content)
	var actions = this.actions();
	
	for (key in actions){
		var action = actions[key];
		
		const button = document.createElement('button')
		button.className = this.options.classes.button
		button.innerHTML = action.icon
		button.title = action.title
		button.onclick = action.result
		actionbar.appendChild(button)
	}
	


  if (this.options.styleWithCSS) this.exec('styleWithCSS');
  actionbar = null;
  

  return this.options.element
},