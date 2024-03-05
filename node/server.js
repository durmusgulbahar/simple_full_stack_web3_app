const express =     require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contractRoutes = require('./routes/contract.js');
const PORT = process.env.PORT || 4000;
// Create express app
const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
//routes
app.use('/api/contract',contractRoutes);

app.listen(PORT, () => {
        console.log("Connected to DB & Server is listening on port ", PORT);
});
// Listen for requests