// TODO 3: Import data students dari folder data/students.js
// code here
import students from "../data/students.js";

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    const data = students;
    res.send(data);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const { name, age } = req.body;

    const id = students.length + 1;

    students.push({ id, name, age });

    res.send({ id, name, age });
  }

  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params;

    const { name, age } = req.body;

    const student = students.find((student) => student.id === Number(id));

    if (!student) {
      res.status(404).send({ message: "Student not found" });
    }

    student.name = name;
    student.age = age;

    res.send(student);
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params;

    const student = students.find((student) => student.id === Number(id));

    if (!student) {
      res.status(404).send({ message: "Student not found" });
    }

    const index = students.indexOf(student);

    students.splice(index, 1);

    res.send({ message: "Student deleted" });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
export default object;