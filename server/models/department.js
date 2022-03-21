module.exports=(sequelize,DataTypes)=>{
    const Department = sequelize.define("Department",{
    departmentCode:{
        type:DataTypes.STRING,
        required:true

    },
    departmentName:{
        type:DataTypes.STRING,
        required:true
    }

    })
    return Department;

}