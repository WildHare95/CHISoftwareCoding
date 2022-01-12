import {Component, OnInit} from '@angular/core';
import {DataService, Loan} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  TotalAmountInvestment: number = 0
  dataLoans: Loan[] = []

  InvestAmount(event: number, id:number) {
     this.dataService.setTotalAmountInvestment(this.TotalAmountInvestment -= event)
     this.dataLoans[id].amount = this.dataLoans[id].amount - event
  }

  findObject(array: Loan[], id: string){
    return array.findIndex(x => x.id === id)
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.TotalAmountInvestment = this.dataService.getTotalAmountInvestment()
    this.dataLoans = this.dataService.getLoanData()
  }

}

