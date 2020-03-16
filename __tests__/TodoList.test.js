import { shallow, render, mount } from 'enzyme';
import React from 'react';
import TodoList from './component/TodoList';

const props = {
    list: ['first', 'second', 'third'],
    deleteTodo: jest.fn()
};

const setup = () => {
    const wrapper = shallow(<TodoList {...props} />);
    return {
        props,
        wrapper
    };
};

const setupByRender = () => {
    const wrapper = render(<TodoList {...props} />);
    return {
        props,
        wrapper
    };
};

const setupByMount = () => {
    const wrapper = mount(<TodoList {...props} />);
    return {
        props,
        wrapper
    };
};

it('should has Button', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Button').length).toBe(3);
});

it('should render 2 item', () => {
    const { wrapper } = setupByRender();
    expect(wrapper.find('button').length).toBe(3);
});

it('click item to be done', () => {
    const { wrapper } = setupByMount();
    wrapper
        .find('Button')
        .at(0)
        .simulate('click');
    expect(props.deleteTodo).toBeCalled();
});

test('call Component render', () => {
    const componentDidMountSpy = jest.spyOn(
        TodoList.prototype,
        'componentDidMount'
    );
    const { wrapper } = setup();
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockRestore();
});

// 使用instance函数来取得组件的实例，并用spyOn方法来mock实例上的内部方法，然后用这个实例去调用那个内部方法，就可以用替身来判断这个内部函数是否被调用。
// 如果内部方法是用箭头函数来定义的时候，需要对实例进行mock；如果内部方法是通过正常的方式或者bind的方式定义的，那么需要对组件的prototype进行mock。
// 其实对生命周期或者内部函数的测试，可以通过一些state的改变进行判断，因为这些函数的调用一般都会对组件的state进行一些操作。
it('calls component handleTest', () => {
    // class中使用箭头函数来定义方法
    const { wrapper } = setup();
    const spyFunction = jest.spyOn(wrapper.instance(), 'handleTest');
    wrapper.instance().handleTest();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
});

it('calls component handleTest2', () => {
    //在constructor使用bind来定义方法
    const spyFunction = jest.spyOn(TodoList.prototype, 'handleTest2');
    const { wrapper } = setup();
    wrapper.instance().handleTest2();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
});
