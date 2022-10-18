import { Button, Card, Col, Container, Grid, Navbar, Row, Text } from '@nextui-org/react'
import CustomNavbar from '../components/Navbar'
import { useAppContext } from '../contexts/appcontext'

export default function Home({ data }) {

  const { cartItems, setCartItems } = useAppContext();

  const addToCart = (product) => {
    console.log(product);
    setCartItems([...cartItems, product])
  }

  return (
    <>
      <CustomNavbar />
      <Container md>
        <Grid.Container gap={2} justify="flex-start">
          {data.products.map((product, index) => (
            <Grid xs={4} key={index}>
              <Card css={{ mw: "400px" }}>
                <Card.Body>
                  <Card.Image
                    src={product.thumbnail}
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt={product.title}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Col>
                      <Text b>{product.title}</Text>
                      <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                        {product.price}
                      </Text>
                      <Button onClick={() => addToCart(product)}>Добавить в корзину</Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          )

          )}

        </Grid.Container>
      </Container>
    </>
  )

}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}