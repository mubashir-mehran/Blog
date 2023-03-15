// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from '../../models/Blogs'
import connectDb from '@/middleware/mongoose'



const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let b = new Blog({
            image: req.body.image,
            name: req.body.name,
            title: req.body.title,
            description:req.body.description
    })
        await b.save()
    res.status(200).json({ success: "Success" })
}
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);