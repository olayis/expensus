export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        providerData: action.providerData,
      };

    default:
      return state;
  }
};
