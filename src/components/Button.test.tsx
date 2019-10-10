import { mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const renderButton = ({text}: {text: string;}) =>
    mount(<Button text={text} />);

  it('should render the component', () => {
    const wrapper = renderButton({text: "the button"});
    
    expect(wrapper.exists(Button)).toBe(true);
  });
});
