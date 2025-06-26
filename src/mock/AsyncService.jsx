const mockProductos = [
  {
    id: 1,
    nombre: 'Laptop',
    categoria: 'laptops',
    precio: 999,
    imagen: 'https://via.placeholder.com/200x150?text=Laptop',
    descripcion: 'Laptop de alto rendimiento con pantalla HD de 15", SSD de 512GB y 16GB de RAM. Perfecta para tareas intensivas, edición de video y multitarea.'
  },
  {
    id: 2,
    nombre: 'Smartphone',
    categoria: 'smartphones',
    precio: 599,
    imagen: 'https://via.placeholder.com/200x150?text=Smartphone',
    descripcion: 'Smartphone con cámara cuádruple de 108MP, procesador de última generación y carga ultra rápida. Ideal para fotografía y entretenimiento.'
  },
  {
    id: 3,
    nombre: 'Tablet',
    categoria: 'tablets',
    precio: 399,
    imagen: 'https://via.placeholder.com/200x150?text=Tablet',
    descripcion: 'Tablet ligera y portátil con pantalla de 10.5", perfecta para leer, estudiar, y ver series. Compatible con stylus y teclado externo.'
  },
  {
    id: 4,
    nombre: 'Smartwatch',
    categoria: 'smartwatches',
    precio: 199,
    imagen: 'https://via.placeholder.com/200x150?text=Smartwatch',
    descripcion: 'Smartwatch moderno con monitoreo de salud, notificaciones, GPS y resistencia al agua. Batería de larga duración y múltiples correas intercambiables.'
  }
];
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//LOS ID COMO STRING
export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}