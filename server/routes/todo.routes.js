const { createTask, readTask, updateTask, deleteTask, readComplete } = require("../controllers/todo.controller")

const router = require("express").Router()

router
    .post("/create", createTask)
    .get("/read", readTask)
    .get("/readcomplete", readComplete)
    .put("/update/:tid", updateTask)
    .delete("/delete/:tid", deleteTask)

module.exports = router 