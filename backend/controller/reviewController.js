const reviewModel = require('../modules/entities/review_db_module').reviewModel;

// Create a new review
createReview = async (req, res) => {
    try {
        const { userId, doctorId, rating, comment } = req.body;
        const newReview = new reviewModel({ userId, doctorId, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reviews by doctorId
getReviewsByDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const reviews = await reviewModel.find({ doctorId });
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

removeReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await reviewModel.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json({ message: "Review deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createReview, getReviewsByDoctor, removeReview };