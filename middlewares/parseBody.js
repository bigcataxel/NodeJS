module.exports = function parseBody(req, res, next) {
    let data = "";
  
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
  
    req.on("end", () => {
      try {
        req.body = JSON.parse(data);
        next();
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Invalid JSON" });
      }
    });
  
    req.on("error", (error) => {
      console.error(error);
      res.status(500).json({ error: "Server error while parsing body" });
    });
  };
  