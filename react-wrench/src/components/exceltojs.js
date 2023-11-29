import * as XLSX from "xlsx";

function exceltojs(file) {
  //
  return new Promise((resolve, reject) => {
    //
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const headers = jsonData[0];

      const parsedData = jsonData
        .slice(1)
        .map((row) => {
          let obj = {};

          const hasTrueValue = row.some(
            (value) => ![undefined, null].includes(value)
          );

          if (hasTrueValue) {
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          }
        })
        .filter((value) => ![undefined, null].includes(value));

      resolve(parsedData);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsBinaryString(file);
  });
}

export { exceltojs };