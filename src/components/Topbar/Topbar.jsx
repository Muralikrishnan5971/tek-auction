import tekionlogo from "../../assets/tekion-logo.gif";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="root_header-flex">
      <img className="root_icon-logo" src={tekionlogo} alt="Logo" />
      <div className="root_header-avatar-flex">
        <div className="root_avatar-square">MM</div>
        <p className="root_dealer-name">Modern Motors Cars</p>
      </div>
    </div>
  );
}

export default Topbar;
