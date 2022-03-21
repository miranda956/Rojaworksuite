const express = require("express");
const db = require("../models");


function router(app){


/**
 * @swagger
 * /api/leave:
 *   post:
 *     description: Create a new employee
 *     tags:
 *       - Leave
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: leave
 *         description: contact object
 *         in: body
 *         required: true
 *         schema:
 *           type:object
 *         properties:
 *           fullname:
 *             type:string:
 *          
 * 
 *          
 *     responses:
 *       200:
 *         description: new Leave
 *         schema:
 *           
 */
app.post("api/leave",(req,res,next)=>{
    db.Leave.create({
       Date_of_application:req.body.Date_of_application,
       leave_duration:req.body.leave_duration,
       reason_for_leave:req.body.reason_for_leave
    }).
    then(()=>{
    }).catch((err)=>{
        next(err)
    })
})


  /**
 * @swagger
 * /api/leaves:
 *   get:
 *     description: Retrieve the full list of leaves
 *     tags:
 *       - Leave
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Leave
 *         schema:
 */


app.get("/api/leaves",(req,res,next)=>{
    db.Leave.findAll({

    }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        next(err)
    });
})





}

module.exports = router;