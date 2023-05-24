const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");
const path = require("path");

const buildPath = path.join(__dirname, "build", "static", "js");
const filesToObfuscate = ["main.js", "chunk.js", "vendor.js"];
const obfuscateFile = (filePath) => {
	const code = fs.readFileSync(filePath, "utf8");
	const obfuscatedCode =
		JavaScriptObfuscator.obfuscate(code).getObfuscatedCode();
	fs.writeFileSync(filePath, obfuscatedCode);
};

filesToObfuscate.forEach((file) => {
	obfuscateFile(path.join(buildPath, file));
});
