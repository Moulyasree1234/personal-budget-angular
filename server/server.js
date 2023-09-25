const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    "myBudget" : [
        {
            "title": "Eat-out",
            "budget": 100
        },
        {
            "title": "Rent",
            "budget": 350
        },
        {
            "title": "Groceries",
            "budget": 90
        },
        {
            "title": "Electricity Bill",
            "budget": 160
        },
        {
           "title": "Maintanence",
            "budget": 50
        },
        {
            "title": "Gas Bill",
            "budget": 40
        },
        {
            "title": "Water Bill",
            "budget": 120
        },
        {
            "title": "Laundry",
            "budget": 20
        },
        {
            "title":"others",
            "budget": 35
        }
    
    ]
};

const data = [
    {"Framework": "Eat-out",  "Released": "100"},
    {"Framework": "Electricitybill",  "Released": "160"},
    {"Framework": "Rent", "Released": "350"},
    {"Framework": "Waterbill",  "Released": "120"},
    {"Framework": "groceries",  "Released": "90"},
  ];

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});