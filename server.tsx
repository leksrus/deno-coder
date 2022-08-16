import { createApp } from "https://deno.land/x/servest@v1.3.4/mod.ts";
import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
import React from "https://jspm.dev/react@17.0.2";


const app = createApp();

function App() {
  return <html>
    <head>
      <meta charSet="utf-8"/>
      <title>Tp Deno</title>
    </head>
    <body>
      <h1 style={{color: 'blue'}}>Hello SSR</h1>;
    </body>
  </html>
  
}

app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8"
    }),
    body: ReactDOMServer.renderToString(<App/>),
  });
});


app.listen({port: 8001});