import db from "../koneksi.js";

export const getMahasiswa = (req, res) => {
  // select semua data dari table mahasiswa
  const sql = "SELECT * FROM mahasiswa";
  // mengirim query ke db mysql
  db.query(sql, (error, result) => {
    // mengirim data ke client browser
    res.send(result);
  });
};

export const getMahasiswaByNim = (req, res) => {
  const nim = req.query.nim;
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createMahasiswa = (req, res) => {
  const { nim, nama_lengkap, kelas, alamat } = req.body;
  const sql =
    "INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?,?,?,?)";
  db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};

export const updateMahasiswa = (req, res) => {
  const nim = req.query.nim;

  const { nama_lengkap, kelas, alamat } = req.body;
  if (nim || nama_lengkap || kelas || alamat) {
    const query = `UPDATE mahasiswa SET nama_lengkap = "${nama_lengkap}", kelas = "${kelas}", alamat = "${alamat}" WHERE nim = ${nim}`;
    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("isi body");
  }
};

export const deleteMahasiswa = (req, res) => {
  const nim = req.query.nim;
  const sql = "DELETE FROM mahasiswa WHERE nim = ?";
  db.query(sql, [nim], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
}