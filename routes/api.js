
// import StudentController
import StudentController from '../controllers/StudentController.js';
import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// student routes
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
export default router;
