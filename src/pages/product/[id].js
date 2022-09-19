
const ProductPage = ({ initialData }) => {

	return (
		<h1>{initialData.title}</h1>
	)
}

export default ProductPage

export async function getServerSideProps({ query }) {
	// Fetch data from external API
	const res = await fetch(`https://dummyjson.com/products/${query.id}`)
	const initialData = await res.json()

	// Pass data to the page via props
	return { props: { initialData } }
}