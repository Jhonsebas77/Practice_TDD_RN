import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('App', () => {
    describe('#Text reservation code', () => {
        it('should render the reservation code for default', () => {
            const app = shallow(<App />);
            app.setState({
                reservation: 'ABC-DEF-GHJ'
            });
            const text = app.find("[testID='reserveCode']").dive().text();
            expect(text).toEqual('ABC-DEF-GHJ');
        });
    });
});