const express = require('express');
const app = express();
const port = 6969;
const cors = require('cors');


const {graphqlHTTP} = require("express-graphql");

const schema = require("./Schemas/index")


app.use(cors({
    origin: 'http://localhost:3000',

}));
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
