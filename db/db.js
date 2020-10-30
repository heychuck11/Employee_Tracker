const { response } = require("express")
const connection = require ("./connection")
class DB {
  constructor(connection){
    this.connection = connection
  }
  findAllEmployees(){
    return this.connection.query("select * from employee")
  }
  findAllRoles(){
    return this.connection.query("select * from role")
  }
  findAllDepartments(){
    return this.connection.query("select * from department")
  }
  updateEmployees(){
    return this.connection.query("select * from employee")
  }

  addEmployee(){
    
  
  }
  addRole(){
  

  }
  addDepartment(){

  }

}

module.exports = new DB(connection)