const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const port = process.env.PORT || 2121;
const app = express();

app.use(favicon(path.join(__dirname, "..", "dist", "favicon.ico")));


app.use(express.static("dist"));
  // eslint-disable-next-line global-require
app.get("/*", (req, res) => {
  console.log(path.join(__dirname,"..", "dist", "index.html"))
  res.sendFile(path.join(__dirname, "../",'dist', 'index.html'));

});


/* Redirect http to https */
app.get("*", (req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  )
    res.redirect(`https://${req.hostname}${req.url}`);
  else next(); /* Continue to other routes if we're not redirecting */
});

app.listen(port, () => {
  console.log("Application started at port:%d", port);
});
