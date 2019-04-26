const express = require('express');
var router = express.Router();
var url = require('url');
var {Location} = require('../models/location')


// localhost:3000/pincodes?Taluk=X,W&statename=Y&Districtname=Z
router.get('/', (req, res) => {
    var parts = url.parse(req.url, true);
    var query = parts.query;
  
    var TalukArray = query.Taluk? query.Taluk.split(','):[];
    var StateArray = query.statename? query.statename.split(','):[];
    var DistrictArray = query.Districtname ? query.Districtname.split(','):[];
  
    var promise = Location.find({
                                $or:[{Taluk: {$in: TalukArray}},
                                      {statename: {$in: StateArray}},
                                      {Districtname: {$in: DistrictArray}}]
                                },{pincode: 1}).exec();


    promise.then((docs) => {
        res.send(docs)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router