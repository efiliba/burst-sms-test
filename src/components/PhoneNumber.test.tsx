import { mount } from 'enzyme';
import PhoneNumber from './PhoneNumber';

describe('PhoneNumber', () => {
  const renderPhoneNumber = () =>
    mount(<PhoneNumber />);

  it('should render the component', () => {
    const wrapper = renderPhoneNumber();
    
    expect(wrapper.exists(PhoneNumber)).toBe(true);
  });
});
