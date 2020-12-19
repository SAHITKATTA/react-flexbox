import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

/*
  The FlexContainer Component
*/
const FlexContainer = styled.div`
  // The flex container becomes flexible by setting the display property to flex
  display: flex; 
  background-color: DodgerBlue;
  ${ (props) => props && css`
    flex-direction: ${props.flexDirection};
    flex-wrap: ${props.flexWrap};
    flex-flow: ${props.flexFlow};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
  `}
`;

/*
  The FlexContainer component default props values
*/
FlexContainer.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexFlow: '',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
};

/*
  The FlexContainer component proptypes
*/
FlexContainer.propTypes = {
  /*
    The flex-direction property defines in which direction
    the container wants to stack the flex items.
  */
  flexDirection: PropTypes.oneOf([
    'row', 'row-reverse', 'column', 'column-reverse',
  ]),
  /*
    The flex-wrap property specifies whether the flex items should wrap or not.
  */
  flexWrap: PropTypes.oneOf([
    'wrap', 'nowrap', 'wrap-reverse',
  ]),
  /*
    The flex-flow property is a shorthand property for
    setting both the flex-direction and flex-wrap properties.
  */
  flexFlow: PropTypes.oneOf([
    'row wrap', 'row nowrap', 'row wrap-reverse', 'row-reverse wrap',
    'row-reverse nowrap', 'row-reverse wrap-reverse', 'column wrap',
    'column nowrap', 'column wrap-reverse', 'column-reverse wrap',
    'column-reverse nowrap', 'column-reverse wrap-reverse',
  ]),
  /*
    The justify-content property is used to align the flex items.
  */
  justifyContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'space-evenly',
  ]),
  /*
    The align-items property is used to align the flex items.
  */
  alignItems: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center', 'stretch', 'baseline',
  ]),
  /*
    The align-content property is used to align the flex lines.
  */
  alignContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'stretch', 'space-between', 'space-around',
  ]),
};

export default FlexContainer;
