# Day 2 Activity 1: Activity 1: Size of results


π city(Customer |><| ( π cid(Customer)-π cid(σ qnt<100(Orders))))

	
==> π city(Customer |><| ( π cid(Customer)-π cid(**P**)))

        where P = σ qnt<100(Orders) 
                = select * from Orders where qnt < 100
	            i.e. pick only orders with quantity < 100

==> π city(Customer |><| **Q**)

        where Q = π cid(Customer)- π cid(P)) 
                = select cid from Customer where cid not in (select cid from P)
	            i.e. select Customer cid who has never placed an order with quantity less than 100

==> π city(**R**)

        where R = Customer |><| (Q)
		        = Customer natural join Q
				i.e. select all Customers who have never placed an order with quantity less than 100

==> select city from **R**
i.e. For all customers who have never placed an order of qty less than 100, find the cities they are in.

Note:
- The list of cities returned includes customers of two extremes, those who placed large orders (quantiy > 100), as well
as those who has nevered placed any order.

- It is not a meaning query as you likely have customers of all sizes in all cities.

