import fs from 'fs';
import path from 'path';

function copyFolder(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const currentPath = path.join(source, file);
    const targetPath = path.join(target, file);
    const stat = fs.statSync(currentPath);

    if (stat.isDirectory()) {
      copyFolder(currentPath, targetPath);
    } else {
      fs.copyFileSync(currentPath, targetPath);
    }
  });
}

function replaceApiEnv(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const content = `<?php const ENV = 'production';`;
  const fileName = `env.php`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} successfully created at ${filePath}`);
}

function buildApiCallback(source, target) {
  copyFolder(source, target);
  replaceApiEnv(target);
}

function buildApi() {
  const sourceFolder = './api';
  const targetFolder = './dist/api';

  if (fs.existsSync(targetFolder)) {
    fs.rm(targetFolder, () => buildApiCallback(sourceFolder, targetFolder));
  } else {
    buildApiCallback(sourceFolder, targetFolder);
  }
}

buildApi();
