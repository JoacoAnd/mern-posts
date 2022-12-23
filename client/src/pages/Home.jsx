import { PostCard } from "../components/PostCard";
import { usePosts } from "../context/postContext"
import { HomeContainer, NavLink, PostList } from "./styles";
import { TfiWrite } from 'react-icons/tfi';

export const Home = () => {

  const { posts } = usePosts();

  return (
    <HomeContainer>
      <h1><TfiWrite style={{ marginRight: ".5em" }} />Posts ({posts.length})</h1>
      <NavLink to="/new">Create New Post</NavLink>
      {
        posts && posts.length > 0 ?
        
        <PostList>
          {
            posts.map((post) => {
              return <PostCard post={post} key={post._id} />
            })
          }
        </PostList>

        : <h2 style={{textAlign: "center", marginTop: "2em", fontSize: "3rem"}}>No posts</h2>
      }
    </HomeContainer>
  )
}
