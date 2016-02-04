
var chai = require('chai');
chai.should();
var expect = chai.expect;
var chaiThings = require('chai-things');
chai.use(chaiThings);
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
var models = require('../models')
var Product = models.Product;

describe('Product model', function() {

    afterEach(function (done) {
      Product.remove({}).then(function () {
          done();
      }, done);
    });


    describe('Statics', function() {

        beforeEach('Create a product and save it', function () {
          var product1; 

          return Product.create({
              name: 'Javascript',
              description: 'Is real cool',
              price: 5,
              quantity: 5,
              tags: ['puppy']
          })
          .then(function(product){
              product1 = product;
          })
        });

        describe('findByTagPromisy and findByTagCB', function() {
          it('gets products with the search tag', function () {
             return Product.findByTagPromisy('puppy').should.eventually.have.length(1)
          });

          it('this one takes a callback', function() {
            //YOUR CODE HERE
          })

          it('does not get products without the search tag', function () {
            return Product.findByTagPromisy('meerrrrrrr').should.eventually.have.length(0)
          });
        });

    });

    describe('Methods', function() {

        var newProduct;
        beforeEach(function () {
            return Product.create([
                {
                    name: 'Cute Puppy Bowl',
                    description: 'Awesome',
                    tags: ['socute','wannakeepit']
                },
                {
                    name: 'Nugget',
                    description: 'Joe\'s mom\'s dog',
                    tags: ['joe', 'dogs']
                },
                {
                    name: 'Silly Noodle',
                    description: 'cute snake',
                    tags: ['socute', 'snake']
                }
            ]).then(function (products) {
                newProduct = products[0];
            });

        });

        describe('findSimilar', function() {

            it('gets other pages with any common tags', function (done) {
                //YOUR CODE HERE
            });

            it('findSimilarCB can be called with cbs', function() {
              newProduct.findSimilarCB(function(err, otherPages){
                if (err) console.error(err);
                else {
                  otherPages.should.contain.an.item.with.property('name', 'Silly Noodle');
                }
              });
            })
            
        });
    });

});


