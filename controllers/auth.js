const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    const { name, email, password, role } = req.body;
  

    // if (!email || !password || name || role) {
    //   res.status(400).send({
    //     status: false,
    //     message: "All fields are required",
    //   });
    //   return;
    // }
    const emailExist = await User.findOne({ email });
    if(emailExist) return res.status(400).send('Email already exists')

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt)
    const user = new User({
        name,
        email,
        role,
        password: hashedpassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
  }
};

exports.logIn = async (req, res) => {
    
   const email = req.body.email;
   const password = req.body.password;
//    res.json({ status: true, data: email });
   
   
    // checking if email exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Email is not found' });

    }

    // password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
        return res.status(400).send('Invalid password')
    }
        
    // create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);


      
}
