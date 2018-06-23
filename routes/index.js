var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
router.get('/', ((req, res, next) => {
  res.render('sites/index', { title: 'fTarget' });
}))

router.post('/search', ((req, res, next) => {
	axios.post(`https://api.shodan.io/shodan/host/search?key=cgYOLzKPnof5HQQBfjEDErAUZ5iIbHbv&query=${req.body.search}`)
	.then((results)=>{
		console.log(results.data.matches)
		res.render('sites/results' , { data: results.data.matches, title:'fTarget' })
	})
	.catch((error) =>{
		console.log(error)
	})
}));

module.exports = router;
