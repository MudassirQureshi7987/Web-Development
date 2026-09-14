const express = require('express');
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

/*

POST /notes => Create a new note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note

*/

app.post("/notes", async (req, res) => {
    const data = req.body;  // {title,description}

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({
        message : "Note created successfully"
    })
})

    app.get("/notes", async (req, res) => {
        const notes = await noteModel.find() // [] always returns an array of objects
            // we can also get specific notes by passing a filter object in find() method
            // like findOne() condition

        res.status(200).json({
            message : "Notes fetced successfully",
            notes : notes
        })
    })

// app.get("/notes", async (req, res) => {
//     const notes = await noteModel.findOne({
//          title: "test_title" 
//     }) // {} always returns a single object 
//     //    returns null if not present in the database

//     res.status(200).json({
//         message : "Notes fetced successfully",
//         notes : notes
//     })
// })

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "Note deleted successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;  // {title,description}

    await noteModel.findOneAndUpdate({ _id : id}, { description : data.description});

    res.status(200).json({
        message : "Note updated successfully"
    })
})

module.exports = app;