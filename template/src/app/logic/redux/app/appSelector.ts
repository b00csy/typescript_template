import { IStore } from '../../IStore';
import { createSelector } from 'reselect';

const locale = (state: IStore) => state.intl.locale;

export const getLocale = createSelector([locale], (locale) => {
    if(locale === 'en') {
        return 'angol';
    } else {
        return 'magyar';
    }
});