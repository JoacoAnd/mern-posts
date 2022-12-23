import { Card, Delete, ButtonToast } from "../pages/styles"
import { usePosts } from "../context/postContext";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const navigate = useNavigate();
  const { deletePost } = usePosts();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>Do you want to delete?</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
    <Card onClick={() => navigate(`/posts/${post._id}`)}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      {post.image && <img src={post.image.url} />}
      <Delete onClick={(e) => {
        e.stopPropagation();
        handleDelete(post._id);
      }
      } />
    </Card>
  )
}