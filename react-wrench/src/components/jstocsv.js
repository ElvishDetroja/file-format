const data = [
  {
    firstName: "Alexandar",
    lastName: "Dadario",
  },
  {
    firstName: "Angelina",
    lastName: "Joly",
  },
  {
    firstName: "Jenifer",
    lastName: "Lawrence",
  },
];

function jstocsv(data) {
  //
  const refinedData = [];

  const titleKeys = Object.keys(data[0]);
  refinedData.push(titleKeys);

  data.forEach((item) => {
    refinedData.push(Object.values(item));
  });

  let csvContent = "";

  refinedData.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const objUrl = URL.createObjectURL(blob);

  return objUrl;
}

function handleDownloadClick(filename) {
  const url = jstocsv(data);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export { data, jstocsv, handleDownloadClick };
