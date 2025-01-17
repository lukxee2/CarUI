import { Outlet } from 'react-router-dom';
import Topbar from 'renderer/components/topbar/topbar';
import Navbar from '../../components/navbar/navbar';
import './settings.scss';

export default function SettingsRoute() {
  return (
    <main className="settings">
      <Topbar />
      <div className="settings_container">
        <Outlet />
      </div>
      <Navbar />
    </main>
  );
}
