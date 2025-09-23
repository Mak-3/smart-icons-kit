#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, readdirSync, statSync, rmSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const reactDistDir = join(rootDir, 'dist', 'react');
rmSync(reactDistDir, { recursive: true, force: true });
mkdirSync(reactDistDir, { recursive: true });

execSync('tsc -p tsconfig.react.json', { cwd: rootDir, stdio: 'inherit' });

const sourceReactDir = join(rootDir, 'dist', 'react', 'react');
const sourceSharedDir = join(rootDir, 'dist', 'react', 'shared');

function copyDirectory(src, dest) {
  if (!statSync(src, { throwIfNoEntry: false })) return;
  
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    
    if (statSync(srcPath).isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Copy react files to root of react dist
if (statSync(sourceReactDir, { throwIfNoEntry: false })) {
  copyDirectory(sourceReactDir, reactDistDir);
}

// Copy shared files to root of react dist
if (statSync(sourceSharedDir, { throwIfNoEntry: false })) {
  copyDirectory(sourceSharedDir, reactDistDir);
}

rmSync(join(reactDistDir, 'react'), { recursive: true, force: true });
rmSync(join(reactDistDir, 'shared'), { recursive: true, force: true });

function fixImportPaths(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      fixImportPaths(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.d.ts')) {
      let content = readFileSync(filePath, 'utf8');
      content = content.replace(/from\s+["']\.\.\/shared\/([^"']+)["']/g, 'from "./$1"');
      content = content.replace(/import\s+["']\.\.\/shared\/([^"']+)["']/g, 'import "./$1"');
      content = content.replace(/from\s+"\.\.\/shared\/([^"]+)"/g, 'from "./$1"');
      content = content.replace(/import\s+"\.\.\/shared\/([^"]+)"/g, 'import "./$1"');
      writeFileSync(filePath, content);
    }
  }
}

fixImportPaths(reactDistDir);

console.log('React build completed successfully!'); 