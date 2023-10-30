const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const todosRoutes = require('./router/todosrouter');

app.use(express.json());

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/', todosRoutes);






const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports=app
