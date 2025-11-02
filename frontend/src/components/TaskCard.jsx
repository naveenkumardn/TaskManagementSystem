import React from 'react'
import { Edit, Trash2, Calendar, Tag } from 'lucide-react'

function TaskCard({ task, onEdit, onUpdate, onDelete }) {
  const statusColors = {
    todo: 'bg-gray-100 text-gray-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    done: 'bg-green-100 text-green-800',
    archived: 'bg-gray-200 text-gray-600',
  }

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
    urgent: 'bg-purple-100 text-purple-800',
  }

  const formatDate = (dateString) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const handleStatusChange = (newStatus) => {
    onUpdate(task.id, { status: newStatus })
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 flex-1 mr-2">
          {task.title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-gray-500 hover:text-primary-600 transition-colors"
            title="Edit task"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-gray-500 hover:text-red-600 transition-colors"
            title="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Tag size={14} className="text-gray-400" />
          {task.tags.split(',').map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      )}

      {/* Due Date */}
      {task.due_date && (
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
          <Calendar size={14} />
          <span>Due: {formatDate(task.due_date)}</span>
        </div>
      )}

      {/* Status and Priority */}
      <div className="flex gap-2 mb-3">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${
            statusColors[task.status]
          } border-0 outline-none`}
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
          <option value="archived">Archived</option>
        </select>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      {/* Timestamps */}
      <div className="text-xs text-gray-400 pt-3 border-t">
        Created: {formatDate(task.created_at)}
      </div>
    </div>
  )
}

export default TaskCard



