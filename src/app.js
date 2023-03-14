        // var template="<h1>My first react app</h1>";
        // var root=document.getElementById("root");
        // root.innerHTML=template;

        //1.Yöntem => React - CDN (eksik araçlar) - Babel
        //2.Yöntem => Create-react-app

        //var template=React.createElement('h1',null,'My first react app');

        // var p_name="IPhone 14 Pro Max";
        // var p_price="42000";

        // var products=[
        // {
        //         id:1,
        //         name:"IPhone SE 2020",
        //         price:11000,
        //         description:"eski kasa",
        //         colors:["silver","red","white","black"]
        // },{
        //         id:2,
        //         name:"IPhone 13",
        //         price:24000,
        //         description:"tek kameralı iphone",
        //         colors:["silver","red","purple","pink"]
        // },{
        //         id:3,
        //         name:"IPhone 14 pro",
        //         price:30000,
        //         description:"4 kameralı iphone",
        //         colors:["silver","red","purple","pink"]
        // }];
        // function formatPrice(product){
        //         return <p>{product.price + " TL"}</p>;
        // }

        // function printDesc(product){
        //         if(product.description){
        //                 return <p>{product.description}</p>;
        //         }else{
        //                 return "ürün açıklaması yok";
        //         }
        // }

        var root=ReactDOM.createRoot(document.getElementById("root"));

        var products=[
                {
                        name:"IPhone SE 2020",
                        price:11000
                },{
                        id:2,
                        name:"IPhone 13",
                        price:24000
                },{
                        id:3,
                        name:"IPhone 14 pro",
                        price:30000
                }];
        
        var selectedProducts=[];


function addProduct(event,p_name){
        console.log(event.target,p_name);
        if (!selectedProducts.includes(p_name))
        {
            selectedProducts.push(p_name);
        }
        renderApp();
}

function saveProduct(event){
        event.preventDefault();
        var p_name=event.target.elements.p_name.value;
        var p_price=event.target.elements.p_price.value;
        var product={
                name:p_name,
                price:p_price
        }
        products.push(product);
        event.target.elements.p_name.value="";
        event.target.elements.p_price.value="";
        renderApp();
        
}

function renderApp(){
                var template=
        <div>
                <h1 id="header">Ürün Listesi</h1>
                <h3>Seçilen Ürünler : {selectedProducts.length}</h3>
                <form onSubmit={saveProduct}>
                        <input type="text" name="p_name" id="p_name" />
                        <input type="text" name="p_price" id="p_price" />
                        <button type="submit">Ürün Ekle</button> 
                </form>
                {
                        products.map((product,index)=>(
                                <div className="product-details" key={index}>
                                        {<h2>{product.name}</h2>}
                                        {product.price}
                                <button type="button" id={index} onClick={(event)=>addProduct(event,product.name)}>Ekle</button>
                        </div>
                        ))
                }
                
               
        </div>; //JSX: Javascript xml
                root.render(template);

}

renderApp();


        
