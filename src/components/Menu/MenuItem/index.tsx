import React from 'react'
import { themeColors } from 'styles/theme'

import IconExporter, { dict } from 'components/IconExporter'

import * as s from './styles'

interface IMenuItem {
  id: number
  iconName: keyof typeof dict
  color: keyof typeof themeColors
  text: string
  selectedItem: boolean
  onClick: (clickedItem: number) => void
}

const MenuItem: React.FC<IMenuItem> = ({
  id,
  iconName,
  color,
  text,
  selectedItem,
  onClick,
}) => (
  <s.MenuItem onClick={() => onClick(id)}>
    <s.Border selectedItem={selectedItem} />
    <s.Content>
      <IconExporter name={iconName} color={color} />
      <s.Text>{text}</s.Text>
    </s.Content>
  </s.MenuItem>
)

export default MenuItem
