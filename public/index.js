

 const express = require("express")
 const app = express();
 const path = require("path");
 const methodOverride = require("method-override");
 const ejsMate = require("ejs-mate")

 

 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname,"public")))

app.use(express.static("public"))

app.listen(3000, () => {
  console.log("app is listening port 3000")
  })
    
  app.get("/", (req, res) => {
    res.render("home")
    })

    app.get("/meditate", (req,res) => {
      res.render("meditate")
    })

    app.get("/resources", (req,res) => {
      res.render("resources")
    })