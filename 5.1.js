// script.js

// ดึงข้อมูลจาก LocalStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todoList = document.getElementById('todoList');
    
    // ล้างรายการที่มีอยู่ก่อน
    todoList.innerHTML = '';

    // แสดงรายการที่เก็บอยู่ใน LocalStorage
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// ฟังก์ชันสำหรับเพิ่ม Task
function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    
    if (task === '') {
        alert('Please enter a task!');
        return;
    }
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);  // เพิ่มรายการใหม่
    localStorage.setItem('tasks', JSON.stringify(tasks));  // เก็บข้อมูลลง LocalStorage

    input.value = '';  // เคลียร์ input
    loadTasks();  // โหลดข้อมูลใหม่
}

// ฟังก์ชันสำหรับลบ Task
function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);  // ลบรายการที่เลือก
    localStorage.setItem('tasks', JSON.stringify(tasks));  // เก็บข้อมูลหลังการลบ

    loadTasks();  // โหลดข้อมูลใหม่
}

// เรียกใช้ฟังก์ชัน loadTasks เมื่อเริ่มต้นหน้าเว็บ
window.onload = loadTasks;
