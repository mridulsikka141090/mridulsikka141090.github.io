import './QR.css';
import QRCodePng from './assets/images/image-qr-code.png';

const QR = () => {
  return (
    <div className="qr-app">
      <div className="parent container d-flex justify-content-center align-items-center h-100">
      <div className="card">
        <img src={QRCodePng} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Improve your front-end skills by building projects</h5>
          <p className="card-text">Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default QR;
