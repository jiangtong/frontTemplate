/** @format */

const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

export const count = {
    state: 111,
    reducers: {
        addBy(state, payload) {
            return state + payload;
        }
    },

    effects: dispatch => ({
        async addByAsync() {
            await delay(1000);
            dispatch.count.addBy(1);
        }

        // async addByAsync(payload, state) {
        //     await delay(1000);
        //     dispatch.count.addBy(1);
        // }
    })
};

export const count2 = {
    state: 111,
    reducers: {
        addBy1(state, payload) {
            return state + payload;
        }
    },
    effects: dispatch => ({
        async addByAsync1() {
            await delay(1000);
            dispatch.count.addBy(1);
        }
        // async addByAsync1(payload, state) {
        //     await delay(1000);
        //     dispatch.count.addBy(1);
        // }
    })
};
