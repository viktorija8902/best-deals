# Frontend Demo
This is our front-end task for potential new engineers. We expect this this task to take less than an afternoon's worth of work. If you are time constrained, please let us know how much time you have allocated to this and how much you were able to get done.

We've setup an empty boilerplate with create-react-app. Make sure you have node and npm installed and run ```npm install``` and then ```npm start``` to test your application. To run your tests you can run ```npm test```.


If you would prefer to use your own boilerplate, setup or frontend framework, please feel free to do so.


Please clone this repo, create your own branch 'firstname-lastname' and make a starting commit with the message 'start'.
Commit your code to your branch and push your branch to origin when you are finished. Thanks 😄

## TODO

Implement a responsive web application that follows the following designs and functionality. 

### Design

**Mobile** ![](https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/93FB2FFB-EC42-4DAC-A434-6BB760E6109A.png)

**Desktop** ![](https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/076AC023-A27D-488C-8E85-698745374675.png)

We have setup an online tool to help you extract css properties from the designs for your convienence.
https://app.zeplin.io/project/59dcef779ee5b755ceb376f3/dashboard

username: getsnaptravel

password: getsnaptravel

### Functionality

** Step 1 **

Only the following elements should be visible on first load.
- Header
- City input
- Checkin input (YYYY-MM-DD format)
- Checkout input (YYYY-MM-DD format)
- Search button

The 3 inputs will be string inputs. Do not worry about form validation and no need for any fancy datepicker or autocomplete functionalities.

** Step 2 **

When the Search button is clicked, make **2 HTTP POST requests** in parallel to 'https://experimentation.getsnaptravel.com/interview/hotels' with the following request body

```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'snaptravel'
}
```

1) This will return SnapTravel rates for hotels in the city (the rate shown on the right and in green in the design)


```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'retail'
}
```

2) This will return Hotels.com rates for hotels in the city (the rate shown on the left and in red in the design)

The responses will be a json which has an array of hotels and prices.
```
{
  id : 12,
  hotel_name : 'Center Hilton',
  num_reviews : 209,
  address : '12 Wall Street, Very Large City',
  num_stars : 4,
  amenities : ['Wi-Fi', 'Parking'],
  image_url : 'https://images.trvl-media.com/hotels/1000000/20000/19600/19558/19558_410_b.jpg',
  price : 132.11
}
```

After both these calls have returned take **only** the hotels that appear in both the responses to render the list of hotels and prices as per the design.

For example, if the first call returned hotels with id [1,2] with prices 100 and 200 and the second call returned hotels [2,3] with prices 200 and 300 respectively, you would only render hotel 3 in the list with a Hotels.com price of 300 and a SnapTravel price of 200, as shown below:

![](https://i.imgur.com/RAV0JsR.png)


** Step 3 **

The list of hotels should be sorted based on the currently selected  sorting type (default to sort by price, lowest first).

Users should be able to click on a different sorting type to change the sorting order of the list of results.

The sorting logic of the three types is as follows:

- Price - Sort by the SnapTravel price of the hotel, lowest prices first
- Rating - Sort by the number of reviews, greatest number of reviews first
- Savings - Sort by the difference between the Hotels.com price and the SnapTravel price, largest differences first

The currently selected sorting type should highlighted as shown in the design.

## Notes
* If you run into any technical difficulties contact henry@getsnaptravel.com
* If you wish to write tests the boilerplate supports it but it is not a strict requirement.
* Sass is supported.
