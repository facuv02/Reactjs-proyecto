// components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const mockProductos = [
  { id: 1, nombre: 'Laptop', categoria: 'laptops', precio: 999, imagen: 'https://via.placeholder.com/200x150?text=Laptop', descripcion: 'Laptop de alta performance' },
  { id: 2, nombre: 'Smartphone', categoria: 'smartphones', precio: 599, imagen: 'https://via.placeholder.com/200x150?text=Smartphone', descripcion: 'Smartphone con cámara avanzada' },
  { id: 3, nombre: 'Tablet', categoria: 'tablets', precio: 399, imagen: 'https://via.placeholder.com/200x150?text=Tablet', descripcion: 'Tablet para trabajo y ocio' },
  { id: 4, nombre: 'Smartwatch', categoria: 'smartwatches', precio: 199, imagen: 'https://via.placeholder.com/200x150?text=Smartwatch', descripcion: 'Reloj inteligente para fitness' }
];

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductos = () => {
      return new Promise(resolve => {
        setTimeout(() => {
         const filtrados = categoriaId
          ? mockProductos.filter(p => p.categoria.toLowerCase() === categoriaId.toLowerCase())
          : mockProductos;
          resolve(filtrados);
        }, 500);
      });
    };

    getProductos().then(setProductos);
  }, [categoriaId]);

if (productos.length === 0) {
  return <p style={{ textAlign: 'center' }}>No se encontraron productos.</p>;
}

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {productos.map(producto => (
        <ProductCard
          key={producto.id}
          {...producto}
          onViewDetails={() => navigate(`/producto/${producto.id}`)}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
