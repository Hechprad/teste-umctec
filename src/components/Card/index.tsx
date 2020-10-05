import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'

import { ICard } from 'store/modules/Cards/types'
import { formatMoney } from 'utils'

import IconExporter from 'components/IconExporter'

import * as s from './styles'

interface ICardComponent {
  cardData: ICard
  checked: boolean
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardComponent: React.FC<ICardComponent> = ({
  cardData,
  checked,
  handleCheckboxChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (checked) {
      setIsChecked(true)
    }
  }, [checked])

  const handleDocuments = (): React.ReactNode =>
    cardData.hasPendingDocument ? (
      <IconExporter
        name="unreadDocument"
        color="gray4"
        width={25}
        height={25}
      />
    ) : (
      <IconExporter name="document" color="gray4" width={25} height={25} />
    )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked)
    handleCheckboxChange(event)
  }

  return (
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
        <s.InputWrapper>
          <input
            name={`${cardData.id}`}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
        </s.InputWrapper>
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
          {cardData.showAttachment ? (
            <IconExporter
              name="attachment"
              color="gray4"
              width={25}
              height={25}
            />
          ) : null}
          {cardData.showDocument && handleDocuments()}
        </s.EndItems>
      </s.Footer>
    </s.Wrapper>
  )
}

export default CardComponent
