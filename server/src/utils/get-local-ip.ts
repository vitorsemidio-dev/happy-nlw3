import os from 'os';

const interfaces = os.networkInterfaces();
let addresses: any[] = [];

Object.keys(interfaces).forEach((interfaceName) => {
  const interfaceInfo: any = interfaces[interfaceName];

  interfaceInfo.forEach((info: any) => {
    if (info.family === 'IPv4' && !info.internal) {
      addresses.push(info.address);
    }
  });
});

export function getLocalIp() {
  return addresses[0];
}
