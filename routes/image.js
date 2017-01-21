let fs = require('fs');
let mongoose = require('./mongo.js');

module.exports.SendImage = (req, res)=>{


  mongoose.find({type:"image"}, (err, datas)=>{
    let titlearr = new Array();
    for (let img in datas){
      titlearr.push(datas[img].title);
    }
    res.render('infolder.html', {imgs:titlearr});
    return;
  });
  /*
  fs.readdir('public/img', (err, list)=>{

    if(err) throw err;

    let imgarr = list;
    console.log(imgarr);
    res.render('infolder.html', {imgs:imgarr});
  });
*/
};



module.exports.UploadImage = (req, res)=>{
  let image = new mongoose();
  image.title = "first";
  image.date = new Date();
  image.type = "image";

  image.save((err)=>{
    if(err) throw err;
    console.log('save');
  });

  mongoose.find((err, img)=>{
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(img);
  });
};
