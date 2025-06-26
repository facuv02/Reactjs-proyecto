import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../service/Firebase";
import LoaderComponent from "./LoaderComponent";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId.toLowerCase())) 
      : productosRef;

    getDocs(q)
      .then((res) => {
        const items = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(items);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      <h1>{greeting} <span style={{ textTransform: "capitalize" }}>{categoryId}</span></h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
