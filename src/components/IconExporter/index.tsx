import React, { SVGProps } from 'react'
import { themeColors } from 'styles/theme'

import { ReactComponent as accounts } from 'assets/images/accounts.svg'
import { ReactComponent as activities } from 'assets/images/activities.svg'
import { ReactComponent as arrow } from 'assets/images/arrow.svg'
import { ReactComponent as attachment } from 'assets/images/attachment.svg'
import { ReactComponent as brand } from 'assets/images/brand.svg'
import { ReactComponent as dashboard } from 'assets/images/dashboard.svg'
import { ReactComponent as document } from 'assets/images/document.svg'
import { ReactComponent as performance } from 'assets/images/performance.svg'
import { ReactComponent as unreadDocument } from 'assets/images/unread_document.svg'
import { ReactComponent as user } from 'assets/images/user.svg'

export const dict = {
  accounts,
  activities,
  arrow,
  attachment,
  brand,
  dashboard,
  document,
  performance,
  unreadDocument,
  user,
}

interface IProps {
  name: keyof typeof dict
  color: keyof typeof themeColors
}

const IconExporter: React.FC<IProps> = ({
  name,
  color = 'gray3',
  width = 21,
  ...rest
}: IProps & React.SVGAttributes<SVGElement>) => {
  const Icon: React.FC<SVGProps<SVGSVGElement>> = dict[name]
  return (
    <Icon
      role="img"
      aria-label={name}
      fill={themeColors[color]}
      width={width}
      {...rest}
    />
  )
}

export default IconExporter
