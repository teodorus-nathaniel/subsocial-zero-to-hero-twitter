import { useState } from 'react'
import polkadotjs from './subsocial/wallets/polkadotjs'
import LoginScreen from './login'

const ACCOUNT_STORAGE_KEY = 'connected_account'

const App = () => {
  const [account, setAccount] = useState<string | null>(
    localStorage.getItem(ACCOUNT_STORAGE_KEY)
  )

  const connectWallet = async () => {
    const accounts = await polkadotjs.getAllAccounts()
    console.log('List of all accounts:', accounts)

    // Store the first account address.
    if (accounts.length > 0) {
      localStorage.setItem('connected_account', accounts[0].address)
      setAccount(accounts[0].address)
    } else {
      alert('No accounts found in polkadotjs wallet.')
    }
  }
  if (account) {
    // User is already logged-in.
    return <div> </div>
  }

  return <LoginScreen onLoginClick={connectWallet} />
}
export default App
