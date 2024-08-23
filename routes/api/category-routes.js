const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //using the .then method, following the find all method to return the data
  Category.findAll({
    //product is included in the category
    include: [Product]
  }).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  //using the .then method, following the find one method to return the data
  Category.findOne({
    where: {
      //sets id as the value of the id parameter
      id: req.params.id
    },
    include: [Product]
  }).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
    
  
});

router.post('/', (req, res) => {
  // create a new category
  //using the create method followed by the . then method to return the data
  Category.create({
    category_name: req.body.category_name
  }).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  //using the update method followed by the . then method to return the data
  Category.update(req.body, {
    where: {
      //sets id as the value of the id parameter
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //using the destroy method followed by the . then method to return the data
  Category.destroy({
    where: {
      //sets id as the value of the id parameter
      id: req.params.id
    }
  }).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
