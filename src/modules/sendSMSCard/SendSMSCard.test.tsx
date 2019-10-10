import { shallow } from 'enzyme';
import SendSMSCard from './SendSMSCard';

describe('SendSMSCard', () => {
  const renderSendSMSCard = () => shallow(<SendSMSCard />);

  it('should render the component', () => {
    const wrapper = renderSendSMSCard();

    expect(wrapper.exists(SendSMSCard)).toBe(true);
  });
});
