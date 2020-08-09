# Dino-Bot
A ChatBot built using Deno and Websockets.

## Deno ?
<p>Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.It's built on V8, Rust, and Tokio.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/05/Screen-Shot-2020-05-11-at-18.55.24.png"></p>

## Feature Highlights

   - Secure by default. No file, network, or environment access (unless explicitly enabled).
   - Supports TypeScript out of the box.
   - Ships a single executable (deno).
   - Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
   - Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.
   - Scripts can be bundled into a single JavaScript file.

## Installing Deno
   - Install chocolatey for windows.Chocolatey is a package manager which is used to allow you to version things, manage dependencies and installation order, better       inventory management, and other features.[Chocolatey](https://chocolatey.org/install)
   - Now Install Deno from cmd `choco install deno`
   

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
   
## ScreenShots   

![Screenshot_2020-08-09 Dino-Bot](https://user-images.githubusercontent.com/51753810/89736831-073cf980-da8a-11ea-931f-dae23ade4f84.png)
![Screenshot_2020-08-09 Dino-Bot(2)](https://user-images.githubusercontent.com/51753810/89736837-0f953480-da8a-11ea-8c33-111412a10b3f.png)
![Screenshot_2020-08-09 Dino-Bot(1)](https://user-images.githubusercontent.com/51753810/89736841-115ef800-da8a-11ea-93cc-829180b82bb5.png)
