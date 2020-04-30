import * as React from 'react'
import { Context, SetAccountData } from 'gocommerce.gc-context'

const Container: React.FC = ({ children }) => (
  <SetAccountData AccountContext={Context.AccountContext}>
    {children}
  </SetAccountData>
)

export default Container
