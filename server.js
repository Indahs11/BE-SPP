const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const petugas = require("./router/petugas")
const kelas = require("./router/kelas")
const siswa = require("./router/siswa")
const spp = require("./router/spp")
const pembayaran = require("./router/pembayaran")
app.use("/store/api/v1/petugas", petugas)
app.use("/store/api/v1/kelas", kelas)
app.use("/store/api/v1/siswa", siswa)
app.use("/store/api/v1/spp", spp)
app.use("/store/api/v1/pembayaran", pembayaran)

app.use(express.static(__dirname))

app.listen(8000, () => {
    console.log("server run on port 8000");
})
