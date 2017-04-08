import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Example from '../components/Example/Example';
import * as exampleActions from '../store/example/actions';
import * as exampleItemsActions from '../store/exampleItems/actions';

export default connect(
  (state) => ({
    text: state.example.text,
    items: state.exampleItems,
  }),
  (dispatch) => ({
    actions: bindActionCreators({
      ...exampleActions,
      ...exampleItemsActions,
    }, dispatch),
  }),
)(Example);
