import userService from '../services/userService.js';

const register = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await userService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await userService.getProfile(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateProfile(req.params.userId, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export default { register, login, getProfile, updateUser };
