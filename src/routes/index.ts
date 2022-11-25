import express from 'express';
import resize from '../functions/img-processing';
import {promises as fs} from 'fs';
import fsExists from 'fs.promises.exists';
const routes = express.Router();

routes.get("/image",async(req,res) =>{
    try{
    const fName = String(req.query.filename);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    if(width <= 0 || height <= 0) {
        throw new Error("width and height should be greater than ZERO");
    }
    if(isNaN(width) || isNaN(height)){
        throw new Error("width and hight should be numbers");
    }
    const path = await resize(fName, width, height)
    .then(res => { return res; });
    const img = await fs.readFile(path);
    res.end(img,'binary');
    }catch (err){
        res.status(503).end(`${err}`)
    }
    
})

export default routes;