

exports.Television = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/betterbuy", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('betterbuy');
		
		var data;
		//To make it simpler to the developer the driver implements the {w:1} options 
		//so that this is done automatically when inserting the document. 
		//{w:1} becomes especially important when you do update or remove as otherwise 
		//it’s not possible to determine the amount of documents modified or removed.
		
		//Insert Operation
		
		//Fetch Operation
		collection.find({"Category":"Television"}).toArray(function(err, items) {
			console.log("Item ::::"+items);
			
						
			//data = JSON.stringify(items);
			//console.log("Item data::::"+data);
			
			res.render('Television',{data : items});
		});
		console.log("Item data::::"+data);
		
	});
	
};
	

exports.Car = function(req, res){
	  res.render('Car', { title: 'E-commerce' });
	};
	

	exports.NailPolish = function(req, res){
		  res.render('NailPolish', { title: 'E-commerce' });
		};