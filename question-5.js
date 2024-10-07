// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
//let sum =0;
function calculateTotalPrice (products,promotionCode){
  let sum =0;
  //เอาค่า ทั้งหมดใน products มา * กันแล้ว + กันครับ
  for (let i=0; i<products.length; i++){
    sum+=products[i].price*products[i].quantity
    //console.log(sum)
    
    //เอามาเทียบ promotionCode หาส่วนลด
  }
  console.log(sum)
  if(promotionCode==="SALE50"){
    return (sum-50)/100
  }else if(promotionCode==="SALE20"){
    return (sum-20)/100
  }

return "ไม่ได้รับส่วนลด"
}

calculateTotalPrice(products,"SALE20")