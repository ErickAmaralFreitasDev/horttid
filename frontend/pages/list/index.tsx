import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function List() {

  const mockData = [
    { id: 1, name: "Alface", category: "Legume", price: 29.90 },
    { id: 2, name: "Brócolis", category: "Legume", price: 39.90 },
    { id: 3, name: "Abacaxi", category: "Fruta", price: 49.90 }
  ]

  // const { data, error } = useSWR('http://localhost:3001/products', fetcher)
  const data = mockData

  if (!data) return <div>Carregando...</div>

  return (
    <div style={{ padding: 24 }}>
      <h1>Hortti Inventory</h1>
      <ul>
        {data.map((p: any) => (
          <li key={p.id}>{p.name} — {p.category} — R$ {p.price}</li>
        ))}
      </ul>
    </div>
  )
}
