import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SendRowWrapper from '../send-row-wrapper'

export default class SendHexDataRow extends Component {
  static propTypes = {
    inError: PropTypes.bool,
    updateSendHexData: PropTypes.func.isRequired,
    updateGas: PropTypes.func.isRequired,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  onInput = (event) => {
    const { updateSendHexData, updateGas } = this.props
    const data = event.target.value.replace(/\n/gu, '') || null
    updateSendHexData(data)
    // TODO gas should be valid, but data inserted here doesn't include the is_human string, so the estimated gas would be wrong
    // and user will not be able to complete the transaction
    // need to consider this postfix string - is_human=0|1 into the gas estimations
    updateGas({ data })
  }

  render() {
    const { inError } = this.props
    const { t } = this.context

    return (
      <SendRowWrapper
        label={`${t('hexData')}:`}
        showError={inError}
        errorType="amount"
      >
        <textarea
          onInput={this.onInput}
          placeholder="Optional"
          className="send-v2__hex-data__input"
        />
      </SendRowWrapper>
    )
  }
}
