import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/user.js';
import bookRoutes from './routes/book.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb+srv://fiona:fiona@cluster0.ddlqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use("/user", userRoutes);
app.use("/book", bookRoutes);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
}) 
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))) // connection is successful
                                    // callback function that runs when app successfully listens
.catch((err) => console.log(err));