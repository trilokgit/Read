const express = require("express")

const router = express.Router();
const users = require("../model/userSchema")


// router.get("/", (req, res) => {
//     console.log("connect")
// })

router.post('/register', async (req, res) => {
    // console.log(req.body);
    const { name, age, address, contact } = req.body;
    if (!name || !age || !address || !contact) {
        res.status(404).send("plz filled all data");
    }
    try {
        
        const preuser = await users.findOne({ contact: contact });
        console.log(preuser);

        if (preuser) {
            res.status(404).send("Thsi user already exist");
        } else {
            const adduser = new users({
                name,age,address,contact
            })

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = router;