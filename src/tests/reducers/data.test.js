import dataReducer from '../../reducers/data';

test('should set default state for data', () => {
  const state = dataReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set deleteSelected status to true', () => {
  const deleteSelected = true;
  const action = {
    type: 'DELETE_DATA_SELECTED',
    deleteSelected,
  };
  const state = dataReducer({}, action);
  expect(state).toEqual({ deleteSelected });
});

test('should set deleteSelected status to false', () => {
  const deleteSelected = false;
  const action = {
    type: 'DELETE_DATA_SELECTED',
    deleteSelected,
  };
  const state = dataReducer({}, action);
  expect(state).toEqual({ deleteSelected });
});
