import { action } from 'typesafe-actions';

export const TEXT_FROM_INPUTBOX: string = 'TEXT_FROM_INPUTBOX';
export const TEXT_TO_STORE: string = 'TEXT_TO_STORE';

export const actions = {
    textInputBox: (id: string) => action(TEXT_TO_STORE, id ),
    textToBasictext: () => action(TEXT_FROM_INPUTBOX),
}