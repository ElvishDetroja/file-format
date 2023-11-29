import { exceltojs } from "./../components/exceltojs";

function ExcelToJS() {
  //
  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      try {
        const data = await exceltojs(file);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    }
  }
  //
  return (
    <>
      <div>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
      </div>
    </>
  );
}

export default ExcelToJS;
