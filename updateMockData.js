const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'src/components/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

content = content.replace(
  /(\s+features: \[[^\]]+\](?:,\s+image: "[^"]+")?(?:,\s+propImg: \[\s*\{\s*(?:[^}]+)\s*\}\s*\])?),/g,
  (match) => {
    const isLagos = Math.random() > 0.5 ? 'lagos' : 'kogi';
    const isDuplex = Math.random() > 0.5 ? 'duplex' : '2-storey';
    const type = 'buy';

    return (
      match +
      `\n    propertyType: "${isDuplex}",\n    location: "${isLagos}",\n    type: "${type}",`
    );
  },
);

content = content.replace(
  /address: "12, Adeniran Street, Ikoyi, Lagos",([\s\S]*?)location: "[^"]+",/g,
  'address: "12, Adeniran Street, Ikoyi, Lagos",$1location: "lagos",',
);
content = content.replace(
  /address: "15, Banana Island, Lagos",([\s\S]*?)location: "[^"]+",/g,
  'address: "15, Banana Island, Lagos",$1location: "lagos",',
);
content = content.replace(
  /address: "8, Adeola Odeku, VI, Lagos",([\s\S]*?)location: "[^"]+",/g,
  'address: "8, Adeola Odeku, VI, Lagos",$1location: "lagos",',
);

fs.writeFileSync(mockDataPath, content);
console.log('mockData properties updated successfully');
