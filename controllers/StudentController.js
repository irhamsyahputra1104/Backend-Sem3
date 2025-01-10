// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          // Mengembalikan data yang baru diinsert
          resolve({ id: results.insertId, ...data });
        }
      });
    });
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const student = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: student,
    };

    res.json(data);
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      // Cari student berdasarkan ID
      const student = await Student.find(id);

      if (!student) {
        return res.status(404).json({
          message: "Student not found",
          data: null,
        });
      }

      // Update student
      const updatedStudent = await Student.update(id, req.body);

      const data = {
        message: "Mengupdate data student",
        data: updatedStudent,
      };

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Error mengupdate data student",
        error: error.message,
      });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: "Menghapus data student",
        data: null,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not found",
        data: null,
      };
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
