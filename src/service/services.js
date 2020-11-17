import { data } from "jquery";


function dummyData() {
    return {
        "headers": [
            "Id",
            "Name",
            "Created date",
            "Transaction type",
            "Amount",
            "From account"
        ],
        "contents": [
            {
                "id": "1",
                "name": "An sang",
                "date": "1/10/2020",
                "type": "deposit",
                "amount": 20000,
                "from": "First week"
            },
            {
                "id": "22",
                "name": "An toi",
                "date": "2/10/2020",
                "type": "deposit",
                "amount": 20000,
                "from": "Sinh hoat"
            },
            {
                "id": "333",
                "name": "An sang",
                "date": "1/10/2020",
                "type": "deposit",
                "amount": 20000,
                "from": "First week"
            },
            {
                "id": "444",
                "name": "An sang",
                "date": "1/10/2020",
                "type": "deposit",
                "amount": 20000,
                "from": "First week"
            }
        ]
    }

}



export default dummyData;