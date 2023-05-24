import { obfuscate } from "javascript-obfuscator";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const buildPath = join(__dirname, "build", "static", "js");
const filesToObfuscate = ["main.js", "chunk.js", "vendor.js"];

const obfuscateFile = (filePath) => {
	const code = readFileSync(filePath, "utf8");
	const obfuscatedCode = obfuscate(code).getObfuscatedCode();
	writeFileSync(filePath, obfuscatedCode);
};

filesToObfuscate.forEach((file) => {
	obfuscateFile(join(buildPath, file));
});
