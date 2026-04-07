const fs = require('fs');
const path = '/home/jul/code/openclaw-studio-v2/src/components/AppNav.tsx';

try {
  let content = fs.readFileSync(path, 'utf8');
  
  if (content.includes('href="/paperclip"')) {
    console.log('Nav already patched');
    process.exit(0);
  }

  // Look for the links array
  const pattern1 = '{ href: "/watcher", label: "Watcher", icon: EyeIcon },';
  const pattern2 = '{ href: "/jobs", label: "Crons", icon: ClockIcon },';
  
  if (content.includes(pattern2)) {
    content = content.replace(
      pattern2, 
      pattern2 + '\n  { href: "/paperclip", label: "Paperclip", icon: BriefcaseIcon },'
    );
    
    // Add import if needed
    if (!content.includes('BriefcaseIcon')) {
      content = content.replace(
        /import \{(.*?)\} from '@heroicons\/react\/24\/outline'/, 
        "import {$1, BriefcaseIcon} from '@heroicons/react/24/outline'"
      );
    }
    
    fs.writeFileSync(path, content);
    console.log('Successfully patched AppNav.tsx');
  } else {
    console.log('Could not find the exact pattern. Here is a snippet of the file to help debug:');
    const lines = content.split('\n');
    const linksIndex = lines.findIndex(l => l.includes('links = [') || l.includes('navigation = ['));
    if (linksIndex !== -1) {
      console.log(lines.slice(linksIndex, linksIndex + 10).join('\n'));
    }
  }
} catch (e) {
  console.error('Error patching nav:', e.message);
}
