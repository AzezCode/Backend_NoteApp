import express from 'express';
import { createNotes, deleteNotes, getAllNotes, updateNotes } from '../controller/notesController.js';

const routes = express.Router();

routes.route('/').get(getAllNotes).post(createNotes)
routes.route('/:id').put(updateNotes).delete(deleteNotes)


export default routes