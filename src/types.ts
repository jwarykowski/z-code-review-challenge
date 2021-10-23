export type ZellerAdmin = "Admin";
export type ZellerManager = "Manager";
export type ZellerRoles = ZellerAdmin | ZellerManager;

export interface ZellerCustomer {
  email: string;
  id: string;
  name: string;
  role: string;
}

export interface ListZellerCustomersData {
  listZellerCustomers: {
    items: ZellerCustomer[];
  };
}
