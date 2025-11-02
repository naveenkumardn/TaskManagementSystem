import React from 'react'

function TaskFilter({ filters, onFilterChange }) {
  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value,
    })
  }

  return (
    <div className="flex gap-4 items-center">
      <div>
        <label className="text-sm text-gray-600 mr-2">Status:</label>
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">All</option>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-gray-600 mr-2">Priority:</label>
        <select
          value={filters.priority}
          onChange={(e) => handleFilterChange('priority', e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
    </div>
  )
}

export default TaskFilter



