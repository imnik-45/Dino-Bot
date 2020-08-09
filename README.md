# Dino-Bot
A ChatBot built using Deno and Websockets.

## Deno ?
<p>Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.It's built on V8, Rust, and Tokio.</p>

## Feature Highlights

   - Secure by default. No file, network, or environment access (unless explicitly enabled).
   - Supports TypeScript out of the box.
   - Ships a single executable (deno).
   - Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
   - Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.
   - Scripts can be bundled into a single JavaScript file.


## WebSockets

   - bi-directional communication between client and Server.
   - Allows for real time data flow without refresging the page.
   - WebSocket was designed as a transport layer protocol, to be TCP for the Web.
   - WebSocket, as a communications protocol can be used in many environments and programming languages,such as JavaScript, Java, iOS, Android, .NET and C.

## Running Deno

   `deno run --allow-net --allow-read app.ts`

   > you can also use denon (third party application for deno).
   
## Imports and Dependencies
   - serve  from "https://deno.land/std/http/server.ts"
   - v4     from "https://deno.land/std/uuid/mod.ts"
   - acceptWebSocket,acceptable from "https://deno.land/std/ws/mod.ts"