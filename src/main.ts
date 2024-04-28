import { web } from "./router/route";


web.listen(3000)
.then((socket) => console.log('Webserver started on port 3000'))
.catch((error) => console.log('Failed to start webserver on port 3000'));