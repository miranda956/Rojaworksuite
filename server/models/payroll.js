module.exports=(sequelize,DataTypes)=>{
const Payroll = sequelize.define("Payroll",{

daysOfWork:{
    type:DataTypes.INTEGER,
    required:true

},
bonus:{
    type:DataTypes.DECIMAL(10,2),

},
overtimepay:{
    type:DataTypes.DECIMAL(10,2),

},
grossSalary:{
    type:DataTypes.DECIMAL(10,2),
    required:true
},
cashAdvance:{
    type:DataTypes.DECIMAL(10,2),
    
},
lateHours:{
    type:DataTypes.INTEGER

},
absentDays:{
    type:DataTypes.INTEGER
},

healthDeductions:{
    type:DataTypes.STRING,
    required:true
},

retirementDeductions:{
    type:DataTypes.STRING,
    required:true
},
Totaldeductions:{
    type:DataTypes.DECIMAL(10,2),
    required:true
},
netPay:{
    type:DataTypes.DECIMAL(10,2),
    required:true
},
payrollMonth:{
    type:DataTypes.DECIMAL(10,2),
    required:true
}




})


return Payroll;



}