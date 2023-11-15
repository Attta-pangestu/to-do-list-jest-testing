/**
 * @jest-environment jsdom
 */

import Tasklist from "../src/utility/taskListUtility";
import { renderListUpdate } from "../src/views/render-list-update";
import ComposeElement from "../src/views/composeElement";
import LocalStorageUtility from "../src/data/local-storage-utility";

// instance for taskList
const taskList = new Tasklist();

// List task to add
const task1 = 'makan popcorn' ; 
const task2 = 'tidur nyenyak' ; 
const task3 = 'task 3'

// LocalStorageTesting 
describe('Check Localstorage and DOM while adding task',() => {
    // Add task 1
    // check in localStorage
    test('add task ke local storage ', () => {
        taskList.addTask(task1);
        expect(LocalStorageUtility.getAllTaskFromLocalStorage())
        .toEqual([{_description: 'makan popcorn', _id: 2, _completed: false }]);
    });

    // Check to DOM 
    test('add Task 1 to DOM', () => {
        renderListUpdate({
            taskData: taskList, 
            listContainer: document.body, 
        });
        const elementTodoContainerCheck = document.querySelectorAll('.todo__item');
        expect(elementTodoContainerCheck.length)
        .toBe(1);
    });

    // Add task 2
    // check in localStorage
    test('add task 2 ke local storage ', () => {
        taskList.addTask(task2);
        expect(LocalStorageUtility.getAllTaskFromLocalStorage())
        .toEqual([
            {_description: 'makan popcorn', _id: 2, _completed: false },
            {_description: "tidur nyenyak", _id: 3, _completed: false }, 
        ]);
    });

    // Check to DOM 
    test('add Task 2 to DOM', () => {
        renderListUpdate({
            taskData: taskList, 
            listContainer: document.body, 
        });
        const elementTodoContainerCheck = document.querySelectorAll('.todo__item');
        expect(elementTodoContainerCheck.length)
        .toBe(2);
    });

    
    // Add task 3
    // check in localStorage
    test('add task 3 ke local storage ', () => {
        taskList.addTask(task3);
        expect(LocalStorageUtility.getAllTaskFromLocalStorage())
        .toEqual([
            {_description: 'makan popcorn', _id: 2, _completed: false },
            {_description: "tidur nyenyak", _id: 3, _completed: false },
            {_description: `${task3}`, _id: 4, _completed: false } 
        ]);
    });

    // Check to DOM 
    test('add Task 3 to DOM', () => {
        renderListUpdate({
            taskData: taskList, 
            listContainer: document.body, 
        });
        const elementTodoContainerCheck = document.querySelectorAll('.todo__item');
        expect(elementTodoContainerCheck.length)
        .toBe(3);
    });
} ); 

// remove items 
describe('Test while remove items', () => {
    // remove task 1 on localStorage
    test('Remove Task 1 From LocalStorage', () => {
        taskList.removeTask(2);
        expect(LocalStorageUtility.getAllTaskFromLocalStorage())
        .toEqual([
            {_description: `${task2}`, _id: 3, _completed: false },
            {_description: `${task3}`, _id: 4, _completed: false } 
        ]);
    });
    // remove task 1 on DOM
    test('Remove Task From DOM ', () => {
        renderListUpdate({
            taskData: taskList, 
            listContainer: document.body, 
        });
        const taskElement = document.querySelectorAll('.todo__item'); 
        expect(taskElement.length)
        .toBe(2);
    });

        // remove task 2 on localStorage
        test('Remove Task 1 From LocalStorage', () => {
            taskList.removeTask(3);
            expect(LocalStorageUtility.getAllTaskFromLocalStorage())
            .toEqual([
                {_description: `${task3}`, _id: 4, _completed: false } 
            ]);
        });
        // remove task 2 on DOM
        test('Remove Task From DOM ', () => {
            renderListUpdate({
                taskData: taskList, 
                listContainer: document.body, 
            });
            const taskElement = document.querySelectorAll('.todo__item'); 
            expect(taskElement.length)
            .toBe(1);
        });

        
        // remove task 3 on localStorage
        test('Remove Task 1 From LocalStorage', () => {
            taskList.removeTask(4);
            expect(LocalStorageUtility.getAllTaskFromLocalStorage())
            .toEqual([]);
        });
        // remove task 3 on DOM
        test('Remove Task From DOM ', () => {
            renderListUpdate({
                taskData: taskList, 
                listContainer: document.body, 
            });
            const taskElement = document.querySelectorAll('.todo__item'); 
            expect(taskElement.length)
            .toBe(0);
        });
});