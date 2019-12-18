let Mock = require('mockjs');


let data = Mock.mock({
    "list|5": [
        {
            "title": "@ctitle(2,4)",
            "id|+1": 0,
            "children|6": [
                {
                    "title": "@ctitle(2,5)",
                    "id|+1": 10,
                    "price|200-5000": 300,
                    "img": "@image(100x100,@color)",
                    "count": 0
                }
            ]
        }
    ]
})

module.exports = data;