import { TEXT_TO_STORE, actions } from '../app/appActions';

describe('App action test', () => {
    it('Text to store test', () => {
        const payload: string = 'Humor';
        const textInputBoxAction = {
            type: TEXT_TO_STORE,
            payload
        }
        expect(actions.textInputBox(payload)).toEqual(textInputBoxAction);
    });
})