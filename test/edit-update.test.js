/*
@jest-environment jsdom
*/
import Tasklist from "../src/utility/taskListUtility";
import { renderListUpdate } from "../src/views/render-list-update";
import LocalStorageUtility from "../src/data/local-storage-utility";
import { experiments } from "webpack";


const taskListObj = new Tasklist();
const task1 = 'task 1';
const task2 = 'task 2';
const task3 = 'task 3';
const task2New= 'task 2 modified';

//Add to LocalStorage
beforeAll(() => {
    taskListObj.addTask(task1);
    taskListObj.addTask(task2);
    taskListObj.addTask(task3);
    // render to DOM
    renderListUpdate({
        taskData: taskListObj, 
        listContainer: document.body, 
    });
});

describe('To check functionalities edit, update, and clear are working properly', () => {
    // Check Edit task 2  On Local Storage
    test('edit task 2 test', () => {
        taskListObj.renameTask(3, task2New); 
        expect(LocalStorageUtility.getAllTaskFromLocalStorage())
        .toEqual([
            {_description: `${task1}`, _id: 2, _completed: false },
            {_description: `${task2New}`, _id: 3, _completed: false },
            {_description: `${task3}`, _id: 4, _completed: false } 
        ]);
    });
    // Check Edit task 2  On DOM 
    test('Edit task 2 on DOM Test', () => {
        renderListUpdate({
            taskData: taskListObj, 
            listContainer: document.body, 
        });
        
        const newTodoDescription = document.querySelectorAll('.todo__item__description')[1].value;
        expect(newTodoDescription)
        .toBe(task2New);
    })

    //test completed update status
    // On Local Storage
    test('Change completed update test for Task 1 on local storage', () => {
        taskListObj.updateCompleted(task2New, true); 
        const task2Status = taskListObj.data
        .filter((task) => task._description === task2New)[0]._completed;
        console.log(task2Status);
        expect(task2Status).toEqual(true);
    });
    //check status on DOM
    test('Change completed update on DOM', () => {
        renderListUpdate({
            taskData: taskListObj, 
            listContainer: document.body, 
        });
        const task2Element = document.querySelectorAll('.checkbox')[1].checked ; 
        expect(task2Element).toBe(true);
    });

    //clear all task
    // On Local Storage
    test('Remove all task check on local storage', () => {
        taskListObj.removeAllTask(); 
        expect(LocalStorageUtility.getAllTaskFromLocalStorage()).toBeNull();
    });

});