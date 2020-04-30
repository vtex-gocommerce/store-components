import * as React from 'react'
import { Logo } from 'vtex.store-components'
import { Context } from 'gocommerce.gc-context'

interface LogoAutoImageProps {
  href: string
  title: string
  url: string
  width: string | number
  height: string | number
  mobileWidth: string | number
  mobileHeight: string | number
}

/**
 * Logo of the store
 */
const LogoAutoImage: StorefrontFunctionComponent<LogoAutoImageProps> = props => {
  const {
    accountData: { id, contract },
  } = React.useContext(Context.AccountContext)

  const defaultImageUrl = `https://static.gocommerce.com/${id}/assets/${contract}/png/logo.png`
  const imageUrl = props.url || defaultImageUrl

  return <Logo {...props} url={imageUrl} href={props.href || '/'} />
}

export default LogoAutoImage
