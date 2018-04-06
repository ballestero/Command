class Lamp {
	constructor(identifier, commandUI, ypos) {
		console.log('Lamp created');
		this.identifier = identifier;
		this.commandUI = commandUI;

		this.container = document.createElement('div');
		document.body.appendChild(this.container);
		this.container.className = 'lamp';
		this.container.onclick = this.select.bind(this);

		this.invoker = new Invoker();
	}

	select(){
		this.commandUI.lampSelected(this);
	}

	turnOn() {
		this.container.classList.remove('lamp-off');
		this.container.classList.add('lamp-on');
	}

	turnOff() {
		this.container.classList.add('lamp-off');
		this.container.classList.remove('lamp-on');
	}

	addCommand(command) {
		this.invoker.addCommand(command);
	}
}