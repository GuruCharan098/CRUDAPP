import express from 'express';
import {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
} from '../Controllers/UserCRUDCtrls.js';

const router = express.Router();

router.route("/")
    .get(getUsers)
    .post(addUsers);

router.route("/:id")
    .put(updateUsers)
    .delete(deleteUsers);

export default router;