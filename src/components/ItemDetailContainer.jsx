import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/Firebase';
import { useParams, Link } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import ItemDetail from './ItemDetail';
import { useCart } from './CardContext';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { productoId } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!productoId) return;
    setCargando(true);
    const docRef = doc(db, 'productos', productoId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
        setInvalid(true);
      })
      .finally(() => setCargando(false));
  }, [productoId]);

  if (invalid) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Producto no encontrado 😓</h2>
        <Link to="/" className="btn btn-dark">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      {cargando || !detalle ? (
        <LoaderComponent />
      ) : (
        <ItemDetail detalle={detalle} onAddToCart={addToCart} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
