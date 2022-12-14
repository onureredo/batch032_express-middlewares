const express = require('express');
const ordersRouter = require('./Routes/ordersRouter');
const app = express();
const port = 6000;
const cors = require('cors')

app.use(cors({origin:"https://www.fake.com/", optionsSuccessStatus: 200}))



app.use('/orders', ordersRouter);
app.use('/products', require('./Routes/productsRouter'));




app.listen(port, () => console.log(`App is running on port ${port}`));