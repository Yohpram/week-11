const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const todosRoutes = require('./router/todosrouter');



app.use(express.json());


app.use('/', todosRoutes);

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())




const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
