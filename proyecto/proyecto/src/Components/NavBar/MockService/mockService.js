const itemsDB = [
   {
       id: 1,
       title: "Producto 1",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-Negro",
       imgurl:"https://www.pixelstalk.net/wp-content/uploads/2016/05/Coffee-Wallpapers-HD-Free-Download.jpg",
   },
   {
       id: 2,
       title: "Producto 2",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-Negro",
       imgurl:"https://www.xtrafondos.com/wallpapers/taza-de-cafe-4307.jpg",
   },
   {
       id: 3,
       title: "Producto 3",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-Negro",
       imgurl:"https://images3.alphacoders.com/941/94135.jpg",
    },
    {
       id: 4,
       title: "Producto 4",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-conLeche",
       imgurl:"https://images8.alphacoders.com/903/903178.jpg",
    },
    {
       id: 5,
       title: "Producto 5",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-conLeche",
       imgurl:"https://images6.alphacoders.com/869/869347.jpg",
    },
    {
       id: 6,
       title: "Producto 6",
       description: "asdasdasd",
       price: 200,
       stock: 10,
       category: "Cafe-conLeche",
       imgurl:"https://images5.alphacoders.com/787/787947.jpg",
    }

];

export default function getItemsFromAPI() { 
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(itemsDB);
      }, 1000);
   });
}

export function getSingleItemFromAPI(idParams) { 
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let itemRequested = itemsDB.find(
            (item)=> item.id === Number(idParams) 
         );
         if(itemRequested){
            resolve(itemRequested);
         }
         else{
            reject(new Error("El item no existe!"))
         }
      }, 1000);
   });
}