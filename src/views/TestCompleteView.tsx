import React, { useEffect } from 'react'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';

const TestCompleteView = () => {

  return (
    <div className="app-container test-complete">
      <BaseWrapper title={''}>
        <BaseWrapperSlot>
          Контент
        </BaseWrapperSlot>
      </BaseWrapper>
    </div>
  )
}

export default TestCompleteView;