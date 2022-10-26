import { ERootAction } from "../enums"

export const QRootAction: any = [
    {
        type: 'list',
        name: 'rootActionType',
        message: 'which action you want to perform?  ',
        choices: [
            ERootAction.ADD_TASK,
            ERootAction.REMOVE_TASK,
            ERootAction.MARK_AS_DONE,
            ERootAction.LIST_TASKS,
            ERootAction.EXIT
        ]
    }
]