import UserDB from '../SchemaModel/UserSchema.js';

// ✅ Get all users
export const getUsers = async(req, res) => {
    try {
        const users = await UserDB.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Add user
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

// ✅ Update user
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

// ✅ Delete user
export const deleteUsers = async(req, res) => {
    try {
        const user = await UserDB.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};