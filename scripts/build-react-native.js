#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, readdirSync, statSync, rmSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const reactNativeDistDir = join(rootDir, 'dist', 'react-native');
rmSync(reactNativeDistDir, { recursive: true, force: true });
mkdirSync(reactNativeDistDir, { recursive: true });

execSync('tsc -p tsconfig.react-native.json', { cwd: rootDir, stdio: 'inherit' });

const sourceReactNativeDir = join(rootDir, 'dist', 'react-native', 'react-native');
const sourceSharedDir = join(rootDir, 'dist', 'react-native', 'shared');

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

// Copy react-native files to root of react-native dist
if (statSync(sourceReactNativeDir, { throwIfNoEntry: false })) {
  copyDirectory(sourceReactNativeDir, reactNativeDistDir);
}

// Copy shared files to root of react-native dist
if (statSync(sourceSharedDir, { throwIfNoEntry: false })) {
  copyDirectory(sourceSharedDir, reactNativeDistDir);
}

rmSync(join(reactNativeDistDir, 'react-native'), { recursive: true, force: true });
rmSync(join(reactNativeDistDir, 'shared'), { recursive: true, force: true });

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

fixImportPaths(reactNativeDistDir);

console.log('React Native build completed successfully!'); 