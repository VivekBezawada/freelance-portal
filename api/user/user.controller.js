const User = require('./user.model');
const freelancer = require('../freelancer/freelancer.controller');
const employer = require('../employer/employer.controller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const constants = require('../../constants');
const saltRounds = 10;

exports.register = async (body) => {
    let user = await User.getUserByEmail(body.email);
    if (user) {
        return [401, 'User already exists!', {}]
    }
    body.password = await bcrypt.hash(body.password, saltRounds);
    user = await User.create(body);
    const userId = user._id.toString();
    if (body.role == constants.ROLES[0]) {
        await freelancer.post(userId)
    } else if (body.role == constants.ROLES[1]) {
        await employer.post(userId)
    }
    return [200, '', {}]
}

exports.login = async (body) => {
    const user = await User.getUserByEmail(body.email);
    if (!user) {
        return [404, 'User not found or Password is wrong', {}]
    }

    const isPasswordMatched = await bcrypt.compare(body.password, user.password);
    if (isPasswordMatched) {
        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET);
        return [200, 'Login Successful!', {token}]
    }

    return [404, 'User not found or Password is wrong', {}]
}