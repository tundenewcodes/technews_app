import { articles } from '../../../data'
const handler = ({ query: { id } }, res) => {
    const filteredId = articles.filter(article => article.id === id)
    if (filteredId.length > 0) {
        res.status(200).json(filteredId[0])
    } else {
      res.status(404).json({ message : `oops ${id} not found`})  
    }
}
export default handler