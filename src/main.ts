import { Server } from "hyper-express";
export const web = new Server();

import { Request, Response } from "hyper-express";
import { ContactController } from "./controller/contact-controller";



// Notes
web.get("/", (req: Request, response: Response) => {
    response.send("Hello World");
})
web.get("/notes", ContactController.get);

web.listen(3000)
.then((socket) => console.log('Webserver started on port 3000'))
.catch((error) => console.log('Failed to start webserver on port 3000'));