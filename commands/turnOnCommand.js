class TurnOnCommand extends Command {
	constructor(lamp) {
		super(lamp);
	}

	execute() {
		this.lamp.turnOn();
	}
}