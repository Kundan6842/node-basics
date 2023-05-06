
const fs = require("fs");
const requestHandler = (req,res)=>{
    const method = req.method;
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>enter message</title><head>");
        res.write(
          '<body><form action ="/message" method = "POST" ><input type="text"name = "message"><button type = "submit">submit</button></input></form><body>'
        );
        res.write("</html>");
        return res.end();
      }
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
         console.log(chunk);
          body.push(chunk);
        });
       return req.on("end",()=>{
         const parsedbody = Buffer.concat(body).toString();
         console.log(parsedbody);
         const message = parsedbody.split('=')[1];
         fs.writeFile("message.txt", message,()=>{
              res.statusCode = 302;
              res.setHeader("Location", "/");
              return res.end();
         });
        
        })
        
       
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My first kundan  page</title><head>");
      res.write("<body><p>hello welcome</p><body>");
      res.write("</html>");
      res.end();
    
}
exports.handler = requestHandler;
exports.text = "requestHandler9555555";

