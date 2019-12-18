export const getDefaultData = async(lat: number, lon: number) => {
  const hitPerPage = 100
  const URL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${process.env.GURUNAVI_API_KEY}&latitude=${lat}&longitude=${lon}&range=3&hit_per_page=${hitPerPage}`
  const response = await fetch(URL);
  const resJson = await response.json()
  return resJson
}