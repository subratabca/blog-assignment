const express =require('express');

const UsersController=require("../controllers/UsersController");
const PostsController=require("../controllers/PostsController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router =express.Router();

router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);

router.post("/CreatePost",AuthVerifyMiddleware,PostsController.CreatePost);
router.put("/UpdatePost/:id",AuthVerifyMiddleware,PostsController.UpdatePost);
router.get("/ReadAllPost",AuthVerifyMiddleware,PostsController.ReadAllPost);
router.get("/ReadPostById/:id",AuthVerifyMiddleware,PostsController.ReadPostById);
router.delete("/DeletePost/:id",AuthVerifyMiddleware,PostsController.DeletePost);

module.exports=router;
