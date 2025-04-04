export default function (plop) {
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
				skipIfExists: true,
				base: "./plop-templates/scaffold/",
				templateFiles: "./plop-templates/scaffold/**/*",
				abortOnFail: true,
			},
		],
	});
};

