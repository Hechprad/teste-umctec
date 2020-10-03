import React from 'react'
import { v4 } from 'uuid'
import { themeColors } from 'styles/theme'

import IconExporter, { dict } from 'components/IconExporter'
import MenuItem from './MenuItem'

import * as s from './styles'

const Menu: React.FC = () => {
  const menuItems: {
    id: number
    iconName: keyof typeof dict
    text: string
    color: keyof typeof themeColors
    selectedItem: boolean
  }[] = [
    {
      id: 1,
      text: 'Minhas atividades',
      iconName: 'accounts',
      color: 'blue2',
      selectedItem: false,
    },
    {
      id: 2,
      text: 'Todas as contas',
      iconName: 'user',
      color: 'gray3',
      selectedItem: false,
    },
    {
      id: 3,
      text: 'Usuários',
      iconName: 'user',
      color: 'gray3',
      selectedItem: false,
    },
    {
      id: 4,
      text: 'Desempenho',
      iconName: 'dashboard',
      color: 'gray3',
      selectedItem: false,
    },
    {
      id: 5,
      text: 'Dashboard',
      iconName: 'accounts',
      color: 'gray3',
      selectedItem: true,
    },
  ]

  const handleClick = (clickedItem: number): void => {
    console.log(clickedItem)
  }

  return (
    <s.Wrapper>
      <s.MenuLogo>
        <IconExporter name="brand" color="white1" width={100} height="100%" />
      </s.MenuLogo>
      {menuItems.map(item => (
        <MenuItem
          key={v4()}
          id={item.id}
          iconName={item.iconName}
          color={item.color}
          text={item.text}
          selectedItem={item.selectedItem}
          onClick={handleClick}
        />
      ))}
    </s.Wrapper>
  )
}

export default Menu
