export default function (plop) {
	// controller generator
	plop.setGenerator("changelog", {
		description: "scaffold node-module",
		prompts: [
			{ type: "input", name: "name", message: "module name please" },
			{ type: "input", name: "description", message: "module description please" },
		],
		actions: [{ type: "add", path: "./CHANGELOG.md", templateFile: "./plop-templates/changelog.md.hbs" }],
	});
};
