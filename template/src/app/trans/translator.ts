import { addLocaleData } from 'react-intl';
import * as enLocaleData from 'react-intl/locale-data/en';
import * as huLocaleData from 'react-intl/locale-data/hu';
import huMessages from './hu';
import enMessages from './en';

addLocaleData([...enLocaleData, ...huLocaleData]);

const formatTranslationMessages = (locale: any, messages: any) => {
  const defaultFormattedMessages: any = locale !== 'en'
    ? formatTranslationMessages('en', enMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== 'en'
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enMessages),
  hu: formatTranslationMessages('hu', huMessages),
};