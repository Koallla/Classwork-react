import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement, buttonDecrementDisable }) => (
  <>
    <button
      // onClick={buttonDecrementDisable && onDecrement}
      onClick={buttonDecrementDisable ? onDecrement : null}
      type="button"
      style={{
        backgroundColor: buttonDecrementDisable ? '#2196f3' : '#0000001f',
        color: buttonDecrementDisable
          ? '#ffffff'
          : '#00buttonDecrementDisable ? onDecrement : null000042',
      }}
    >
      -
    </button>
    <button
      onClick={buttonDecrementDisable ? onIncrement : null}
      type="button"
      style={{
        backgroundColor: buttonDecrementDisable ? '#2196f3' : '#0000001f',
        color: buttonDecrementDisable ? '#ffffff' : '#00000042',
      }}
    >
      +
    </button>
  </>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  buttonDecrementDisable: PropTypes.bool.isRequired,
};

export default Controls;
