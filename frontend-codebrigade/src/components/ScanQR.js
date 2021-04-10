import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";
import { MenuContext } from "../contexts";

function ScanQR(props) {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [tableNo, setTableNo] = useState();
  const history = useHistory();
  const value = useContext(MenuContext);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
      const temp = result.match(/\d+/g);
      setTableNo(temp);
      value.setQrScanned(true);
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
        {tableNo && (
          <h4 className="alert alert-success text-center ">
            Table No.: {tableNo}
          </h4>
        )}
      </div>
    </div>
  );
}

export default ScanQR;
