if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  require('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
const nodecron = require('./middlewares/nodecron')

mongoose.connect(process.env.DB,{ useNewUrlParser: true })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('Error Connecting to database | Error:'+err));


app.use(cors());
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

nodecron.questionDaily()

app.use('/user',routes.user);
app.use('/question',routes.question);
app.use('/comment',routes.comment);


app.use('/', (req,res,next) => next({httpStatus: 404, message:'Url not found'}))

app.use(function(err,req,res,next){
  let messages;
  let httpStatus;
  if(err.name === 'ValidationError'){
    httpStatus = 406
    messages = Object.keys(err.errors).map((el) => err.errors[el].message);
  }

  console.log(messages || err.message || err || 'Internal Server Error');
  console.log(httpStatus || err.httpStatus || 500)
  
  res.status(httpStatus || err.httpStatus || 500)
    .json({error: messages || err.message || err || 'Internal Server Error'});
})

app.listen(port, () => console.log('Server is running in port:' + port))