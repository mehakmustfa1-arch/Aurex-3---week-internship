import { useState } from 'react';
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    onAddTask(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} style={{display:'flex', gap:'10px', margin:'20px 0'}}>
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="New task likho..." style={{flex:1, padding:'8px'}} />
      <button type="submit">Add</button>
    </form>
  );
}
export default TaskForm;