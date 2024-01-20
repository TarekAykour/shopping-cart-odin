# shoppincart




a simple shopping cart where users can search, view, add/remove shopitems to and from the cart. The shopAPI given by the odingproject has been used. From simply iterating over the data, i could get categories and set them to a global state which i can use to filter/categorize and demonstrate items on the shop- and homepage.


a problem that i encountered with calling the api, is that renders the data twice. The way i fixed was by...


another problem is setting the categories to the category state which has rendered the same categories multiple times. The way i fixed this was by...


The filtering works as follows...



adding items to the cart works as follows...

the price increment is simple...

