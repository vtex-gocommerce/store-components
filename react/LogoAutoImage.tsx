import * as React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { Logo } from 'vtex.store-components'

interface LogoAutoImageProps {
  href: string
  title: string
  url: string
  width: string | number
  height: string | number
  mobileWidth: string | number
  mobileHeight: string | number
}

const defaultImageUrl = "https://static.gocommerce.com/{{account}}/assets/gocommerce/png/logo.png"

/**
 * Logo of the store
 */
const LogoAutoImage = React.memo((props:LogoAutoImageProps) => {
  const { account } = useRuntime()
  const imageUrl = props.url || defaultImageUrl
  return <Logo {...props} url={imageUrl.replace(/{{account}}/g, account)} href={props.href || '/'} />
})

export default LogoAutoImage
