import Notes from "../models/notesModel.js";

export const getAllNotes = async(req, res) =>{
    try{
        const notes = await Notes.find()
        res.status(200).json(notes);    
    }catch(e){
        res.status(500).json({error: error.message});
    }
}
 export const createNotes = async(req, res) =>{
    try{
        const {title, decription}=req.body;
        const newNote = new Notes({title, decription, date: new Date()});
        const note = await newNote.save()
        res.status(201).json(note);
    }catch(e){
        res.status(500).json({error: error.message});

    }
    
}
export const updateNotes = async(req, res) =>{
    try{
        const {title, decription}=req.body;
        const note = await Notes.findById(req.params.id)
        if(note){
            note.title = title;
            note.decription = decription;
            const updatenote = await Notes.save()
            res.status(200).json(note);
        }
            
    }catch(e){
        res.status(500).json({error: error.message});

    }
}
export const deleteNotes = async(req, res) =>{
    try{
        const note = await Notes.findByIdAndDelete(req.params.id)
        if(note){
            res.status(200).json({message: 'delete is successful'});
        }  
    }catch(e){
        res.status(500).json({error: error.message});

    }
}
