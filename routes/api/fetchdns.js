
const express = require('express');
// const DnsList = require('../../model/DnsList.js');
const router = express.Router();

const allDn = require("../../models/AllDn.js")
const dnsResults = require("../../models/DnsResult.js")

router.get('/',
  async (req, res) => {
    allDn.aggregate([{ $match:{ Email: req.session.mail } }]).
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

router.get('/test',
  async (req, res) => {
    allDn.find.
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
    dnsResults.aggregate([{ $match:{ Domain: req.params.domain, Email: req.session.mail } }]).
    // dnsResults.aggregate([{ $match:{ Domain: req.params.domain } }]).
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

module.exports = router;