import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

/*
  The FlexItem Component
*/
const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  ${ (props) => props && css`
    order: ${props.order};
    flex-grow: ${props.flexGrow};
    flex-shrink: ${props.flexShrink};
    flex-basis: ${props.flexBasis};
    flex: ${props.flex};
    align-self: ${props.alignSelf};
  `}
  
`;

/*
  The FlexItem component default props values
*/
FlexItem.defaultProps = {
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: '',
  flex: '',
  alignSelf: '',
};

/*
  The FlexItem component proptypes
*/
FlexItem.propTypes = {
  /*
    The order property specifies the order of the flex items.
  */
  order: PropTypes.number,
  /*
    The flex-grow property specifies how much a flex item will
    grow relative to the rest of the flex items.
  */
  flexGrow: PropTypes.number,
  /*
    The flex-shrink property specifies how much a flex item will
    shrink relative to the rest of the flex items.
  */
  flexShrink: PropTypes.number,
  /*
    The flex-basis property specifies the initial length of a flex item.
  */
  flexBasis: PropTypes.string,
  /*
    The flex property is a shorthand property for the
    flex-grow, flex-shrink, and flex-basis properties.
  */
  flex: PropTypes.string,
  /*
    The align-self property specifies the alignment for the selected item
    inside the flexible container. The align-self property overrides
    the default alignment set by the container's align-items property.
  */
  alignSelf: PropTypes.oneOf([
    'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline',
  ]),
};

export default FlexItem;
