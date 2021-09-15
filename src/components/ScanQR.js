import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";
import { MenuContext } from "../contexts";

function ScanQR(props) {
  const history = useHistory();
  const value = useContext(MenuContext);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      const table = result.match(/\d+/g);
      value.setQrScanned(true);
      value.setTableNo(table[0]);
      console.log(value.tableNo);
      // sleep(10000);
      history.push("/menu");
    }
  };

  return (
    <div className="scanqr container">
      <div className="w-100">
        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
        {/* <h3>Scanned By WebCam Code: {scanResultWebCam}</h3> */}
        {value.tableNo && (
          <h4 className="alert alert-success text-center ">
            Table No.: {value.tableNo}
          </h4>
        )}
      </div>
    </div>
  );
}

export default ScanQR;
