// TODO: import module bila dibutuhkan di sini

const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  //baca file pertama
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      return err;
    }
    //baca file kedua
    fs.readFile(file2, "utf-8", (err, data2) => {
      if (err) {
        return err;
      }

      //baca file ketiga
      fs.readFile(file3, "utf-8", (err, data3) => {
        if (err) {
          return err;
        }

        dataAkhir = [];
        //push hasil1
        dataAkhir.push(JSON.parse(data1).message.split(" ")[1]);
        //push hasil2
        JSON.parse(data2).forEach((element) => {
          dataAkhir.push(element.message.split(" ")[1]);
        });
        //push hasil3
        JSON.parse(data3).forEach((element) => {
          dataAkhir.push(element.data.message.split(" ")[1]);
        });
        // return fungsi callback
        return fnCallback(err, dataAkhir);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
