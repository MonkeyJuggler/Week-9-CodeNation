const express = require("express");
const app = express();
const port = 5001;

// Allowing the app to use the static files
app.use("/static", express.static("public"));

// Back ticks are used instead of speech marks to allow javascript to be inserted into the string.
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});