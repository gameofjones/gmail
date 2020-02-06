import 'typeface-roboto'
import React from 'react'
import { AppComponent } from "./components"
import { MailContextProvider } from "./store/StoreProvider"

function App() {
  return (
    <MailContextProvider>
      <AppComponent />
    </MailContextProvider>
  )
}

export default App;
