function Result({ resultView }) {
  return (
    <div>
      <div>
        {resultView.first}
      </div>
      <div>
        {resultView.nearby_first}
      </div>
      <div>
        {resultView.three_prefix}
      </div>
      <div>
        {resultView.three_suffix}
      </div>
      <div>
        {resultView.two_suffix}
      </div>
      <div>
        {resultView.second}
      </div>
      <div>
        {resultView.third}
      </div>
      <div>
        {resultView.fourth}
      </div>
      <div>
        {resultView.fifth}
      </div>
    </div>
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
  const res = await fetch(`${process.env.LUCKALOT_API_URL}/results/${params.date}/view`)
  const resultView = await res.json()

  return {
    props: {
      resultView,
    },
  }
}

export default Result