import { Button, Col, Container, Grid, Row } from '@nextui-org/react'
import CustomNavbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'

const CategoryPage = ({ initialData }) => {

	return (
		<>
			<CustomNavbar />
			<Container md>
				<Grid.Container gap={2} justify="flex-start">
					{initialData?.products.map((product, index) => (
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

export default CategoryPage

export async function getServerSideProps({ query }) {
	// Fetch data from external API
	const res = await fetch(`https://dummyjson.com/products/category/${query.id}`)
	const initialData = await res.json()

	// Pass data to the page via props
	return { props: { initialData } }
}
