
/**
 * @swagger
 * definitions:
 *   Employee:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       first_name:
 *         type: string
 *       last_name:
 *         type: integer
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       gender:
 *         type:string
 * 
 
 
 *       required:
 *         - email
 *         - gender
 *         - DOB
 *    
 */

 module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      employee_Id:{
          type:DataTypes.STRING,
          required:true,
      },
      first_name:{
        type: DataTypes.STRING,
        required:true

      },
      last_name:{
        type: DataTypes.STRING,
        required:true

      },
      email: {
        type: DataTypes.STRING,
        required:true
      },
      phone: {
        type: DataTypes.STRING,
        required:true
      },
      gender: {
        type: DataTypes.ENUM("male","female"),
        required:true
      },
      DOB:{
          type:DataTypes.DATE,
          required:true
      },
      Employment_date:{
          type:DataTypes.DATE,
          required:true
      },
      contract_duration:{
          type:DataTypes.STRING
      },
      contract_type:{
          type:DataTypes.STRING,
          required:true
      },
      street_address:{
        type:DataTypes.STRING,
        required:true
      },
      
      
   
    });

  
  
    return  Employee;
  };
  