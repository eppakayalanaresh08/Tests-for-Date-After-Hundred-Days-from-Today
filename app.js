const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
    const nowDate=addDays(new Date(),100)
    const responseData=`${nowDate.getDate()}/${nowDate.getMonth() + 1}/${nowDate.getFullYear()}`
    response.send(responseData)
 // const date=new Date()
//  const nowDate= addDays(new Date(date.getFullYear(),
 //   date.getMonth(),date.getDate()), 100);
 // response.send(`${nowDate.getDate()}/${
 //   nowDate.getMonth() + 1
 // }/${nowDate.getFullYear()}`);
});
app.listen(3001);
module.exports = app;
