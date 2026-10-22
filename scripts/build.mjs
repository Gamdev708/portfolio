import {mkdir,copyFile,cp,rm,readdir,stat} from 'node:fs/promises';
const dist = new URL('../dist/',import.meta.url);
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
await copyFile(new URL('../index.html',import.meta.url),new URL('index.html',dist));
await cp(new URL('../assets/',import.meta.url),new URL('assets/',dist),{recursive:true});
async function checkAssetSizes(directory) {
  for (const entry of await readdir(directory, {withFileTypes:true})) {
    const path = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) await checkAssetSizes(path);
    else if ((await stat(path)).size > 25 * 1024 * 1024) {
      throw new Error(`Asset exceeds Cloudflare's 25 MiB limit: ${path.pathname}`);
    }
  }
}
await checkAssetSizes(dist);
console.log('Built static portfolio in dist/');
