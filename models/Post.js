import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    pictureBase: {
      type: String,
      default: null,
    },
    userPictureBase: {
      type: String,
      default: null,
    },
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
      default: {}
    },
    comments: {
      type: [{
        userId: String,
        firstName: String,
        lastName: String,
        commentText: String,
        userPictureBase: {
          type: String,
          default: null
        }
      }],
      default: []
    }
    // comments: {
    //   type: [mongoose.Schema.Types.Comment], 
    //   ref: 'Comment',
    //   default: []
    // }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
