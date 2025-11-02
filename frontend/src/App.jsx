import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import { Plus } from 'lucide-react'
import { getTasks, createTask, updateTask, deleteTask } from './services/api'

function App() {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [filters, setFilters] = useState({ status: '', priority: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTasks()
  }, [])

  useEffect(() => {
    filterTasks()
  }, [tasks, filters])

  const loadTasks = async () => {
    try {
      setLoading(true)
      const data = await getTasks()
      setTasks(data)
    } catch (error) {
      console.error('Failed to load tasks:', error)
      alert('Failed to load tasks. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const filterTasks = () => {
    let filtered = [...tasks]

    if (filters.status) {
      filtered = filtered.filter(task => task.status === filters.status)
    }

    if (filters.priority) {
      filtered = filtered.filter(task => task.priority === filters.priority)
    }

    setFilteredTasks(filtered)
  }

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData)
      setTasks([...tasks, newTask])
      setShowForm(false)
    } catch (error) {
      console.error('Failed to create task:', error)
      alert('Failed to create task')
    }
  }

  const handleUpdateTask = async (taskId, taskData) => {
    try {
      const updatedTask = await updateTask(taskId, taskData)
      setTasks(tasks.map(task => task.id === taskId ? updatedTask : task))
      setEditingTask(null)
    } catch (error) {
      console.error('Failed to update task:', error)
      alert('Failed to update task')
    }
  }

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return
    }

    try {
      await deleteTask(taskId)
      setTasks(tasks.filter(task => task.id !== taskId))
    } catch (error) {
      console.error('Failed to delete task:', error)
      alert('Failed to delete task')
    }
  }

  const handleEdit = (task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingTask(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Task Management System
          </h1>
          <p className="text-gray-600">
            Organize your work with intelligent task management
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
          <TaskFilter filters={filters} onFilterChange={setFilters} />
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus size={20} />
            New Task
          </button>
        </div>

        {/* Task Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <TaskForm
                task={editingTask}
                onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}

        {/* Task List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading tasks...</p>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onEdit={handleEdit}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        )}

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-gray-800">{tasks.length}</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-blue-600">
              {tasks.filter(t => t.status === 'todo').length}
            </div>
            <div className="text-sm text-gray-600">To Do</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {tasks.filter(t => t.status === 'in_progress').length}
            </div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-green-600">
              {tasks.filter(t => t.status === 'done').length}
            </div>
            <div className="text-sm text-gray-600">Done</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App



