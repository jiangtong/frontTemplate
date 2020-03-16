function sum(a, b) {
    return a + b;
}

beforeAll(() => {
    console.log('global before all');
});

afterAll(() => {
    console.log('global after all');
});

beforeEach(() => {
    console.log('global before each');
});

afterEach(() => {
    console.log('global after each');
});

describe('test1', () => {
    beforeAll(() => {
        console.log('test1 before all');
    });

    afterAll(() => {
        console.log('test1 after all');
    });

    beforeEach(() => {
        console.log('test1 before each');
    });

    afterEach(() => {
        console.log('test1 after each');
    });

    it('test sum', () => {
        expect(sum(2, 3)).toEqual(5);
    });

    it('test mutil', () => {
        expect(sum(2, 3)).toEqual(5);
    });
});
