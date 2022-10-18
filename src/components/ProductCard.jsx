import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'
import Link from 'next/link'
import { useAppContext } from '../contexts/appcontext'

const ProductCard = ({ product }) => {


    const { addToCart, cartItems } = useAppContext()

    return (
        <Grid xs={4}>

            <Card css={{ mw: "400px" }}>
                <Card.Body>
                    <Link href={`/product/${product.id}`}>
                        <a>
                            <Card.Image
                                src={product.thumbnail}
                                objectFit="cover"
                                width="100%"
                                height={140}
                                alt={product.title}
                            />
                        </a>
                    </Link>
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Col>
                            <Text b>{product.title}</Text>
                            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                {product.price}
                            </Text>
                            <Button onPress={() => addToCart(product)}>Добавить в корзину</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

        </Grid>
    )
}

export default ProductCard