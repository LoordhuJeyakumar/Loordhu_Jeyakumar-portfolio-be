const messageRouter = require("./messageRouter");

const appRouter = require("express").Router();

appRouter.get("/", (request, responce) => {
  responce.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Loordhu Jeyakumar</title>
      </head>
      <body>
        <div class="home">
          <span>Hi I'm</span>
          <h1>Loordhu Jeyakumar</h1>
          <p>Welcome to my portfolio backend</p>
        </div>
        <style>
          body {
            background-color: #fff;
          }
          .home {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: darkolivegreen;
          }
          .home h1 {
            background-color: #fff;
            color: #202c2d;
            text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93,
              -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93,
              -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93,
              -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93,
              -8px 7px #cdd2d5;
          }
          .home span,
          h1,
          p {
            padding: 0;
            margin-bottom: 0;
          }
        </style>
      </body>
    </html>
    `);
});

appRouter.use("/message", messageRouter);

module.exports = appRouter;
