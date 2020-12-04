
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import { en } from './en';
import { fa } from './fa';
import { Setup } from '../../settings/setup';

interface ILocalization extends LocalizedStringsMethods { 
  last_course: string;
  last_article: string;
  follow_me: string;
  contact_us: string;
  about_us: string;
  registration: string;
  Home: string;
  required_field:string;
  reset:string;
  email_not_correct:string
}

export const Localization: ILocalization = new LocalizedStrings({
  fa: fa,
  en: en,
  // ar: ar
});
Localization.setLanguage(Setup.internationalization.flag);