const express = require("express");
const db = require("../models");


function router(app){


/**
 * @swagger
 * /api/employee:
 *   post:
 *     description: Create a new employee
 *     tags:
 *       - Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employee
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
 *         description: new Employee
 *         schema:
 *           
 */
app.post("/api/employee",(req,res,next)=>{
    db.Employee.create({
        employee_id:req.body.employee_id,
        first_name:req.body.firstName,
        last_name:req.body.lastName,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.contact,
        DOB:req.body.DOB,
        Employment_date:req.body.Employment_date,
        contract_duration:req.body.contract_duration,
        contract_type:req.body.contract_type

    }).
    then(()=>{
    }).catch((err)=>{
        next(err)
    })
})


  /**
 * @swagger
 * /api/employee:
 *   get:
 *     description: Retrieve the full list of employee
 *     tags:
 *       - Employee
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: employee
 *         schema:
 */


app.get("/api/employee",(req,res,next)=>{
    db.Employees.findAll({
        where:{
            attribute:["employee_Id","first_name","last_name","email","phone","gender","DOB","Employment_date","contract_duration","contract_type","street_address"]
        }

    }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        next(err)
    });
})


 /**
 * @swagger
 * /api/employee/{id}:
 *   get:
 *     description: Retrieve an specific employee
 *     tags:
 *       - Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the employee profile to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: employee
 *         schema:
 */


app.get("/api/employee/:id",(req,res,next)=>{
    db.Employee.findAll({

        
        where:{
            id:req.params.id
        }

    })
    .then((result) => {
        res.status(202).json(result)
    }).catch((err) => {
        next(err)
        
    });
})


/**
 * @swagger
 * /api/employee/{id}:
 *   patch:
 *     description: Update fields of a employee
 *     tags:
 *       - Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the lead to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as leads's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *     responses:
 *       200:
 *         description: updated employee
 *         schema:
 */

app.patch("/api/employee",(req,res,next)=>{
    db.Empoyee.update({
        employee_id:req.body.employee_id,
        first_name:req.body.firstName,
        last_name:req.body.lastName,
        email:req.body.email,
        gender:req.body.gender,
        phone:req.body.contact,
        DOB:req.body.DOB,
        Employment_date:req.body.Employment_date,
        contract_duration:req.body.contract_duration,
        contract_type:req.body.contract_type
    },{
        where:{
            id:req.params.id
        }
    }).then((result) => {
        res.status(201).json(result)
    }).catch((err) => {
        next(err)
    });
})


}

module.exports = router;