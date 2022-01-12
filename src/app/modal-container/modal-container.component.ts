import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from "../data.service";

@Component({
  selector: 'app-modal-container',
  templateUrl:  `./modal-container.component.html`,
  styles: [`.invested{
      text-align: right;
      font-size: 12px;
      color: green;
    }`]
})
export class ModalContainerComponent implements OnInit {

  @Input() title: string | undefined
  @Input() term_remaining: string | undefined
  @Input() available: string | undefined
  @Output() passValue: EventEmitter<number> = new EventEmitter();

  public dataLoan = {}
  public isInvested: number = 0
  constructor(public modalService: NgbModal, private dataService: DataService){}

  ngOnInit() {
    this.dataLoan = {
      title: this.title,
      term_remaining: this.term_remaining,
      available: this.available,
      value: 0
    }
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.dataLoan = this.dataLoan
    modalRef.result.then((result) => {
      if (result.value < this.dataService.getTotalAmountInvestment()) {
        this.passValue.emit(result.value)
         this.isInvested++
      }else {
        alert("Not enough money")
      }
    })
      .catch((result) => {})
  }
}
