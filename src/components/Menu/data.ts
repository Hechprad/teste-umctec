import { themeColors } from 'styles/theme'

import { dict } from 'components/IconExporter'

const menuItems = (
  locationPath: string
): {
  id: number
  iconName: keyof typeof dict
  text: string
  color: keyof typeof themeColors
  selectedItem: boolean
}[] => {
  const activeColor = 'blue2'
  const inactiveColor = 'gray3'

  const handleActiveItem = (path: string): 'blue2' | 'gray3' =>
    locationPath === path ? activeColor : inactiveColor
  return [
    {
      id: 1,
      text: 'Minhas atividades',
      iconName: 'activities',
      color: handleActiveItem('/activities'),
      selectedItem: locationPath === '/activities',
    },
    {
      id: 2,
      text: 'Todas as contas',
      iconName: 'accounts',
      color: handleActiveItem('/accounts'),
      selectedItem: locationPath === '/accounts',
    },
    {
      id: 3,
      text: 'Usuários',
      iconName: 'user',
      color: handleActiveItem('/users'),
      selectedItem: locationPath === '/users',
    },
    {
      id: 4,
      text: 'Desempenho',
      iconName: 'performance',
      color: handleActiveItem('/performance'),
      selectedItem: locationPath === '/performance',
    },
    {
      id: 5,
      text: 'Dashboard',
      iconName: 'dashboard',
      color: handleActiveItem('/dashboard'),
      selectedItem: locationPath === '/dashboard',
    },
  ]
}

export default menuItems
