var mongoose = require('mongoose');
var marked = require('marked');

if (process.env.NODE_ENV === 'testing'){
    mongoose.connect('mongodb://localhost/wikistack-testing')
}
else mongoose.connect('mongodb://localhost/wikistack');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['cat', 'dog', 'snake']
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    tags: {
        type: [String]
    }
});

productSchema.statics.findByTagPromisy = function (tag) {

    //YOUR CODE HERE
    
};

productSchema.statics.findByTagCB = function(tag, cb) {
    this.find({ tags: { $in: [tag] } }, function(err, cb){});
}

productSchema.methods.findSimilarPromisy = function () {

    return Product.find({
        tags: {
            $in: this.tags
        },
        _id: {
            $ne: this._id
        }
    }).exec();

};

productSchema.methods.findSimilarCB = function(cb) {
    //YOUR CODE HERE
}

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.statics.findOrCreatePromisy = function (userInfo) {

    //YOUR CODE HERE

};

userSchema.statics.findOrCreateCB = function (userInfo, cb) {

    //YOUR CODE HERE

};

var Product = mongoose.model('Product', productSchema);
var User = mongoose.model('User', userSchema);

module.exports = {
    Product: Product,
    User: User
};