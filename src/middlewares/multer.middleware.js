import multer from "multer";
import fs from "fs";
import path from "path";

const tempDir = path.resolve("public/temp");
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

//Add file validation and file size limit
//clear public/temp automatically

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, tempDir)
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage,
    limits: {fileSize: 5*1024*1024} //5MB limit
});

export { upload };

