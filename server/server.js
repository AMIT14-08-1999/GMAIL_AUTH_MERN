require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
}));


//Routes
app.use('/api', require('./routes/upload'))
app.use('/user', require('./routes/userRouter'))
//connection mongoDB
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongoose Connect successfully")
}).on("error", (err) => {
    console.log("Mongoose connection error", err);
})



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})