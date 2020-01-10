const Blog = require('../models/Blog');
const blogsRouter = require('express').Router();

blogsRouter.get('/', (request, response) => {
Blog
.find({})
.then(blogs => {
  response.json(blogs)
})
})

blogsRouter.post('/', (request, response) => {
const blog = new Blog(request.body)

blog
.save()
.then(result => {
  response.status(201).json(result)
})
})

blogsRouter.delete('/:id', (request, response)=> {
  const id = request.params.id;
  
  Blog
  .findByIdAndRemove(id)
        .then(() => response.status(204).end())
        .catch(error => next(error));
  })

module.exports = blogsRouter;