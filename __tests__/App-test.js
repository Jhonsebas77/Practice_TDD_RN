import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('App', () => {
    describe('#Text reservation code', () => {
        it('should render the code of reservation in testId reserveCode', () => {
            const app = shallow(<App />);
            const text = app.find("[testID='reserveCode']").dive().text();
            expect(text).toEqual('ABC-DEF-HJ');
        });
    });
});