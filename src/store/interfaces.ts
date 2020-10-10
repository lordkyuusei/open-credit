export interface Account {
  id: number,
  accountNumber: string,
  password: string,
}

export interface Transaction {
  id: number,
  recipient: Account,
  amount: number,
  due: Date
  interest: number,
}