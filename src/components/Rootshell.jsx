import "./Rootshell.css";

export default function Rootshell() {
  return (
    <header className="App-header">
      <div className="navbar-1">
        <div className="navbar-left">
          <div className="brand">TEKION</div>
          <select className="sales-dropdown">
            <option value="sales">Sales</option>
            {/* Add other options as needed */}
          </select>
        </div>
        <div className="navbar-right">
          <button className="get-help">Get Help</button>
          <button className="notifications">99+</button>
          <button className="messages">Messages</button>
          <div className="profile">
            <div className="profile-initials">MM</div>
            <div className="profile-name">Modern Motors cars</div>
          </div>
        </div>
      </div>
    </header>
  );
}
