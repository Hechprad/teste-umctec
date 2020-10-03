import React from 'react'

import Menu from 'components/Menu'

import * as s from './styles'

const Activities: React.FC = () => {
  const title = 'Activities page'

  return (
    <s.Wrapper>
      <Menu />
      <s.PageTitle>{title}</s.PageTitle>
    </s.Wrapper>
  )
}

export default Activities
