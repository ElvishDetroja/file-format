import { handleDownloadClick } from "./../components/jstocsv";

function JSToCSV() {
  //
  return (
    <button
      onClick={() => {
        handleDownloadClick("data.csv");
      }}
    >
      JS to CSV
    </button>
  );
}

export default JSToCSV;
