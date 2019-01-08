import { TEXT_FROM_INPUTBOX } from '../../saga/app/appActions';
import appReducer from '../app/appReducer';

describe('app reducer test', () => {
    it('it should change textFromInputBox', () => {
        expect(appReducer(undefined, {type: TEXT_FROM_INPUTBOX, payload: 'something'})).toEqual({
            textFromInputBox: 'basictext',
        });
    });
});