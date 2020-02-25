import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Example from '../pages/Test/Page404';
const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('Enzyme shallow', function() {
    it('Example component', function() {
        const name = '按钮名';
        let app = shallow(<Example text={name} />);
        let btnName = app.find('button').text();
        console.log('button Name:' + btnName);
    });
});
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
