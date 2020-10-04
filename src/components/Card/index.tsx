import React from 'react'
import { v4 } from 'uuid'

import { ICard } from 'store/modules/Cards/types'
import { formatMoney } from 'utils'

import IconExporter from 'components/IconExporter'

import * as s from './styles'

interface ICardComponent {
  cardData: ICard
}

const CardComponent: React.FC<ICardComponent> = ({ cardData, ...rest }) => (
  <s.Wrapper {...rest}>
    <s.Header>
      <s.StartItems>
        <s.Days status={cardData.status}>
          <s.DaysText>{cardData.days}</s.DaysText>
          <s.Text color="white1">{cardData.days > 1 ? 'Dias' : 'Dia'}</s.Text>
        </s.Days>
        <s.TitleContent>
          <s.Name>{cardData.patientName}</s.Name>
          <s.LabelText>{cardData.healthInsurance}</s.LabelText>
        </s.TitleContent>
      </s.StartItems>
      {/* <s.EndItems>
      <s.Checkbox />
      </s.EndItems> */}
    </s.Header>
    <s.LabelsWrapper>
      {cardData.billSources.map(item => (
        <s.Label key={v4()}>
          <s.LabelText>{item.label}</s.LabelText>
          <s.LabelValue>{item.value}</s.LabelValue>
        </s.Label>
      ))}
    </s.LabelsWrapper>
    <s.Amount>
      <s.AmountValue>{formatMoney(cardData.value)}</s.AmountValue>
      <s.Tag>
        <s.Pendencies>{`${cardData.pendencies} ${
          cardData.pendencies > 1 ? 'pendências' : 'pendência'
        }`}</s.Pendencies>
      </s.Tag>
    </s.Amount>
    <s.Footer>
      <s.StartItems>
        {cardData.billTypes.map(billType => (
          <s.BillType key={v4()}>
            <s.LabelValue>{billType}</s.LabelValue>{' '}
          </s.BillType>
        ))}
      </s.StartItems>
      <s.EndItems>
        <IconExporter name="attachment" color="gray4" width={25} height={25} />
        <IconExporter name="document" color="gray4" width={25} height={25} />
      </s.EndItems>
    </s.Footer>
  </s.Wrapper>
)

export default CardComponent
