import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
import splash from '../../../public/img/splash.gif';

test('should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should render LoadingPage correctly with props', () => {
  const wrapper = shallow(
    <LoadingPage img={splash} width='262' height='98' hideLoadingText={true} />
  );
  expect(wrapper).toMatchSnapshot();
});
