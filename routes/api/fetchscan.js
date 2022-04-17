
const express = require('express');
const { where } = require('../../models/AllScan.js');
const router = express.Router();

const allScan = require("../../models/AllScan.js")
const scanResults = require("../../models/Scan.js")
// const myssl = require("../../model/SslResult.js")


router.get('/',
  async (req, res) => {
    allScan.aggregate([{ $match:{ Email: req.session.mail } }]).
    exec((err,results)=>{
        if(!results){
          res.send(res)
          return "Not found"
        }
        else if(err){
          res.send(err)
          return "Not found"
        }
        res.send(results);
    })
  } 
)

router.get('/:domain',
  async (req, res) => {
    // console.log("***********fetching scan results api called***********", req.session.mail);
    scanResults.aggregate([{ $match:{ Domain: req.params.domain, Email: req.session.mail } }]).
    exec((err,results)=>{
        if(!results){
          res.send(res)
          return "Not found"
        }
        else if(err){
          res.send(err)
          return "Not found"
        }

        res.send(results);
    })
  } 
)

// Abdullah dont delete this api, leave it commented, farooq needs it later ...

// router.get('/',
//   async (req, res) => {
//     finale=["-"]
//     console.log("******************************")
//     myssl.updateMany([{ $set:{ BypassedCiphers: finale } }]).
//     exec((err,results)=>{
//         if(!results){
//             res.send(res)
//         return "Not found"
//         }
//         else if(err){
//             res.send(err)
//         return "Not found"
//         }
//         res.send(results);
//     })
//   }
// )

module.exports = router;