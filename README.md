# Frontend Demo

This is a task I did for one company when I applied for a software developer's job. Boilerplate and system which is called by my API was set by them. They also set up an online tool to help me extract css properties from the designs.

Make sure you have node and npm installed and run ```npm install``` and then ```npm start``` to test your application. To run your tests you can run ```npm test```.

Deployed here: https://salty-eyrie-29576.herokuapp.com. API response is random, so any inputs will do.


## TODO

Implement a responsive web application that follows the following designs and functionality. 

### Design

**Mobile**
![](https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/FE1DFBA7-3235-4B28-BAAA-B8C4F3AFC56A.png)

**Desktop**
![](https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/076AC023-A27D-488C-8E85-698745374675.png)

### Functionality

**Step 1**

Only the following elements should be visible on first load.
- Header
- City input
- Checkin input (YYYY-MM-DD format)
- Checkout input (YYYY-MM-DD format)
- Search button

The 3 inputs will be string inputs. Do not worry about form validation and no need for any fancy datepicker or autocomplete functionalities.

**Step 2**

When the Search button is clicked, make **2 HTTP POST requests** in parallel to 'https://experimentation.getsnaptravel.com/interview/hotels' with the following request body

```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'snaptravel'
}
```

1) This above return SnapTravel rates for hotels in the city (the rate shown on the right and in green in the design)


```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'retail'
}
```

2) This above return Hotels.com rates for hotels in the city (the rate shown on the left and in red in the design)

The responses will be a json which has an array of hotels and prices.
```
[{
  id : 12,
  hotel_name : 'Center Hilton',
  num_reviews : 209,
  address : '12 Wall Street, Very Large City',
  num_stars : 4,
  amenities : ['Wi-Fi', 'Parking'],
  image_url : 'https://images.trvl-media.com/hotels/1000000/20000/19600/19558/19558_410_b.jpg',
  price : 132.11
},
...
]
```

After both these calls have returned take **only** the hotels that appear in both the responses to render the list of hotels and prices as per the design.

For example, if the first call returned hotels with id [1,2] with SnapTravel prices 110 and 210 and the second call returned hotels [2,3] with Hotels.com prices 250 and 350 respectively, you would only render hotel 2 in the list with a Hotels.com price of 250 and a SnapTravel price of 210, as shown below:

![](https://i.imgur.com/s1pIdcy.png)


**Step 3**

The list of hotels should be sorted based on the currently selected  sorting type (default to sort by price, lowest first).

Users should be able to click on a different sorting type to change the sorting order of the list of results.

The sorting logic of the three types is as follows:

- Price - Sort by the SnapTravel price of the hotel, lowest prices first
- Rating - Sort by the number of reviews, greatest number of reviews first
- Savings - Sort by the difference between the Hotels.com price and the SnapTravel price, largest differences first

The currently selected sorting type should highlighted as shown in the design.
