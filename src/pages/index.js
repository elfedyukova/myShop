import { Button, Col, Container, Grid, Row } from '@nextui-org/react'
import { useState } from 'react'
import CustomNavbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

export default function Home({ initialData }) {

  const [data, setData] = useState(initialData)

  const loadMore = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=6&skip=${data.products.length}`)
    const json = await res.json()
    setData({ ...data, products: [...data.products, ...json.products] })
  }

  return (
    <>
      <CustomNavbar />
      <Container md>
        <Grid.Container gap={2} justify="flex-start">
          {data?.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          )
          )}
        </Grid.Container>
      </Container>
      <Container gap={0}>
        <Row gap={1} justify="center">
          <Button onClick={() => loadMore()}>Загрузить ещё</Button>
        </Row>
      </Container>
    </>
  )

}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products?limit=6&skip=0`)
  const initialData = await res.json()

  // Pass data to the page via props
  return { props: { initialData } }
}