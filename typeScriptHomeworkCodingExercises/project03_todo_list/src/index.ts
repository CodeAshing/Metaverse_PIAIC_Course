const inquirer = require('inquirer');
import { ITask } from "./interfaces";
import { QRootAction, QAddTask, QRemoveTask } from "./questions";
import { ERootAction } from "./enums";

let taskList: ITask[] = [{
    index: 0,
    name: 'Clean room',
    description: 'do this task before 6 pm',
    done: false
}];

let index: number = 1

const addTask = () => {
    inquirer
        .prompt(QAddTask)
        .then((answer: ITask) => {
            answer['index'] = index;
            answer['done'] = false;
            taskList.push(answer);
            index += index;
            console.clear();
            rootFunction();
        }).catch((error: any) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

const removeTask = () => {
    console.log(`TaskS: ${taskList}`)
    inquirer
        .prompt(QRemoveTask)
        .then(({ index }: { index: string }) => {
            taskList = taskList.filter(task => task.index !== Number(index))
            console.clear();
            rootFunction();
        }).catch((error: any) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

const markTaskDone = () => {
    console.log(`TaskS: ${taskList}`)
    inquirer
        .prompt(QRemoveTask)
        .then(({ index }: { index: string }) => {
            taskList = taskList.filter(task => {
                if (task.index === Number(index)) {
                    task.done = true;
                }
                return task
            })
            console.clear();
            rootFunction();
        }).catch((error: any) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

const listTask = () => {
    console.log(`Tasks: ${JSON.stringify(taskList)}`)
    rootFunction();
}

const rootFunction = () => {
    inquirer
        .prompt(QRootAction)
        .then((answer: any) => {
            if (answer.rootActionType === ERootAction.ADD_TASK) {
                addTask()
            } else if (answer.rootActionType === ERootAction.REMOVE_TASK) {
                removeTask()
            } else if (answer.rootActionType === ERootAction.MARK_AS_DONE) {
                markTaskDone();
            } else if (answer.rootActionType === ERootAction.LIST_TASKS) {
                listTask()
            } else {
                console.log('Good Bye, see you soon')
            }
        }).catch((error: any) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

console.clear();
rootFunction()

