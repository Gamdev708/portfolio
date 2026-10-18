import {createServer} from 'node:http';
import {stat} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf','.mp4':'video/mp4'};
createServer(async(req,res)=>{
  try {
    const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=resolve(root,'.'+path);
    if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end();}
    if((await stat(file)).isDirectory()) file=resolve(file,'index.html');
    const {size}=await stat(file);
    const headers={'Content-Type':types[extname(file)]||'application/octet-stream','Accept-Ranges':'bytes'};
    const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    let start=0,end=size-1;
    if(range){start=Number(range[1]);end=range[2]?Math.min(Number(range[2]),size-1):size-1;
      if(start>=size||start>end){res.writeHead(416,{'Content-Range':`bytes */${size}`});return res.end();}
      headers['Content-Range']=`bytes ${start}-${end}/${size}`;
    }
    headers['Content-Length']=end-start+1;
    res.writeHead(range?206:200,headers);
    if(req.method==='HEAD')return res.end();
    const stream=createReadStream(file,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  } catch {res.writeHead(404);res.end('Not found');}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
