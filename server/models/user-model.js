const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

//Secure the password with bcrpyt
userSchema.pre('save', async function(next) {
    const user = this;

    if(!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})

// compare the password function
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);    
}

// json web token 
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(), 
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_TOKEN,
        {
            expiresIn: "30d"
        }
        );
    } catch (error) {
        console.log(error)
    }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;