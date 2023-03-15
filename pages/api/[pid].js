// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blogs from '../../models/Blogs'
import connectDb from '@/middleware/mongoose'



const handler = async (req, res) => {
    const {pid} = req.query
    let blog = await Blogs.findOne({_id:pid})
    res.status(200).json(blog)
}
export default connectDb(handler);