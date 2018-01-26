constructor:feel,
init:function(options) {
	var uiClass = {
		actionbar: 'feel-actionbar',
		button: 'feel-button',
		content: 'feel-content'
	}
	var classes = options.uiClass;
	for(key in classes)uiClass[key] = classes[key];
	this.uiClass = uiClass;
	
	
	
	var actions = this._actions();
	var _actions = options.actions;
	for(key in _actions) actions[key] = _actions[key];
	this.actions = actions;
	
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
on:function(type,fn){
	this.data.on[type] = fn;
	return this;
},
run:function(){
	this.data = {};
	this.data.on = {}
	var tests = "😀,😃,😄,😁,😆,😅,😂,😊,😇,🙂,🙃,😉,😌,😍,😘,😗,😙,😚,😋,😜,😝,😛,🤑,🤗,🤓,😎,😏,😒,😞,😔,😟,😕,🙁,,😣,😖,😫,😩,😤,😠,😡,😶,😐,😑,😯,😦,😧,😮,😲,😵,😳,😱,😨,😰,😢,😥,😭,😓,😪,😴,🙄,🤔,😬,🤐".split(',');
	var actionbar = document.createElement('div')
	actionbar.className = this.uiClass.actionbar;
	var element = this.options.element;

	element.appendChild(actionbar)
	element.content = document.createElement('div')
	element.content.contentEditable = true;
	element.content.spellcheck= false
	element.content.setAttribute('placeholder',this.options.placeholder||'')
	
	
	element.content.className = this.uiClass.content;
	
	//var onChange = this.data.on.change;
	var onData = this.data.on;
	
	element.content.oninput = function(event){
		onData.change(event.target.innerHTML)
	}
	
	
	
	element.content.onkeydown = function(event){
		var keyCode = event.which;
		var isTab = keyCode==9;
		if(isTab){
			event.preventDefault()
		}
		
	}
	
	element.content.onkeyup = function(event){
		var keyCode = event.which;
		var isBack = keyCode==8;
		var isDel = keyCode==46;
		
		
		if(isBack || isDel){
			var _text = element.content.innerText;
			var isEmpty = _text.trim() =='';
			if(isEmpty) element.content.innerHTML = '';
			
		}
		
	}
	
	
	element.appendChild(element.content)
	var actions = this.actions;
	
	for (key in actions){
		var action = actions[key];
		
		const button = document.createElement('button')
		button.className = this.uiClass.button
		button.innerHTML = action.icon
		button.title = action.title
		button.onclick = action.result
		actionbar.appendChild(button)
	}

	element.content.onfocus = function(){
		onData.focus();
	};
	
	element.content.onblur = function(){
		onData.blur();
	};
	
	


  if (this.options.styleWithCSS) this.exec('styleWithCSS');
  
  
  
  if(this.options.defaultContent){
	  element.content.innerHTML = this.options.defaultContent;
  }
  
  

  return this
},