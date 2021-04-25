function Result({ results }) {
  return (
    <ul>
      {results.map((result) => (
        <li>{result.result_type_code} {result.value}</li>
      ))}
    </ul>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.LUCKALOT_API_URL}/result-dates`)
  const resultDates = await res.json()

  const paths = resultDates.map((resultDate) => ({
    params: { date: resultDate.date },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.LUCKALOT_API_URL}/results/${params.date}`)
  const results = await res.json()

  return {
    props: {
      results,
    },
  }
}

export default Result