const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const docxPath = path.join(__dirname, 'сопроведы.docx');
const tmpDir = path.join(__dirname, '_tmp_docx');

// Extract docx (it's a zip)
try { fs.rmSync(tmpDir, { recursive: true }); } catch(e) {}
fs.mkdirSync(tmpDir, { recursive: true });

execSync(`powershell -Command "Expand-Archive -Path '${docxPath}' -DestinationPath '${tmpDir}' -Force"`);

// Read document.xml
const docXml = fs.readFileSync(path.join(tmpDir, 'word', 'document.xml'), 'utf-8');

// Extract all text
const texts = [];
const regex = /<w:t[^>]*>([^<]*)<\/w:t>/g;
let match;
while ((match = regex.exec(docXml)) !== null) {
  texts.push(match[1]);
}

const fullText = texts.join(' ');
console.log(fullText);

// Cleanup
try { fs.rmSync(tmpDir, { recursive: true }); } catch(e) {}
