class TurnOffCommand extends Command {
	constructor(lamp) {
		super(lamp);
	}

	execute() {
		this.lamp.turnOff();
	}
}