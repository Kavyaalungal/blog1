import { Router } from "express";
// import multer from "multer";
import auth from "./middleware/auth.js";


// import path from "path";

import * as rh from "./request-handlers.js";

// const storage = multer.diskStorage({
//     destination:"./files",
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// });
// const storage = multer.diskStorage({
//     destination:"./files",
//     filename:(req,file,cb) =>{
//         let date = new Date();
//         cb(null,String(date) + file.originalname)
//     }
//  });



// const uploader = multer({ storage: storage });

const router = Router()

router.route("/register").post(rh.register);
router.route("/login").post(rh.login);
router.route("/get-blog").get(auth,rh.getBlog);
router.route("/profile").get(auth,rh.profile);
router.route("/add-blog").post(rh.addBlog);
//  router.route("/upload").post(uploader.single("profile"),rh.uploadFile);


// router.route("/profile").get(auth,userHandlers.profile);
// router.route("/add-note").post(auth,userHandlers.addNote);
// router.route("/get-note").get(auth,userHandlers.getNote);
// router.route("/update-details").put(auth, userHandlers.updateDetails);


// router.route("/file").post(upload.array("myfile",4),(req,res)=>{

//     console.log(req.files);
//     res.json("files stored");
// })


// router.route("/get-file/:file").get((req,res)=>{
//     let fileName = req.params;
//     res.sendFile(path.resolve(`./files/${fileName.file}`))
// })

export default router;





