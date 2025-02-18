import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ViolationManagement from "./ViolationManagement";
import ViewHistory from "./ViewHistory";
import PermitStatus from "./PermitStatus";
import EntryExitLog from "./EntryExitLog";

function AdminDashboardWelcome() {
  return (
    <div className="text-center p-8 bg-gray-900 rounded shadow-md">
      <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Campus Parking Management System</h2>
      <p className="text-gray-300 mb-4">
        As an admin, you can manage parking violations, view parking history, and check permit statuses. 
        Use the navigation menu to access these sections.
      </p>
      <p className="text-gray-400">
        Choose an option from the menu above to get started.
      </p>
    </div>
  );
}

function AdminDashboard({ handleLogout }) { // receiving handleLogout as a prop
  return (
    <>
      {/* navbar content */}
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-teal-400 text-2xl font-bold">Campus Parking Management</h1>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/adminDashboard/entryExitLog" className="hover:text-teal-400 transition duration-200">Entry/Exit Management</Link></li>
          <li><Link to="/adminDashboard/vioManage" className="hover:text-teal-400 transition duration-200">Parking Violations</Link></li>
          <li><Link to="/adminDashboard/viewHist" className="hover:text-teal-400 transition duration-200">Parking History</Link></li>
          <li><Link to="/adminDashboard/permitStatus" className="hover:text-teal-400 transition duration-200">Permit Status</Link></li>
          <li><button onClick={handleLogout} className="hover:text-teal-400 transition duration-200">Logout</button></li>
        </ul>
      </nav>

      {/* internal routes */}
      <div className="bg-gray-800 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route index element={<AdminDashboardWelcome />} />
            <Route path="vioManage" element={<ViolationManagement />} />
            <Route path="viewHist" element={<ViewHistory />} />
            <Route path="permitStatus" element={<PermitStatus />} />
            <Route path="entryExitLog" element={<EntryExitLog />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
