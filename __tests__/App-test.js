import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('App', () => {
    describe('#Container reservation code', () => {
        it('should render the subtitle fot reservation code', () => {
            const app = shallow(<App />);
            const text = app.find("[testID='subtitleReservationCode']").dive().text();
            expect(text).toEqual('Tu codigo de reserva Bayou es');
        });
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