import Image from "next/image"
import styles from "../../ui/products/products.module.css"
import Link from "next/link"
const ProductsPage=()=>{
    return(
        <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add Product</button>
        </Link>
        </div>

              <table className={styles.table}>
                <thead>
                  <tr>
                  <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Createt At</td>
            <td>Stock</td>
            <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                 
                   <tr>
                    <td>
                      <div className={styles.user}>
                        <Image src="/avatar.png"
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                         laptops
                      </div>
      
                    </td>
                    <td>laptop is very good for coding</td>
                    <td>$999.00</td>
                    <td>Avaliable</td>
                    <td>23-03-24</td>
                    <td>
                      <Link href="/dashboard/products/singleProduct">
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      
                       
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    
                    </td>
                  </tr>
                   
                </tbody>
              </table>
          </div>
    )
}
 export default ProductsPage