import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
const dist = new URL('../dist/',import.meta.url);
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
await copyFile(new URL('../index.html',import.meta.url),new URL('index.html',dist));
await cp(new URL('../assets/',import.meta.url),new URL('assets/',dist),{recursive:true});
console.log('Built static portfolio in dist/');
