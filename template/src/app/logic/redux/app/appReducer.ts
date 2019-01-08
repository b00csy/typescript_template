import produce from 'immer';
import { TEXT_TO_STORE } from '../../saga/app/appActions';

export interface IApp {
    textFromInputBox: string;
}

const initalizeState: IApp = {
    textFromInputBox: 'basictext',
};

export default (state = initalizeState, action: {type: string, payload: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case TEXT_TO_STORE:
                draft.textFromInputBox = action.payload;
                return draft;
            default:
                return state;
        }
});