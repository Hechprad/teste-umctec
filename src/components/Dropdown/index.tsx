import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'

import IconExporter from 'components/IconExporter'

import * as s from './styles'

interface IDropdown {
  items: string[]
  selected: number
  setSelected: (selected: number) => void
}

const Dropdown: React.FC<IDropdown> = ({
  items,
  selected,
  setSelected,
  ...rest
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(1)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSelectedItem(selected)
  }, [selected])

  return (
    <s.Wrapper {...rest}>
      <s.MenuItems>
        <s.Item
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(prevState => !prevState)
          }}
        >
          <s.Title>{items[selectedItem - 1]}</s.Title>
          <IconExporter name="arrow" color="gray3" width={15} height={15} />
        </s.Item>
        {isOpen
          ? items.map(
              (item, index) =>
                item !== items[selectedItem - 1] && (
                  <s.Item
                    key={v4()}
                    onClick={() => {
                      setIsOpen(false)
                      setSelectedItem(index + 1)
                      setSelected(index + 1)
                    }}
                  >
                    <s.Title>{item}</s.Title>
                  </s.Item>
                )
            )
          : null}
      </s.MenuItems>
      <s.Backdrop isOpen={isOpen} onClick={() => isOpen && setIsOpen(false)} />
    </s.Wrapper>
  )
}

export default Dropdown
