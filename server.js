const mongoose = require('mongoose');
const app = require('./app');
const { DB_Host } = process.env;

mongoose.connect(DB_Host)
  .then(() => {
    app.listen(3000);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})
