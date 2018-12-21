import {FAIL, SUCCESS} from '@actions/menuWarnList';


const initState = {
    menuDic: {}
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SUCCESS:
            let data = action.obj;

            let useObj = {};
            data.forEach(item => {
                useObj[item.name] = item.value;
            });

            return {
                menuDic: useObj
            };
        case FAIL:
            return {
                menuDic: {}
            };
        default:
            return state;
    }
}
