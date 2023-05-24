const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, 'build', 'static', 'js');

// Get all JavaScript files in the build directory
const filesToObfuscate = fs.readdirSync(buildPath).filter(file => file.endsWith('.js'));

// Obfuscate each JavaScript file
filesToObfuscate.forEach(file => {
  const filePath = path.join(buildPath, file);
  const code = fs.readFileSync(filePath, 'utf8');
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(code).getObfuscatedCode();
  fs.writeFileSync(filePath, obfuscatedCode);
});