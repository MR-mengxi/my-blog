const express = require("express");
const app = express(); // 创建一个express应用
const path = require("path");
const staticRoot = path.resolve(__dirname,"../public");

app.use(express.static(staticRoot));
// app.get("*", (req, res) => {
//     console.log("abc");
// });

const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})