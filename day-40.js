//Node.js Async IO
//https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript

const {exec}=require("child_process");
function execute(command, callback) {
  exec(command,(err,res)=>{
    if(!err){
      callback(null,res);
      }else{
        callback(err);
      }
  })
}
