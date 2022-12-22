import { Card, Delete, ButtonToast } from "../pages/styles"
import { usePosts } from "../context/postContext";
import toast from 'react-hot-toast';

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>Do you want to delete?</p>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <ButtonToast onClick={() => {
            deletePost(id);
            toast.dismiss(t.id);
          }} 
            className="delete">Delete</ButtonToast>
          <ButtonToast onClick={() => toast.dismiss(t.id)}>Cancel</ButtonToast>
        </div>
      </div>
    ))
  };

  return (
    <Card>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Delete onClick={() => handleDelete(post._id)} />
    </Card>
  )
}