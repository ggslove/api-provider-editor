// const Joi = require('joi');
import joi  from 'joi';
 
const schema = joi.object().keys({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [joi.string(), joi.number()],
    birthyear: joi.number().integer().min(1900).max(2013),
    email: joi.string().email({ minDomainAtoms: 2 })
}).with('aaa', ['username','birthyear','password'])//.without('password', 'access_token');
 
// Return result.
const result = joi.validate({ username: 'abc', birthyear: 1994 }, schema);
// result.error === null -> valid
 console.log(result)
// You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { });