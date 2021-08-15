import { Component, Input, Output, SimpleChanges, ViewChild, EventEmitter } from "@angular/core";
import { Customer, GridDetail, Representative, UserDetail } from "./../customer";
import { CustomerService } from "./../customerservice";
import { MessageService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  providers: [MessageService]
})
export class CustomtableComponent {
  @Input() users: UserDetail[];
  @Input() dataKey: string;
  @Input() rows: number;
  @Input() showCurrentPageReport: boolean;
  @Input() rowsPerPageOptions: number[];
  @Input() loading: boolean;
  @Input() styleClass: string;
  @Input() paginator: boolean;
  @Input() currentPageReportTemplate: string;
  @Input() globalFilterFields: string[];
  @Input() scrollable: boolean;
  @Input() scrollHeight: string;
  @Input() frozenWidth: string;
  @Input() lazy: boolean;
  @Input() totalRecords: number;
  @Input() columns: any[];
  @Input() frozenColumns: any[];
  //users: UserDetail[];

  //loading: boolean = false;

  //activityValues: number[] = [0, 100];

  //totalRecords: number = 8000;
  // gridDetail: GridDetail;
  // scrollableCols: any[];
  // frozenCols: any[];

  @Output() lazyLoad : EventEmitter<any> = new EventEmitter();

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    // this.scrollableCols = [
    //   { field: 'department', header: 'Department', width: 'width:200px;' },
    //   { field: 'subscription', header: 'Subscription', width: 'width:200px;' },
    //   { field: 'feeStatus', header: 'FeeStatus', width: 'width:200px;' },
    //   { field: 'startDate', header: 'StartDate', width: 'width:200px;' },
    //   { field: 'endTime', header: 'EndTime', width: 'width:200px;' },
    //   { field: 'department', header: 'Department', width: 'width:200px;' },
    //   { field: 'subscription', header: 'Subscription', width: 'width:200px;' },
    //   { field: 'feeStatus', header: 'FeeStatus', width: 'width:200px;' },
    //   { field: 'startDate', header: 'StartDate', width: 'width:200px;' },
    //   { field: 'endTime', header: 'EndTime', width: 'width:200px;' }
    // ];

    // this.frozenCols = [
    //   { field: 'userName', header: 'UserName', width: 'width:200px;' },
    //   { field: 'age', header: 'Age', width: 'width:200px;' },
    //   { field: 'address', header: 'Address', width: 'width:200px;' }
    // ];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  loadCustomers(event: LazyLoadEvent) { 
    this.lazyLoad.emit(event);
    // this.loading = true;

    // console.log(JSON.stringify(event))

    // if(Object.keys(event.filters).length > 0){
    //   this.gridDetail = {StartRecord: 1, EndRecord: 10, Filter1: event.filters?.UserName?.value}
    // }
    // else{
      //this.gridDetail = {StartRecord: event.first, EndRecord: event.first + event.rows}
    //}

    // setTimeout(() => {
    //     this.customerService.getCustomersLargeLazy(this.gridDetail).subscribe(res => {
    //         this.users = res;
    //         this.loading = false;
    //         this.totalRecords = 8000;
    //     })
    // }, 1000);
}
}
