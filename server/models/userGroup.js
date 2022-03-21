module.exports=(sequelize,DataTypes)=>{
    const userGroup = sequelize.define("userGroup",{
       

        userGroup:{
            type:DataTypes.STRING,
            required:true

        },
        description:{
            type:DataTypes.STRING,
            required:true
        },
        allowAdd:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        allowEdit:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        allowDelete:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        allowPrint:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        allowImport:{
            type:DataTypes.BOOLEAN,
            required:true
        },
        allowExport:{
            type:DataTypes.BOOLEAN,
            required:true
        }


    })
    return userGroup; 
}