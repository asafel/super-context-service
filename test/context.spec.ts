import { middleware } from '../src/context';
import { getMockReq, getMockRes } from '@jest-mock/express'

const { res, next, mockClear } = getMockRes();
const mockReq = (_str) => getMockReq({});

beforeEach(() => {
    mockClear();
})

test('Should call Next function', () => {
    const mockedReq = mockReq('{"a":1,"b":2}');

    middleware(mockedReq, res, next);
    expect(next).toBeCalled();
});
