"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../styling/ui-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The TextInput component allows you to render a text input component as part of a form.
 * 
 * This component container will be rendered at a maximum width of 1349px with the text input component itself displayed at a maximum width of 600px within the
 * boundaries of that container.
 * 
 * This component can be rendered with or without a character limit based on your preferences. In the event of a character limit being declared then the number of
 * remaining / permitted characters is output and dynamically updated to the user beneath the text input component.
 * 
 * For best results this component is intended for use within the MainContentPanel component and within the scope of a HTML `<form>`.
 */
class TextInput extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      exceededCharacterLimits: false
    };
    this.clearExistingTextEntry = this.clearExistingTextEntry.bind(this);
    this.getCharactersRemaining = this.getCharactersRemaining.bind(this);
    this.handleCharactersRemaining = this.handleCharactersRemaining.bind(this);
    this.setCharacterLimitTextContent = this.setCharacterLimitTextContent.bind(this);
  }

  componentDidMount() {
    this.clearExistingTextEntry();
    this.handleCharactersRemaining();
  }
  /**
   * Clears all existing text entry from the text input component
   */


  clearExistingTextEntry() {
    const textInputElement = document.getElementById(`${this.props.id}`);
    textInputElement.value = '';
  }
  /**
   * Determines the number of characters permitted for entry in
   * the text input component
   * @returns {number}
   */


  getCharactersRemaining() {
    const textInputElement = document.getElementById(`${this.props.id}`);
    return this.props.characterLimit - textInputElement.value.length;
  }
  /**
   * Manages component state for whether the user has exceeded the number
   * of permitted characters in the text input component
   * 
   * Only executed if a character limit has been set
   */


  handleCharactersRemaining() {
    if (this.props.characterLimit > 0) {
      const charactersRemaining = this.getCharactersRemaining();

      if (charactersRemaining < 0 && this.state.exceededCharacterLimits === false) {
        const newState1 = Object.assign({}, this.state, {
          exceededCharacterLimits: true
        });
        this.setState(newState1);
      }

      if (charactersRemaining >= 0 && this.state.exceededCharacterLimits === true) {
        const newState2 = Object.assign({}, this.state, {
          exceededCharacterLimits: false
        });
        this.setState(newState2);
      }

      this.setCharacterLimitTextContent();
    }
  }
  /**
   * Sets the character limit text content
   */


  setCharacterLimitTextContent() {
    const spanElement = document.getElementById(`${this.props.id}-characters-remaining`);
    const charactersRemaining = this.getCharactersRemaining();

    if (charactersRemaining < 0) {
      spanElement.textContent = `You have exceeded the character limit by ${charactersRemaining * -1} character(s)`;
    } else {
      spanElement.textContent = `Characters remaining: ${charactersRemaining}`;
    }
  }

  render() {
    const textInputContainerStyling = 'ajc-text-input-container ajc-text-black ajc-default';
    let textInputLabelStyling = 'ajc-text-input-label';

    if (this.props.addUpperSpacing) {
      textInputLabelStyling += ' ajc-text-input-label-upper-spacing';
    }

    const textInputStyling = 'ajc-text-input ajc-text-black ajc-default';
    let characterLimitStyling = 'ajc-text-input-character-limit ajc-default';

    if (this.props.characterLimit > 0 && this.state.exceededCharacterLimits === false) {
      characterLimitStyling += ' ajc-text-black';
    } else if (this.props.characterLimit > 0 && this.state.exceededCharacterLimits === true) {
      characterLimitStyling += ' ajc-text-red';
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: textInputContainerStyling
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: `${this.props.id}`,
      className: textInputLabelStyling
    }, this.props.labelText), /*#__PURE__*/_react.default.createElement("input", {
      id: `${this.props.id}`,
      name: `${this.props.id}`,
      type: "text",
      className: textInputStyling,
      onChange: this.handleCharactersRemaining
    }), this.props.characterLimit > 0 && /*#__PURE__*/_react.default.createElement("span", {
      id: `${this.props.id}-characters-remaining`,
      className: characterLimitStyling
    }));
  }

}

TextInput.propTypes = {
  /** The unique identifier for the file uploader component */
  id: _propTypes.default.string.isRequired,

  /** Adds additional upper spacing of 30px to the label. By default this spacing is not added to the component. */
  addUpperSpacing: _propTypes.default.bool,

  /** The label text content for the text input component. */
  labelText: _propTypes.default.string,

  /** The character limit for the text input component. */
  characterLimit: _propTypes.default.number
};
TextInput.defaultProps = {
  addUpperSpacing: false,
  labelText: 'Text Input Label Text:',
  characterLimit: 0
};
var _default = TextInput;
exports.default = _default;