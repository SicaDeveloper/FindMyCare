const express = require('express');

const router = express.Router();

/**
 * @openapi
 * /api/search/{topic}:
 *   get:
 *     tags: [Search]
 *     summary: Search endpoint
 *     parameters:
 *       - in: path
 *         name: topic
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional topic to narrow down search
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Free-text search query
 *     responses:
 *       200:
 *         description: Search results
 */
// Example search handler
router.get('/:topic?', async (req, res) => {
    const { topic } = req.params;
    const query = req.query.q || '';
    res.json({ message: 'Search endpoint', topic: topic || null, query });
});

module.exports = router;