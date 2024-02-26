import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    date:{
        type: 'string',
        required: true
    }

})

const Notes = mongoose.model('notes', notesSchema)

export default Notes