// Creating server
const express = require("express");

const app = express()  // creating an instance of the server
const notes = []
app.use(express.json())
// Post /notes 
app.post('/notes',(req,res) => {
    notes.push(req.body);

    res.status(201).json({
        message : "Note created successfully"
    })

    console.log(req.body)
})

app.get('/notes',(req,res) => {

    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes
    })
})


// delete /notes/:idx
app.delete('/notes/:index',(req,res) => {

    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message : "Note deleted successfully"
    })
})

app.patch("/notes/:index", (req,res) => {
    const index = req.params.index;
    const description = req.body.description;

    notes[ index ].description = description;

    res.status(200).json({
        message : "Note updated successfully"   
    })
})


module.exports = app