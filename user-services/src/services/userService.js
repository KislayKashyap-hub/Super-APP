import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const register = async (userData) => {
    const { email, name, age, gender, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, name, age, gender, password: hashedPassword };
    const result = await global.db.collection('user').insertOne(user);
    return result.ops[0];
};

const login = async ({ email, password }) => {
    const user = await global.db.collection('user').findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return token;
};

const getProfile = async (userId) => {
    const user = await global.db.collection('user').findOne({ _id: new ObjectId(userId) });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const updateProfile = async (userId, updateData) => {
    try {
        console.log('Updating profile for userId:', userId);
        console.log('Update data:', updateData);
        const result = await global.db.collection('user').findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { $set: updateData },
            { returnOriginal: false }
        );
        console.log('MongoDB result:', result);
        if (!result.value) {
            throw new Error('User not found');
        }
        return result.value;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};

export default { register, login, getProfile, updateProfile };
