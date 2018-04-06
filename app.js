window.addEventListener('load', init, false);

function init() {
    /*console.log('init');
    var container = document.createElement('div');
		document.body.appendChild(container);
        container.className = 'container';
        
    var addLamp = document.createElement("button");
		container.appendChild(addLamp);
	    addLamp.innerHTML = 'Add Lamp';
	    addLamp.className = 'addLamp';
		//this.addLamp.onclick = this.addLamp.bind(this
    var lamp = new Lamp();*/
    var lamp = new AddLamp();
    var commandsUI = new CommandsUI(lamp);
}