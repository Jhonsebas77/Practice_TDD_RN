import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('App', () => {
  describe('#Text', () => {
    it('should render the word "Length" in testId rectangleLengthText', () => {
      const app = shallow(<App />);
      const text = app.find("[testID='rectangleLengthText']").dive().text();
      expect(text).toEqual('Length');
    });
    it('should render the word "Width" in testId rectangleWidthText', () => {
      const app = shallow(<App />);
      const text = app.find("[testID='rectangleWidthText']").dive().text();
      expect(text).toEqual('Width');
    });
  });
  describe('#TextInput', () => {
    it('should render the input in testId rectangleLengthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleLengthInput']");
      expect(input).toHaveLength(1);
    });
    it('should render the input in testId rectangleWidthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleWidthInput']");
      expect(input).toHaveLength(1);
    });
  });
  describe('#TouchableHighlight', () => {
    it('should render the button with testID rectangleAreaButton', () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']");
      expect(button).toHaveLength(1);
    });
    it('should render the button with testID rectangleAreaButton and text "calculate"', () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']").dive();
      const text = button.find('Text').dive().text();
      expect(text).toEqual("Calculate");
    });
  });
});