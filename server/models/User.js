module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
     
        username:{
            type:DataTypes.STRING,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true
        },
        avatar:{
            type:DataTypes.STRING,
            required:true
        },
        fullName:{
            type:DataTypes.STRING,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            required:true
        },
        contact:{
            type:DataTypes.STRING,
            required:true
        },
        status:{
            type:DataTypes.BOOLEAN,
            required:true
        }

    })
    return User;
}