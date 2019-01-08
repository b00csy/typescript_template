import { getLocale } from '../app/appSelector';

const state = {
    app: {
        textFromInputBox: 'basicstring',
    },
    intl: {
        locale: 'en'
    }
}

describe('App selector', () => {
    it('getLocal selector', () => {
        expect(getLocale(state)).toEqual('angol');
    })
})