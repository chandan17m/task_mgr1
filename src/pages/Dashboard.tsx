import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleLogout = () => {
    // Logout logic will be added here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Back to Home Link */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-600 text-center mb-12">
            Your Tasks
          </h1>

          {/* Task List */}
          <div className="mb-12">
            <ul className="space-y-4">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="text-xl text-gray-700 flex items-start gap-3"
                >
                  <span className="font-semibold text-blue-600 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add Task Section */}
          <form onSubmit={handleAddTask} className="space-y-6 mb-12">
            <div className="space-y-3">
              <label
                htmlFor="newTask"
                className="block text-lg font-semibold text-gray-700"
              >
                New Task
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  id="newTask"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="flex-1 px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter a new task"
                />
                <button
                  type="submit"
                  className="sm:w-48 h-16 bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>

          {/* Logout Button */}
          <div className="pt-8 border-t-2 border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full h-16 bg-gray-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
