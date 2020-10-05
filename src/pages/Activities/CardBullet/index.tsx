import React from 'react'

import * as s from './styles'

interface ICardBullet {
  type: 'DELAYED' | 'WARNING' | 'GOOD'
  numberOfCards: number
}
const CardBullet: React.FC<ICardBullet> = ({
  type,
  numberOfCards,
  ...rest
}) => (
  <s.Wrapper {...rest}>
    <s.Circle type={type} />
    <s.Text>{`${numberOfCards} ${
      numberOfCards === 1 ? 'card' : 'cards'
    }`}</s.Text>
  </s.Wrapper>
)

export default CardBullet
