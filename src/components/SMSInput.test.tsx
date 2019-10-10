import { mount } from 'enzyme';
import SMSInput from './SMSInput';

describe('SMSInput', () => {
  const renderSMSInput = ({maxLength}: {maxLength: number;}) =>
    mount(<SMSInput maxLength={maxLength} />);

  it('should render the component', () => {
    const wrapper = renderSMSInput({maxLength: 10});
    
    expect(wrapper.exists(SMSInput)).toBe(true);
  });
});
