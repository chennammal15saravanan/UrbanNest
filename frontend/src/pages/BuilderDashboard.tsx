import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  Bell, 
  User, 
  LogOut, 
  Settings as SettingsIcon, 
  HelpCircle, 
  Plus,
  Home,
  BarChart3,
  FileText,
  Users,
  Calendar
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dashboard components
const Overview = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Active Projects</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Pending Approvals</h3>
        <p className="text-3xl font-bold text-amber-500 mt-2">3</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Completed Projects</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">12</p>
      </div>
    </div>
    
    <div className="mt-8 bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="border-b pb-3 last:border-0">
            <p className="text-gray-800">Project update for Riverside Apartments</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">My Projects</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
        <Plus className="w-5 h-5 mr-2" />
        New Project
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { name: 'Riverside Apartments', location: 'New York', status: 'In Progress', completion: '65%' },
            { name: 'Sunset Villas', location: 'Los Angeles', status: 'Planning', completion: '10%' },
            { name: 'Mountain View Condos', location: 'Denver', status: 'Completed', completion: '100%' },
            { name: 'Harbor Heights', location: 'Seattle', status: 'In Progress', completion: '45%' },
            { name: 'Central Park Residences', location: 'Chicago', status: 'Planning', completion: '5%' },
          ].map((project, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{project.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{project.location}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {project.completion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">View</a>
                <a href="#" className="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SettingsPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="Doe Construction LLC" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="+1 (555) 000-0000" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div></div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Help = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'How do I create a new project?', a: 'Click on the "New Project" button in the Projects section and fill out the required information.' },
              { q: 'How can I invite team members?', a: 'Go to the Project details page and click on "Team" tab, then use the "Invite Member" button.' },
              { q: 'How do I update project status?', a: 'Open the project, go to "Details" tab, and use the status dropdown to change the current status.' },
              { q: 'Can I export project data?', a: 'Yes, on any project page, look for the "Export" button in the top-right corner.' },
            ].map((faq, idx) => (
              <div key={idx} className="border-b pb-4 last:border-0">
                <h4 className="font-medium text-gray-900">{faq.q}</h4>
                <p className="text-gray-600 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Support</h3>
          <p className="text-gray-600 mb-4">Need more help? Our support team is available 24/7.</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Email Support
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function BuilderDashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCloseModal = () => setShowNewProjectModal(false);
  const handleShowModal = () => setShowNewProjectModal(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4 flex items-center">
          <Building2 className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold">Builder Portal</span>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-1">
            <a href="/builder/dashboard" className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-md">
              <Home className="h-5 w-5 mr-3" />
              Dashboard
            </a>
            <a href="/builder/dashboard/projects" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <FileText className="h-5 w-5 mr-3" />
              Projects
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <BarChart3 className="h-5 w-5 mr-3" />
              Analytics
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <Users className="h-5 w-5 mr-3" />
              Clients
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <Calendar className="h-5 w-5 mr-3" />
              Schedule
            </a>
          </div>
          <div className="px-4 mt-8 pt-6 border-t border-blue-700">
            <a href="/builder/dashboard/settings" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <SettingsIcon className="h-5 w-5 mr-3" />
              Settings
            </a>
            <a href="/builder/dashboard/help" className="flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md">
              <HelpCircle className="h-5 w-5 mr-3" />
              Help & Support
            </a>
            <button 
              onClick={handleSignOut}
              className="w-full flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-md"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex-1 flex">
              <div className="max-w-lg w-full lg:max-w-xs relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search projects..."
                  type="search"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell className="h-6 w-6" />
              </button>
              
              <div className="ml-4 relative">
                <div>
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <User className="h-5 w-5" />
                    </div>
                  </button>
                </div>
                
                {showProfileMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <a href="/builder/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </a>
                    <a href="/builder/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Center button for new project */}
          <div className="px-4 py-3 border-t border-gray-200 flex justify-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center"
              onClick={handleShowModal}
            >
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </button>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>

        {/* New Project Modal */}
        <Modal show={showNewProjectModal} onHide={handleCloseModal} size="lg" scrollable>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Project Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter project name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Start Date:</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>End Date:</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Estimated Cost (INR):</Form.Label>
                <Form.Control type="number" placeholder="Enter numeric values only" />
              </Form.Group>

              <h4>Phases</h4>
              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Land & Pre-Construction Phase"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Foundation & Structural Construction"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Superstructure Construction"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Internal & External Works"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Final Installations & Interior Work"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Testing & Quality Checks"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label="Handover & Completion"
                  defaultChecked
                />
                <Form.Control type="number" placeholder="%" className="mt-2" style={{ width: '100px' }} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleCloseModal}>
              Save Project
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}