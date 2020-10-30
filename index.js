const inquirer = require("inquirer");
const { async } = require("rxjs");
const { end } = require("./db/connection");
const { connection } = require("./db/db");
const db = require("./db/db")


require("console.table")

function app(){
  async function loadPrompts(){
    const {choice} = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "Add Department", "Add role", "Add employee", "view department", "view role", "view employee", "update employee", "done"
        ]
      }
    ])
    switch(choice){
      case "Add Department":
        return addDepartment();

      case "Add role":
        return addRole();

      case "Add employee":
        return addEmployee();

      case "view department":
        return viewDepartment();

      case "view role":
        return viewRole();

      case "view employee":
        return viewEmployee();

      case "update employee":
        return updateEmployee();

      case "done":
        connection.end()

    }
    async function viewEmployee(){
      const employees = await db.findAllEmployees()
      console.table(employees)
      loadPrompts()
    }

    async function viewRole(){
      const roles = await db.findAllRoles()
        console.table(roles)
        loadPrompts()
    }

    async function viewDepartment(){
      const departments = await db.findAllDepartments()
      console.table(departments)
      loadPrompts()
    }

    async function updateEmployee(){
      const update = await db.updateEmployees()
      console.table(update)
    }

    async function addEmployee(){
      const add = await db.addEmployee()
      console.table(addEmp)
    }
    async function addRole(){
      const addRole = await db.addRole()
      console.table(addRole)
    }
    async function addDepartment(){
      const addDep = await db.addDepartment()
      console.table(addDep);
    }
  }
  loadPrompts()
}




app();
