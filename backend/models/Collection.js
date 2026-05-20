import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0, // Optional, will be updated when products are added/removed
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      default: [],
    },
  ],
});

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;
