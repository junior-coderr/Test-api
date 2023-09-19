const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const data = {
    name: 'Pratik Mishra',
    age:17,
    gender: 'male',
}


app.get('/', (req, res) => {
    res.send(data);

});

app.listen(port,()=>{
    console.log('listening on port');
});