module.exports=(sequelize,DataTypes)=>{
    const LeaveApplication = sequelize.define("LeaveApplication",{
        referenceNumber:{
            type:DataTypes.STRING,
            required:true
        },
        dateOfApplication:{
            type:DataTypes.DATE,
            required:true
        },
        leaveStatus:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        attachments:{
            type:DataTypes.STRING,
            required:true,
        },
        dateOfApproval:{
            type:DataTypes.DATE,
            required:true
        }


    })
    return LeaveApplication;
}