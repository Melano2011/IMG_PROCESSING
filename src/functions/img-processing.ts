const sharp = require('sharp');
import fs from 'fs';
const resize = async (fName:string,width:number,height:number)=>{
    if(!fs.existsSync(fName+width+height)){
   await sharp(fName+".jpg")
  .resize(width, height)
  .toFile(fName+'+'+width+'+'+height);}
  return fName+'+'+width+'+'+height;
}
export default resize;