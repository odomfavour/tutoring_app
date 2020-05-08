

const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer()
const cors = require('cors');
const port = process.env.PORT || 5000;



// Import routes
const authRoute = require("./routes/auth");
const categoryRoute = require('./routes/categories');
const subjectRoute = require('./routes/subject');
const tutorRoute = require('./routes/tutor');
dotenv.config();




// connect to database
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected")
);

app.use(cors());

app.use(upload.single("file"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('welcome to my app')
})


// route middleware
app.use("/api/v1", authRoute);
app.use("/api/v1/tutors", tutorRoute);
app.use('/api/v1/subjects', subjectRoute);
app.use("/api/v1/categories", categoryRoute);

app.listen(port, () => console.log("hello"))