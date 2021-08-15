export interface Country {
    name?: string;
    code?: string;
  }
  
  export interface Representative {
    name?: string;
    image?: string;
  }
  
  export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: boolean;
  }

  export interface GridDetail {
    StartRecord?: number;
    EndRecord?: number;
    Filter1?: string;
    Filter2?: string;
  }

  export interface UserDetail {
    Id?: number;
    UserName?: string;
    Age?: number;
    Address?: string;
    Department?: string;
    Subscription?: string
    FeeStatus?: string;
    StartDate?: string;
    EndTime?: string;
  }
  