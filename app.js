require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
require('./utils/passport')(passport);
const routes = require('./routes');

const app = express();
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

require('./api/common/skill.model');

mongoose.connection.on('error',(err) => {
    console.error(`Database Error -> ${err.message}`);
    // TODO: Check retry
    process.exit(0);
});

let corsOptions = {
    origin: (origin, callback)=>{callback(null, true)},credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use('*', (req,res,next) => {
    res.status(404).send()
})

if (require.main == module) {
    app.set('port', process.env.PORT || 8081)
    app.listen(app.get('port'), () => {
        console.log(`Backend is running with environment ${process.env.NODE_ENV || 'dev'} at Port : ${app.get('port')}`);
    });
} else {
    module.exports = app
}

// Graceful Shutdown