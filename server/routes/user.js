const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();
const router = require('express').Router();

`
    CRUD Operations for User Model
    ------------------------------
    Users should be able to have a username, email, password
`

// CREATE NEW USER
router.post("/", async (req, res) => {
    try{
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
        });
        res.status(201).json(user);
    } catch(error){
        console.log(req)
        res.status(500).json({message: error.message});
    }
});

// GET USER
router.get("/find/:id", async(req, res) => {
    try{
        const user = await prisma.user.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

// GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const user = await prisma.user.findMany();
        res.status(200).json(user);
    } catch (error){
        res.status(500).json({message: error.message});
    }
})

// UPDATE USER
router.put("/:id", async (req, res) =>{
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                username: req.body.name,
                email: req.body.email,
                password: req.body.password,
            },
        })
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

// DELETE USER
router.delete("/:id", async (req, res) => {
    try{
        await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json("User has been deleted.");
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;