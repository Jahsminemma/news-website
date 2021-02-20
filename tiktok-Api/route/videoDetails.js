const express = require("express")
const VideoDetails = require("../models/VideoDetails")
const router = express.Router()


router.get("/", async (req,res)=>{
    try{
        const VideoDetails = await VideoDetails.find((err, VideoDetail)=>{
            if(err) return res.status(500).json({success:false, error : err})
            return res.status(200).json({success: true, data : VideoDetail})
        })
        return VideoDetails
    }
    catch(err){
        res.json(err)
    }
})


router.post("/", async (req, res)=>{
    const VideoDetail = new VideoDetails({
        videoUrl : req.body.videoUrl,
        shares : req.body.shares,
         messages : req.body.messages,
         likes : req.body.likes,
        channels : req.body.channels,
         description : req.body.description,
         song : req.body.song,
    })
try{
    const VideoDetails = await VideoDetail.save((err, created)=>{
        if(err) return res.status(500).json({success: false, error : err})
        return res.status(200).json({success: true, data:created})
    })
    return VideoDetails
}catch(err){
    res.json(err)
}
})

module.exports = router