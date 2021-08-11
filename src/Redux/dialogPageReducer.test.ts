import {v1} from 'uuid';
import {
    addMessageCallbackAC,
    dialogPageReducer,
    InitDialogPageStateType,
    updateNewMessageTextAC
} from './dialogPageReducer';

let startState:InitDialogPageStateType
//type StartState = typeof startState
/**
 В идеале хотелось бы так типизировать, что бы смена инициализационного стейта не несло ошибку в тестах,
 либо будет необходимость сначала писать тесты на редюсер, а потом другую логику. (Вопросик к ментору)
 */
beforeEach(() => {
    startState = {

        dialogsData: [
            {
                id: v1(),
                name: 'Igor',
                avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
            },
            {
                id: v1(),
                name: 'Maryna',
                avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/2/d1b23ad972e736b7c0510b288875c3b6-bpthumb.jpg',
            },
            {
                id: v1(),
                name: 'Ragnar',
                avatar: 'https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg',
            },
            {
                id: v1(),
                name: 'Ruslan',
                avatar: 'https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg',
            },
        ],
        newTextMassages: '',
        massagesData: [
            {id: v1(), massage: 'Hi!'},
            {id: v1(), massage: 'How are you?'},
            {id: v1(), massage: 'Hey!'},
            {id: v1(), massage: 'Hello my friends'},

        ]
    }
})

test('correct message should be added to up list', () => {

const state = dialogPageReducer(startState,addMessageCallbackAC('new message'))

    expect(state.massagesData[4].massage).toBe('new message')
    expect(state.massagesData[4].id).toBeDefined()
    expect(state.massagesData.length).toBe(5)

})

test('input text to be update without local state (FLUX architecture)', () => {

    const state = dialogPageReducer(startState,updateNewMessageTextAC('new symbol'))

    expect(state.newTextMassages).toBe('new symbol')

} )