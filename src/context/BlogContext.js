import createDataContext from './createDataContext';
import jsonserver from '../../API/jsonserver';
const blogPostReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;

    case 'edit_blogpost':
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });

    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);

    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonserver.get('/blogPosts');

    dispatch({type: 'get_blogpost', payload: response.data});
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callBack) => {
    await jsonserver.post('/blogPosts', {title, content});
    // dispatch({type: 'add_blogpost', payload: {title, content}});
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    // dispatch({type: 'delete_blogpost', payload: id});
    await jsonserver.delete(`/blogPosts/${id}`);
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content) => {
    // dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    await jsonserver.put(`/blogPosts/${id}`, {title, content});
  };
};

export const {Context, Provider} = createDataContext(
  blogPostReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
);
