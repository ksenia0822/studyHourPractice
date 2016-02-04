
var chai = require('chai');
chai.should();
var expect = chai.expect;
var chaiThings = require('chai-things');
chai.use(chaiThings);
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
var models = require('../models')
var User = models.User;

describe('user model', function() {

    afterEach(function (done) {
      User.remove({}).then(function () {
          done();
      }, done);
    });


    describe('Statics', function() {

        beforeEach('Create a user and save it', function () {
          var user1; 

          return User.create({
              name: 'kathy',
              email: 'kathy@gmail.com'
          })
          .then(function(user){
              user1 = user;
          })
        });

        describe('findOrCreatePromisy and findOrCreateCB', function() {
          it('finds or creates a user', function () {
             return User.findOrCreatePromisy({ name: 'karen', email: 'karen@gmail.com' })
             .then(function(newUser) {
                newUser.should.have.a.property('email', 'karen@gmail.com');
             })
          });
          it('finds or creates user, and takes a callback', function() {
            //YOUR CODE HERE
          });

        });

    });


});


