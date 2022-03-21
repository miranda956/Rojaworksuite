module.exports=(sequelize,DataTypes)=>{
    const Designation= sequelize.define("designation",{
     designationName:{
         type:DataTypes.STRING,
         required:true
     },
     des_description:{
         type:DataTypes.STRING,
         required:true
     }
    });

    return Designation;
}