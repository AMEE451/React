import Course from "../model/course.model.js"

export const createcourse = async (req,res) => {
    try {
        console.log("courses",req.body);
        const data = await Course.create(req.body)
        res.status(200).send(data)
       
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getcourse = async (req,res) => {
    try {
        const data = await Course.find()
        res.status(200).json({
            message: "Courses fetched successsfully", data: data
        })
    } catch (error) {
        res.staus(500).json({
            error: error.message
        })
    }
}

export const updatecourse = async (req,res) => {
    try {
        const data = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({ message: "course not found" })
        }
        res.status(200).json({
            message: "course updated successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

export const deletecourse = async (req,res) => {
    try {
        const data = await Course.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({ message: "course not found" })
        }
        res.status(200).json({
            message: "course deleted successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

// export default {createcourse,getcourse,updatecourse,deletecourse}