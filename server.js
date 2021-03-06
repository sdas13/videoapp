const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var mongoose = require('mongoose');
var video = require('./video');
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://admin:admin123@ds139992.mlab.com:39992/videoappdb');

var router = express.Router();

app.use('/api', router);

//router.use(function (req, res, next) {
  //  console.log('Logging of request will be done here');
   // next(); // make sure we go to the next routes and don't stop here
//});

//get
router.get('/fetch',(req,res)=>{
	video.find((err,products)=>{
		res.json(products)
	})
})

//post
router.post('/create',(req,res)=>{
	console.log('create',req.body)
	var v=new video();
	v.Id=req.body.Id;
	v.Title=req.body.Title;
	v.Length=req.body.Length;
	v.Category=req.body.Category;
	v.Format=req.body.Format;
	v.save(function(err){
		if(err)
			res.send(err)
		else
			res.send('Record Created...')
	})
})

//put
router.put('/update',(req,res)=>{
	console.log('update',req.body)
     video.findById(req.body._id, function (err, v) {
        if (err) {
            res.send(err);
        }
	        v.Id=req.body.Id;
		v.Title=req.body.Title;
		v.Length=req.body.Length;
		v.Category=req.body.Category;
		v.Format=req.body.Format;
        v.save(function (err) {
            if (err)
                res.send(err);
			else
				res.json({ message: 'Record updated!' });
        });

    });
})

//delete
router.delete('/remove',(req,res)=>{
	console.log('remove',req.body)
     video.remove({_id:req.body._id}, function (err, v) {
        if (err) {
            res.send(err);
        }
		else
			res.json({ message: 'Record deleted!' });

    });
})

var port=process.env.PORT || 8888
app.listen(port,()=>{
	console.log('Server started on port '+port)
})
