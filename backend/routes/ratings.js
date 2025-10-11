const express = require('express');

const router = express.Router();

/**
 * @openapi
 * /api/rating/view/{id}:
 *   get:
 *     tags: [Rating]
 *     summary: View ratings by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ratings
 */
// View ratings for a specific id (optional)
router.get('/view/:id?', (req, res) => {
    const { id } = req.params;
    // Logic to fetch ratings (all or by id)
    res.json({ message: `View ratings${id ? ' for id ' + id : ''}` });
});

/**
 * @openapi
 * /api/rating/view:
 *   get:
 *     tags: [Rating]
 *     summary: View all ratings
 *     responses:
 *       200:
 *         description: All ratings
 */
// View all ratings (alias route)
router.get('/view', (req, res) => {
    // Logic to fetch all ratings
    res.json({ message: 'View all ratings' });
});

/**
 * @openapi
 * /api/rating/{id}/add:
 *   post:
 *     tags: [Rating]
 *     summary: Add review for id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review added
 */
// Add review for a specific id (optional)
router.post('/:id?/add', (req, res) => {
    const { id } = req.params;
    // Logic to add review for id (if provided)
    res.json({ message: `Add review${id ? ' for id ' + id : ''}` });
});

/**
 * @openapi
 * /api/rating/{id}/remove:
 *   delete:
 *     tags: [Rating]
 *     summary: Remove review for id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review removed
 */
// Remove review for a specific id (optional)
router.delete('/:id?/remove', (req, res) => {
    const { id } = req.params;
    // Logic to remove review for id (if provided)
    res.json({ message: `Remove review${id ? ' for id ' + id : ''}` });
});

/**
 * @openapi
 * /api/rating/{id}/edit:
 *   put:
 *     tags: [Rating]
 *     summary: Edit review for id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review edited
 */
// Edit review for a specific id (optional)
router.put('/:id?/edit', (req, res) => {
    const { id } = req.params;
    // Logic to edit review for id (if provided)
    res.json({ message: `Edit review${id ? ' for id ' + id : ''}` });
});

module.exports = router;