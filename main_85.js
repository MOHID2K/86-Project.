menu_list_array = ["Veg Margherita Pizza", "Candy Pizza", "Vegan Pizza", "Meat Lovers Pizza", "BBQ Chicken Pizza", "Hawaiian Pizza", "Pepperoni Passion Pizza", "Mushroom Madness Pizza", "Spicy Sausage Supreme Pizza", "Garden Fresh Veggie Pizza", "Mediterranean Delight Pizza", "Four Cheese Extravaganza Pizza", "Pesto Paradise Pizza", "Buffalo Chicken Ranch Pizza"]

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

