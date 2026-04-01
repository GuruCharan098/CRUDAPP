import UserDB from '../SchemaModel/UserSchema.js';

// GET
export const getUsers = async(req, res) => {
    try {
        const users = await UserDB.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ADD
export const addUsers = async(req, res) => {
    try {
        const user = await UserDB.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(400).json({ error: error.message });
    }
};

// UPDATE
export const updateUsers = async(req, res) => {
    try {
        const user = await UserDB.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE
export const deleteUsers = async(req, res) => {
    try {
        const user = await UserDB.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};