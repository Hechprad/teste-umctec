import React from 'react'
import { useHistory } from 'react-router-dom'
import { v4 } from 'uuid'

import IconExporter from 'components/IconExporter'
import MenuItem from './MenuItem'

import menuItems from './data'
import * as s from './styles'

const Menu: React.FC = () => {
  const history = useHistory()
  const locationPath = history.location.pathname

  const handleClick = (clickedItem: number): void => {
    switch (clickedItem) {
      case 1:
        history.push('/activities')
        break
      case 2:
        history.push('/accounts')
        break
      case 3:
        history.push('/users')
        break
      case 4:
        history.push('/performance')
        break
      case 5:
        history.push('/dashboard')
        break
      default:
        history.push('/')
        break
    }
  }

  return (
    <s.Wrapper>
      <s.MenuLogo onClick={() => handleClick(0)}>
        <IconExporter name="brand" color="white1" width={100} height="100%" />
      </s.MenuLogo>
      {menuItems(locationPath).map(item => (
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
