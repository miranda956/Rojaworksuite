module.exports=(sequelize,DataTypes)=>{
    const Account = sequelize.define("Account",{
        userName:{
            type:DataTypes.STRING,
            required:true,

        },
        password:{
            type:DataTypes.STRING,
            required:true
        },
        AccountType:{
            type:DataTypes.STRING,
            required:true
        }

    })

    return Account;
}