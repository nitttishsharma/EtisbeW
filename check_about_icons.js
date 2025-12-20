import * as Lucide from 'lucide-react';

const iconsToCheck = [
    'Sparkles', 'Lightbulb', 'Cube', 'Rocket', 'Users', 'Shield',
    'Linkedin', 'Twitter', 'Github', 'Instagram',
    'Trophy', 'BarChart', 'Briefcase', 'Clock',
    'Star', 'Quote'
];

console.log('Checking About page icons...');
iconsToCheck.forEach(icon => {
    console.log(`${icon}: ${!!Lucide[icon]}`);
});
