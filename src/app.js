        // var template="<h1>My first react app</h1>";
        // var root=document.getElementById("root");
        // root.innerHTML=template;

        //1.Yöntem => React - CDN (eksik araçlar) - Babel
        //2.Yöntem => Create-react-app

        //var template=React.createElement('h1',null,'My first react app');

        // var p_name="IPhone 14 Pro Max";
        // var p_price="42000";

        var products=[
        {
                id:1,
                name:"IPhone SE 2020",
                price:11000,
                description:"eski kasa",
                colors:["silver","red","white","black"]
        },{
                id:2,
                name:"IPhone 13",
                price:24000,
                description:"tek kameralı iphone",
                colors:["silver","red","purple","pink"]
        },{
                id:3,
                name:"IPhone 14 pro",
                price:30000,
                description:"4 kameralı iphone",
                colors:["silver","red","purple","pink"]
        }];

        function formatPrice(product){
                return <p>{product.price + " TL"}</p>;
        }

        function printDesc(product){
                if(product.description){
                        return <p>{product.description}</p>;
                }else{
                        return "ürün açıklaması yok";
                }
        }
        var template=
        <div>
                <h1 id="header">Ürün Listesi</h1>
                {
                        products.map(product=>(
                     <div className="product-details" key={product.id}>
                        {(product.name && product.name.length > 3 ) ? <h2>{product.name}</h2> :<p>ürün ismi girilmemiş</p>}
                        { (product.price && product.price > 0) && formatPrice(product)}
                        { product.description && <p>{product.description}</p>} 
                                { product.colors.length > 0 ? <p>renk seçenekleri mevcut</p> : "stok yok" }
                     <ul>
                        {
                                product.colors.map((color,index) => <li key={index}>{color}</li>)
                        }
                      </ul>    
                </div>))
                }
                
               
        </div>; //JSX: Javascript xml

        var root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(template);
        
