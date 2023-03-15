// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blogs from '../../models/Blogs'
import connectDb from '@/middleware/mongoose'



const handler = async (req, res) => {
    let blogs = await Blogs.find()
    res.status(200).json({ blogs })
}
export default connectDb(handler);