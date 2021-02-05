import { userInfo } from '../../actions/userInfo';

test('should set up userInfo action object', () => {
  const providerData = [{ displayName: 'Test', email: 'test@example.com' }];
  const action = userInfo(providerData);
  expect(action).toEqual({
    type: 'USER_INFO',
    providerData,
  });
});
