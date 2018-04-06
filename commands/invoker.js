class Invoker {
	constructor() {
		this.queue = [];
		this.timer = null;
	}

	addCommand(command) {
		this.queue.push(command);
		if (this.timer === null) {
			this.timer = window.setInterval(this.runNextCommand.bind(this), 5000);
		}
	}

	runNextCommand() {
		console.log(this.queue);
		if (this.queue.length > 0) {
			var command = this.queue.shift();
			command.execute();
		}
		else {
			window.clearInterval(this.timer);
			this.timer = null;
		}
	}
}