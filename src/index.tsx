import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from "miragejs"
import App from './App';


createServer({
  routes() {
    this.namespace = 'api' 
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date() 
        }
      ]
    })
    // as apis estão a partir da rota api
    // porque colocamos no TransactionsTable
    // que seria a partir dessa rota
    // e vamos direcionar para o mirage.js
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
