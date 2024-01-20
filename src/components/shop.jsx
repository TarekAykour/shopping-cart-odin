import React, {useState, useEffect} from "react";
import ShopItem from "./shopitem";



function Shop(){
    const [searchItem, setSearchItem] = useState()
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])
    const [categoryFilter, setCategoryFilter] = useState()
    const [checked,setChecked] = useState(false)
    // const [filteredItems,setFilteredItems] = useState([])
    const [filterText, setFilterText] = useState("");
    // shopitems
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        console.log('data',data)
        for(let i=0; i < data.length; i++){
            setCategories(categories => [...categories,data[i].category])
            if(!items.includes(data[i])){
                setItems(items => [...items, data[i]])
            }
        }

    })
    },[])
    
    // filtering out the dupe categories
    const newcats = categories.filter((category, pos, self)=> {
            
        return self.indexOf(category) == pos;
    })


    // filter items by search
    const filteredItems = items.filter(
        (item) =>
          item.description.toLocaleLowerCase().includes(filterText) ||
          item.title.toLocaleLowerCase().includes(filterText) ||
          item.category.includes(categoryFilter)
      );
    const itemsToDisplay = filterText ? filteredItems : items;


    
    
  console.log(categoryFilter)

    const categoryCheck = (cat) => {
            if(cat.checked) {
                setChecked(false)
            }
            else {
                setChecked(true)
            }
    }

    return(
        <div className="shop">
            <div className="search">
                <input type="search" name="" id="" placeholder="Search for products..." onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}/>
                <button type="submit">Search</button>
                
            </div>
            <main>
                <aside>
                    <h3>Categories</h3>
                    
                    {newcats.map((cat)=> {
                        return(
                            <label htmlFor="">
                                <input 
                                name={cat} 
                                type="checkbox" 
                                className="category" 
                                key={cat}
                                onChange={()=> {categoryCheck(cat)}} 
                                
                                />
                                {cat}
                            </label>
                           
                        )
                    })}
                    
                </aside>
                <div className="catalogue">
                    {itemsToDisplay.map((item)=> {
                        return(
                            <ShopItem 
                            id={item.id} 
                            title={item.title}
                            description={item.description} 
                            price={item.price}
                            image = {item.image}
                            />
                        )
                    })}
                </div>
            </main>

        </div>
    )
}



export default Shop;