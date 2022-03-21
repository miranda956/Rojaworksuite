module.exports=(sequelize,DataTypes)=>{

    const Leave = sequelize.define("Leave",{
    

        leave_type:{
            type:DataTypes.STRING,
            required:true
        },
        leaveDescription:{
            type:DataTypes.STRING,
            required:true
        },

        max_days:{
            type:DataTypes.INTEGER(3),
            required:true
        }

    })
    return Leave;

}