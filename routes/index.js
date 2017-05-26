var express = require('express');
var router = express.Router();
var mockData = require('./mock-data');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ddd', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mock-data', function(req, res, next){
  var start = parseInt(req.query['start']);
  var limit = parseInt(req.query['limit']);
  var data = [];
  var addOtherIndex = 0;
  for(var i = start; i < start + limit; i++){
    if(mockData[i]){
      data.push(mockData[i]);
    }
    else{
      addOtherIndex = start + limit - i;
      break;
    }
  }
  if(addOtherIndex){
    start = 0;
    for(var i = start; i < start + addOtherIndex; i++){
      if(mockData[i]){
        data.push(mockData[i])
      }
    }
    start = addOtherIndex;
  }
  console.log(data.length);
  res.status(200).json({
    start: start,
    limit: limit,
    data: data
  })
})

module.exports = router;
