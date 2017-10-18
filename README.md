# Frontend Demo
This is our front-end task for potential new engineers. We expect this this task to take under a day of work.

We've setup an empty boilerplate with create-react-app. Make sure you have node and npm installed and run ```npm install``` and then ```npm start``` to test your application. To run your tests you can run ```npm test```.

Before you start please create your own branch 'firstname-lastname' and make a starting commit with the message 'start'

If you would prefer to use your own boilerplate/setup feel free to.

## Requirements
Implement a responsive web application that follows the following designs.

Mobile - https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/93FB2FFB-EC42-4DAC-A434-6BB760E6109A.png

Desktop - https://cdn.zeplin.io/59dcef779ee5b755ceb376f3/screens/076AC023-A27D-488C-8E85-698745374675.png

We have setup an online tool to help you extract css properties from the designs for your convienence.
https://app.zeplin.io/project/59dcef779ee5b755ceb376f3/dashboard

username: getsnaptravel

password: getsnaptravel

The App functionality should be as follows.

Only the following elements should be visible on first load.
- Header
- City input
- Checkin input
- Checkout input
- Search button

The 3 inputs will be string inputs. Do not worry about form validation.

TODO: SPECIFY ENDPOINT
When the Search button is clicked make 2 HTTP post requests to 'ENDPOINT_URL' with the following request body

```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'snaptravel'
}
```

and 

```
{
  city : city_string_input,
  checkin : checkin_string_input,
  checkout : checkout_string_input,
  provider : 'retail'
}
```

After both these calls have returned take only the hotels that appear in both the responses to render the list of hotels.

The responses will be a json which has an array of hotel.
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

The list of hotels should be sorted based on the currently selected sorting type (default to price).

The currently selected sorting type should highlighted as shown in the design.

On click of an unselected sorting type, it should become highlighted, the list become sorted by it's criteria and the previously selected sorting type button should become unhighlighted.

The sorting logic of the three types is as follows:

- Price - Sort by the minimum returned price of the hotel. The lower the price, the lower the 
- Rating - Sort by the number of reviews
- Savings - Sort by the amount the difference between retail price and snaptravel price.


TODO: email contact
## Notes
* If you run into any technical difficulties contact XXXXXX
* If you wish to write tests the boilerplate supports it but it is not a strict requirement.
* Sass is supported.





This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) which has more documentation on more customization for this setup.