import { Component} from "@angular/core";
import { Customer, GridDetail, Representative, UserDetail } from "./customer";
import { CustomerService } from "./customerservice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  users: UserDetail[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  totalRecords: number;
  gridDetail: GridDetail;
  scrollableCols: any[];
  frozenCols: any[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.scrollableCols = [
      { field: 'department', header: 'Department', width: 'width:200px;' },
      { field: 'subscription', header: 'Subscription', width: 'width:200px;' },
      { field: 'feeStatus', header: 'FeeStatus', width: 'width:200px;' },
      { field: 'startDate', header: 'StartDate', width: 'width:200px;' },
      { field: 'endTime', header: 'EndTime', width: 'width:200px;' },
      { field: 'department', header: 'Department', width: 'width:200px;' },
      { field: 'subscription', header: 'Subscription', width: 'width:200px;' },
      { field: 'feeStatus', header: 'FeeStatus', width: 'width:200px;' },
      { field: 'startDate', header: 'StartDate', width: 'width:200px;' },
      { field: 'endTime', header: 'EndTime', width: 'width:200px;' }
    ];

    this.frozenCols = [
      { field: 'userName', header: 'UserName', width: 'width:150px;' },
      { field: 'age', header: 'Age', width: 'width:150px;' },
      { field: 'address', header: 'Address', width: 'width:150px;' }
    ];
  }

  lazyLoadCustomer(event: any) { 
    this.loading = true;

    console.log(JSON.stringify(event))

    // if(Object.keys(event.filters).length > 0){
    //   this.gridDetail = {StartRecord: 1, EndRecord: 10, Filter1: event.filters?.UserName?.value}
    // }
    // else{
      this.gridDetail = {StartRecord: event.first, EndRecord: event.first + event.rows}
    //}

    setTimeout(() => {
        this.customerService.getCustomersLargeLazy(this.gridDetail).subscribe(res => {
            this.users = res;
            this.loading = false;
            this.totalRecords = 8000;
        })
    }, 1000);
  }
  
}
