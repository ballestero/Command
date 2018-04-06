class AddLamp {
	constructor() {
        
        this.container = document.createElement('div');
		document.body.appendChild(this.container);
        this.container.className = 'container';
        
        this.addLamp = document.createElement("button");
		this.container.appendChild(this.addLamp);
	    this.addLamp.innerHTML = 'Add Lamp';
	    this.addLamp.className = 'addLamp';
		this.addLamp.onclick = this.createLamp.bind(this);

		this.counter = 0;
		this.ypos = 10;

		this.commandsUI = new CommandsUI();
	}

	createLamp() {
		this.counter++;
		var identifier = 'Lamp-' + this.counter;
		var lamp = new Lamp(identifier, this.commandsUI, this.ypos);
		this.ypos += 80;
	}

	
}