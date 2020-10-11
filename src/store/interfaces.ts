export interface Account {
  id: number,
  accountNumber: string,
  password: string,
}

export interface Transaction {
  id: number,
  recipient: Account,
  sender: Account,
  amount: number,
  due: Date
  interest: number,
}

export interface AccessToken {
  access_token: string,
  expires_in: number,
  token_type: string,
  scope: string,
}