import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks found. Add your first task!</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;