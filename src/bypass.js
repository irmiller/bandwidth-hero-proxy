function bypass(req, res, buffer) {
  res.setHeader('x-original-size', req.params.originSize)
  res.setHeader('x-bytes-saved', 0)
  res.setHeader('content-length', buffer.length)
  res.status(200)
  res.write(buffer)
  res.end()
}

module.exports = bypass
