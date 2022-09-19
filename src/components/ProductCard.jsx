import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'

const ProductCard = ({ product }) => {
    return (
        <Grid xs={4}>
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
        </Grid>
    )
}

export default ProductCard