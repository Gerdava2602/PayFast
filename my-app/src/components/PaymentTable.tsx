import React, {useState} from 'react';
import RowTransaction from './RowTransaction'
import PaginatedItems from './PaginatedItems';


export default function PaymentTable(props: {transactions: any}) {
    
    const [transactions, setTransactions] = useState(props.transactions);

    const test =  [{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 2,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 2",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 3,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 3",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 4,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 1,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 7,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 1",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 8,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 5",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 9,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 6",
    },{
        "id": 1,
        "monto": 1000,
        "fecha": "2021-05-01",
        "metodo": "Paypal",
        "estado": "Aprobado",
        "userId": 1,
        "metodoId": 10,
        "nroCoutas": 20,
        "franquicia": "Visa",
        "sede": "Sede 7",
    }];

    const transactionsList = () => {
        if(test.length > 0){
            return <PaginatedItems items={test} itemsPerPage={8}></PaginatedItems>
        }
        return <div>You dont have transactions</div>
    }

    return(
        <div className="transactionsTable">
            <h1>Transactions</h1>
            <div className="table">                    
                <RowTransaction id="" estado="" fecha="" franquicia="" monto="" nroCoutas="" sede="" userId="" metodoId="" isHeader={true}></RowTransaction>
                {transactionsList()}
            </div>
        </div>
    )
}