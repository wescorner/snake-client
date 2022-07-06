const setupInput = function () {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on("data", handleUserInput);
	return stdin;
};

const handleUserInput = function (data) {
	// process.on("SIGINT", () => process.exit());
	if (data == "\u0003") process.exit();
	// process.stdout.write(data);
	// process.exit();
};

setupInput();

module.exports = { setupInput };
