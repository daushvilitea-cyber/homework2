import styles from "./ProductItem.module.css"

export default function ProductItem({ product }) {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} width="150px" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price} $</p>
        </div>
    )
}