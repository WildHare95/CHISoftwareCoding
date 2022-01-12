import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";

@Component({
  selector: 'app-modal-content',
  templateUrl: `./modal-content.component.html`,
  styles: [`
    .modal-content {
      padding: 30px;
    }`]
})
export class ModalContentComponent implements OnInit {
  @Input() public dataLoan: any
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public EndsIn: string = ""

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.EndsIn = moment.duration(parseInt(this.dataLoan.term_remaining) * 1000).humanize()
  }

  passBack() {
    this.passEntry.emit(this.dataLoan);
    this.activeModal.close(this.dataLoan);
  }
}
