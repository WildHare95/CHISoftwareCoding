export class Loan{
  id: string
  title: string
  tranche: string
  available: string
  annualised_return: string
  term_remaining: string
  ltv: string
  amount: number
  constructor(id: string, title: string, tranche: string, available: string, annualised_return: string,term_remaining: string, ltv: string, amount: number) {
    this.id = id
    this.title = title
    this.tranche = tranche
    this.available = available
    this.annualised_return = annualised_return
    this.term_remaining = term_remaining
    this.ltv = ltv
    this.amount = amount
  }
}
export class DataService{
  private dataLoans: Loan[] = [
      {
        id: "1",
        title: "Voluptate et sed tempora qui quisquam.",
        tranche: "A",
        available: "11,959",
        annualised_return: "8.60",
        term_remaining: "864000",
        ltv: "48.80",
        amount: parseInt("85,754".replace(",",""))
      },
      {
        id: "5",
        title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
        tranche: "B",
        available: "31,405",
        annualised_return: "7.10",
        term_remaining: "1620000",
        ltv: "48.80",
        amount: parseInt("85,754".replace(",",""))
      },
      {
        id: "12",
        title: "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        tranche: "C",
        available: "12,359",
        annualised_return: "4.80",
        term_remaining: "879000",
        ltv: "48.80",
        amount: parseInt("85,754".replace(",",""))
      }
    ]
  private _totalAmountInvestment: number = 10000

  getLoanData(): Loan[] {
    return this.dataLoans
  }

  getTotalAmountInvestment() {
    return this._totalAmountInvestment
  }
  setTotalAmountInvestment(value: number) {
    this._totalAmountInvestment = value
  }
}
