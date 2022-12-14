import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'
import Link from 'next/link'

const ProductCard = ({ product }) => {
    return (
        <Grid xs={4}>
            <Link href={`/product/${product.id}`}>
                <a>
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
                                    <Button>Добавить в корзину</Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </a>
            </Link>
        </Grid>
    )
}

export default ProductCard