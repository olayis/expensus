import numeral from 'numeral';
import { startSetLocale } from '../../actions/locale';
import selectLocale from '../../selectors/locale';

export default (store) => {
  store.dispatch(startSetLocale()).then(() => {
    const currency = store.getState().locale.currency;
    numeral.locale(selectLocale(currency));
  });
};
