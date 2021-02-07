import { userInfo } from '../../actions/userInfo';
import providerData from '../fixtures/providerData';

test('should set up userInfo action object', () => {
  const action = userInfo(providerData);
  expect(action).toEqual({
    type: 'USER_INFO',
    providerData,
  });
});
