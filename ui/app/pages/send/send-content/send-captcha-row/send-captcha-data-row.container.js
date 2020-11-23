import { connect } from 'react-redux'
import { updateSendHexData } from '../../../../store/actions'
import SendCaptchaDataRowComponent from './send-captcha-data-row.component'

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendCaptchaDataRowComponent)

function mapStateToProps(state) {
  return {
    hexData: state.metamask.send.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSendHexData(data) {
      return dispatch(updateSendHexData(data))
    },
  }
}
