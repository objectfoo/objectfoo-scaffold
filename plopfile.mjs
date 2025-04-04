export default function (plop) {
	// controller generator
	plop.setGenerator("scaffold", {
		description: "scaffold node-module",
		prompts: [
			{ type: "input", name: "name", message: "module name please" },
			{ type: "input", name: "description", message: "module description please" },
		],
		actions: [
			{
				type: "addMany",
				destination: "./",
				templateFile: "./plop-templates/scaffold",
			},
		],
	});
};
