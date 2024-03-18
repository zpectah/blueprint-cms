import fs from 'fs';
import path from 'path';

function buildApi(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const files = fs.readdirSync(source);
  files.forEach(file => {
    const currentPath = path.join(source, file);
    const targetPath = path.join(target, file);

    const stat = fs.statSync(currentPath);

    if (stat.isDirectory()) {
      buildApi(currentPath, targetPath);
    } else {
      fs.copyFileSync(currentPath, targetPath);
    }
  });
}

const sourceFolder = './api';
const targetFolder = './dist/api';

buildApi(sourceFolder, targetFolder);
