function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'10px', border:'1px solid #ccc', margin:'5px 0'}}>
      <span onClick={()=>onToggle(task.id)} style={{textDecoration: task.completed ? 'line-through' : 'none', cursor:'pointer'}}>
        {task.text}
      </span>
      <button onClick={()=>onDelete(task.id)}>Delete</button>
    </div>
  );
}
export default TaskItem;