// Question #4
/*const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];*/

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let sum = inventory[0].quantity;
let name = inventory[0].name;
for (let i=0; i<inventory.length; i++){
  if(sum>inventory[i].quantity){
    sum=inventory[i].quantity
    name=inventory[i].name
    console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ "+ name + " "+"ซึ่งมี"+" "+sum+" "+"ชิ้น")
   }
  }
