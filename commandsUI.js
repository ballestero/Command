class CommandsUI {
	constructor(lamp) {
		console.log('Commands UI created!');
		this.lamp=null;

		this.container = document.createElement('div');
		document.body.appendChild(this.container);
		this.container.className = 'container2';

		this.turnOnBtn = document.createElement('button');
		this.container.appendChild(this.turnOnBtn);
		this.turnOnBtn.innerHTML = 'Turn ON';
		this.turnOnBtn.className = 'turnOnBtn';
		this.turnOnBtn.onclick = this.turnOn.bind(this);

		this.turnOffBtn = document.createElement('button');
		this.container.appendChild(this.turnOffBtn);
		this.turnOffBtn.innerHTML = 'Turn OFF';
		this.turnOffBtn.className = 'turnOffBtn';
		this.turnOffBtn.onclick = this.turnOff.bind(this);
	}

	lampSelected(lamp){
		this.lamp = lamp;
		console.log(this.lamp);
		//this.label.innerHTML = lamp.identifier;
	
	}
	
	turnOn() {
		//this.lamp.turnOn();
		console.log(this);

		this.lamp.addCommand(new TurnOnCommand(this.lamp));
	}

	turnOff() {
		//this.lamp.turnOff();
		this.lamp.addCommand(new TurnOffCommand(this.lamp));
	}

	


}