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
  describe('#UpdateState', () => {
    it('should update the state of length 0, when an input is 0 and received by testId rectangleLengthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleLengthInput']");
      input.simulate('ChangeText', 0);
      expect(app.state().length).toEqual(0);
    });
    it('should update the state of width 0, when an input is 0 and received by testId rectangleWidthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleWidthInput']");
      input.simulate('ChangeText', 0);
      expect(app.state().width).toEqual(0);
    });
    it('should calculate the area, which is 0 when testID rectangleAreaButton, is pressed', () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']");
      button.simulate('press');
      expect(app.state().area).toEqual(0);
    });
  });
  describe('#Calculate the area', () => {
    it('should calculate the area, which is 100 when testID rectangleAreaButton, is pressed and length is 10 and width is 10', () => {
      const app = shallow(<App />);
      app.setState({
        length: 10,
        width: 10
      });
      const button = app.find("[testID='rectangleAreaButton']");
      button.simulate('press');
      expect(app.state().area).toEqual(100);
    });
    it('should render the word 0, when the area state is 0 in testId rectangleAreaResult', () => {
      const app = shallow(<App />);
      app.setState({
        area: 0
      });
      const text = app.find("[testID='rectangleAreaResult']").dive().text();
      expect(text).toEqual("0");
    });
  });
});