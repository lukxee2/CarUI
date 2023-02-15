import { Link } from 'react-router-dom';

export default function SettingsList() {
  return (
    <>
      <Link to="/" className="settings_row">
        Back
      </Link>
      <Link to="wifi" className="settings_row">
        Wifi
      </Link>
      <Link to="customization" className="settings_row">
        Customization
      </Link>
    </>
  );
}