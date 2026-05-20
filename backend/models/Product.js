import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  //multiple images
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  size: {
    type: [String], 
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  isInStock: {
    type: Boolean,
    default: function () {
      return this.stock > 0;
    },
  },
  tags: {
    type: [String],
    default: [],
  },
  //delete
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  ratingsCount: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: [Number],
    default: [],
  },
  collections: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Collection',
    default: [],
  },
  category: {
    type: String,
    enum: ['men', 'women', 'kids'],
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
