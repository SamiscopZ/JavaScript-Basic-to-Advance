// Map methods

const pcComponents = new Map();

pcComponents.set('Processor', 'Ryzen');
pcComponents.set('Motherboard', 'Asus');
pcComponents.set('SSD', 'Samsung');
pcComponents.set('Power Supply', 'PC Power'); // To add new values using Maps methods.

console.log(pcComponents.get('SSD')); // To see value of a key.

console.log(pcComponents.has('sd'));
