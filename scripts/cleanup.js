#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Starting cleanup process...\n');

// Function to remove directory recursively
function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✅ Removed: ${dirPath}`);
    return true;
  }
  return false;
}

// Function to remove file
function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Removed: ${filePath}`);
    return true;
  }
  return false;
}

// Function to find and remove duplicate files (files with spaces or (1) in name)
function removeDuplicates(directory) {
  if (!fs.existsSync(directory)) return;
  
  const files = fs.readdirSync(directory, { withFileTypes: true });
  let removedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      removeDuplicates(fullPath); // Recursive for subdirectories
    } else if (file.name.includes('(1)') || file.name.includes(' ')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`✅ Removed duplicate: ${fullPath}`);
        removedCount++;
      } catch (error) {
        console.warn(`⚠️  Could not remove: ${fullPath}`, error.message);
      }
    }
  });
  
  return removedCount;
}

// Cleanup tasks
const tasks = [
  {
    name: 'Remove build cache directories',
    action: () => {
      let removed = 0;
      removed += removeDirectory('.next') ? 1 : 0;
      removed += removeDirectory('out') ? 1 : 0;
      removed += removeDirectory('node_modules/.cache') ? 1 : 0;
      return removed;
    }
  },
  {
    name: 'Remove placeholder files',
    action: () => {
      let removed = 0;
      const placeholderFiles = [
        'public/hero-poster-placeholder.txt',
        'public/hero-video-placeholder.txt',
        'public/ASSETS_NEEDED.md'
      ];
      
      placeholderFiles.forEach(file => {
        removed += removeFile(file) ? 1 : 0;
      });
      return removed;
    }
  },
  {
    name: 'Remove duplicate media files',
    action: () => {
      const duplicatesRemoved = removeDuplicates('public/grid_images');
      return duplicatesRemoved;
    }
  },
  {
    name: 'Remove temporary files',
    action: () => {
      let removed = 0;
      const tempPatterns = [
        '**/*.tmp',
        '**/*.temp',
        '**/.DS_Store',
        '**/Thumbs.db'
      ];
      
      // Simple implementation for common temp files
      const tempFiles = [
        '.DS_Store',
        'Thumbs.db',
        'public/.DS_Store',
        'public/Thumbs.db'
      ];
      
      tempFiles.forEach(file => {
        removed += removeFile(file) ? 1 : 0;
      });
      return removed;
    }
  }
];

// Execute cleanup tasks
let totalRemoved = 0;
tasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.name}...`);
  const removed = task.action();
  totalRemoved += removed;
  console.log(`   📊 Items processed: ${removed}\n`);
});

// Summary
console.log('🎉 Cleanup completed!');
console.log(`📊 Total items removed: ${totalRemoved}`);
console.log('\n💡 Run "npm run build" to create a fresh optimized build.');
