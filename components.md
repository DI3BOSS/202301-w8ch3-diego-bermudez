# DATA LAYER

## USERS []

- id
- username
- token
- email
- isLogged
- address

## CARS []

- id
- model
- brand
- stock
- price

## ORDERS []

- id
- cars
- totalPrice
- status

# DATA MODFICATION

## USERS

- set isLogged to true (payload: username)
- set isLogged to false
- set username
- set password
- set address
- create order
- add a car to order

## CARS

- decrease stock

## ORDERS

- add order
- delete order
