import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import SingleCustomerComponent from "../components/SingleCustomerComponent";
import CreateCustomerForm from "../components/CreateCustomerForm";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    surname: "",
  });

  const handlerDeleteSingleCustomer = (id) => {
    const response = CustomerService.delete(id);

    if (response) {
      setCustomers([...customers.filter((customer) => customer.id !== id)]);
    }
  };
  
  const handlerCreateCustomer = (e) => {
    e.preventDefault();
    const newCustomerResponse = CustomerService.create(newCustomer);

    if (newCustomerResponse) {
      setCustomers([...customers, newCustomerResponse]);
    }
  };

  return (
    <div>
      <div>
        <CreateCustomerForm
          newCustomer={newCustomer}
          setNewCustomer={setNewCustomer}
          onCreateNewCustomer={handlerCreateCustomer}
        />
      </div>
      <div>
        <h2>Customer list</h2>
        {customers.map((customer) => (
          <SingleCustomerComponent
            key={customer.id}
            id={customer.id}
            name={customer.name}
            surname={customer.surname}
            onDeleteSingleCustomer={handlerDeleteSingleCustomer}
          />
        ))}
      </div>
    </div>
  );
}
