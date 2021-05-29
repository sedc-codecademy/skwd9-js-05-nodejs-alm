# Create an MVC structured eRestaurant application

1. Create an authorization/authentication feature
	- Create a LOGIN route
	- Create a REGISTER route

2. Create an admin panel feature
	- Create all four CRUD method routes, so that the admin is able to perform all operations with the restaurant dishes

3. Create a user panel feature
	- Create a GET route so that the user is able to see all dishes, or search for dishes via ID
	- Create a POST route so that the user can make orders. Single dish per order only.

4. Upgrade the admin panel
	- Create a route that allows the admin to update the status of an order.

5. Use session
	- Add sessions as a feature, allowing the backend to store user information during runtime. The User information should be stored in the session when they login.
	- Add a LOGOUT route that clears the session of the user info.

6. Security & Middleware
	- Add a middleware that checks whether the user attempting a certain admin action (such as delete a dish) is actually an admin.
	- Add HelmetJS & password hashing

Dish {
    id: string,
    name: string,
    price: number,
}

Order: {
    id: string,
    dishName: string,
    status: string (New, Cancelled, Done)
}

User: {
    id: string,
    username: string,
    password: string,
    type: string (User, Admin)
}
