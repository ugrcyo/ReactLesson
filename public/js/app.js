"use strict";

// var template="<h1>My first react app</h1>";
// var root=document.getElementById("root");
// root.innerHTML=template;

//1.Yöntem => React - CDN (eksik araçlar) - Babel
//2.Yöntem => Create-react-app

//var template=React.createElement('h1',null,'My first react app');

// var p_name="IPhone 14 Pro Max";
// var p_price="42000";

var products = [{
  id: 1,
  name: "IPhone SE 2020",
  price: 11000,
  description: "eski kasa",
  colors: ["silver", "red", "white", "black"]
}, {
  id: 2,
  name: "IPhone 13",
  price: 24000,
  description: "tek kameralı iphone",
  colors: ["silver", "red", "purple", "pink"]
}, {
  id: 3,
  name: "IPhone 14 pro",
  price: 30000,
  description: "4 kameralı iphone",
  colors: ["silver", "red", "purple", "pink"]
}];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price + " TL");
}
function printDesc(product) {
  if (product.description) {
    return /*#__PURE__*/React.createElement("p", null, product.description);
  } else {
    return "ürün açıklaması yok";
  }
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: product.id
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, product.name) : /*#__PURE__*/React.createElement("p", null, "\xFCr\xFCn ismi girilmemi\u015F"), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, "renk se\xE7enekleri mevcut") : "stok yok", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, color);
  })));
})); //JSX: Javascript xml

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
