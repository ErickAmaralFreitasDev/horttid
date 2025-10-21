import useSWR from 'swr'
import Image from 'next/image'
import styles from './List.module.css'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function List() {

  const mockData = [
    { id: 1, name: "Alface", category: "Legume", price: 29.90, image: '/alface.jpg' },
    { id: 2, name: "Brócolis", category: "Legume", price: 39.90, image: '/brocolis.jpg' },
    { id: 3, name: "Abacaxi", category: "Fruta", price: 49.90, image: '/abacaxi.jpeg' }
  ]

  // const { data, error } = useSWR('http://localhost:3001/products', fetcher)
  const data = mockData

  const handleDelete = (id: number, name: string) => {
    console.log(`Deletando produto: ${name} (ID: ${id})`)
    alert(`Produto "${name}" seria deletado (funcionalidade em desenvolvimento)`)
  }

  const handleEdit = (id: number, name: string) => {
    console.log(`Editando produto: ${name} (ID: ${id})`)
    alert(`Produto "${name}" seria editado (funcionalidade em desenvolvimento)`)
  }
  if (!data) return <div>Carregando...</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hortti Inventory</h1>
            <div className={styles.createItem}>
        <h3 className={styles.createTitle}>Adicionar Novo Produto</h3>
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="Produto" 
            className={styles.input}
            disabled 
          />
          <input 
            type="text" 
            placeholder="Categoria" 
            className={styles.input}
            disabled 
          />
          <input 
            type="text" 
            placeholder="Preço" 
            className={styles.input}
            disabled 
          />
          <div className={styles.clipContainer}>
            <i
              className="pi pi-paperclip" 
              style={{ fontSize: '1.5rem', color: '#000000ff', cursor: 'not-allowed' }}
              title="Anexar imagem (em desenvolvimento)"
            >
            </i>
          </div>
        </div>
      </div>
      <div className={styles.productList}>
        {data.map((p: any) => (
          <div key={p.id} className={styles.productItem}>
            <Image 
              src={p.image} 
              alt={p.name}
              width={80}
              height={80}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productCategory}>{p.category}</p>
                <p className={styles.productPrice}>R$ {p.price}</p>
              </div>
              <div className={styles.plusSection}>
                <i 
                  className="pi pi-trash" 
                  style={{ fontSize: '1.2rem', color: '#000000ff', cursor: 'pointer' }}
                  onClick={() => handleDelete(p.id, p.name)}
                  title="Deletar produto"
                ></i>
                <i 
                  className="pi pi-pencil" 
                  style={{ fontSize: '1.2rem', color: '#000000ff', cursor: 'pointer' }}
                  onClick={() => handleEdit(p.id, p.name)}
                  title="Editar produto"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
