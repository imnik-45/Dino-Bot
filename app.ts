import { serve } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket,acceptable } from "https://deno.land/std/ws/mod.ts";
import {chatConnection} from './ws/chatroom.ts'

const server = serve({ port: 3000 });
console.log("http://localhost:3000/");

for await(const req of server){
    //serve index

    if(req.url === '/'){
        req.respond({
            status:200,
            body:await Deno.open('./public/index.html')
        })
    }
//accept websockts

  if(req.url === '/ws'){
      if(acceptable(req)){
          acceptWebSocket({
              conn: req.conn,
              bufReader: req.r,
              bufWriter: req.w,
              headers: req.headers,
      })
      .then(chatConnection)
  }  
}
}