import axios from "axios";

class CustomerService {
  constructor() {
    this.nextId = 3;
    this.customers = [
      {
        id: 1,
        name: "Marko",
        surname: "Markovic",
      },
      {
        id: 2,
        name: "Ana",
        surname: "Markovic",
      },
    ];
  }

  getAll() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
    return this.customers;
  }

  get(id) {
    return this.customers.find((customer) => customer.id === Number(id));
  }

  delete(id) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === Number(id)
    );
    if (customerIndex === -1) {
      return false;
    }
    this.customers.slice(customerIndex, 1);

    return true;
  }

  create(newCustomerData) {
    newCustomerData.id = this.nextId;
    this.customers = [...this.customers, newCustomerData];
    this.nextId++;

    return newCustomerData;
  }
}

export default new CustomerService();
