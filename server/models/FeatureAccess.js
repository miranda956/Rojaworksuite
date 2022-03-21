module.exports=(sequelize,DataTypes)=>{
    const featureAccess = sequelize.define("featureAccess",{
        accessDepartmet:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        accessPayroll:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        accessEmployee:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        accessDesgination:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        accessApplication:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        accessUsers:{
            type:DataTypes.BOOLEAN,
            required:true
        }


    })
    return featureAccess
}