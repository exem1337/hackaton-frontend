import React, { useEffect } from 'react'
import { TestService } from '../service/test.service'
import BaseWrapper, { BaseWrapperSlot } from '../components/BaseWrapper';

const TestCompleteView = () => {
  const testService = new TestService();

  useEffect(() => {

  }, [])

  return (
    <div className="app-container test-complete">
      <BaseWrapper title={testService.title}>
        <BaseWrapperSlot>
          Контент
        </BaseWrapperSlot>
      </BaseWrapper>
    </div>
  )
}

export default TestCompleteView;