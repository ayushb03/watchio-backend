import { Router } from "express"
import { registerUser } from "../controllers/user.controllers.js"
import { upload } from "../middlewares/multer.middlewares.js"

const router = Router()

router.route("/register").post(
    upload.fields([
    {
        name: "avatar",
        maxCnt: 1
    }, 
    {
        name: "coverImage",
        maxCnt: 1
    }]),
    registerUser)

export default router   