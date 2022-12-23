import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { usePosts } from '../context/postContext';
import { useNavigate, useParams } from 'react-router-dom';
import { BackPage, FormStyled } from './styles';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';

export const PostForm = () => {
  const { createPost, getPostDetail, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPostDetail(params.id);
        setPost(res);
      };
    })();
  }, [params.id]);

  return (
    <div>
      <BackPage onClick={()=> navigate("/")}></BackPage>
      <Formik
        initialValues={post}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await createPost(values);
          }
          navigate("/");
          actions.setSubmitting(false)
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required")
        })}
        enableReinitialize
      >
        {
          ({ handleSubmit, setFieldValue, isSubmitting }) => (
            <FormStyled onSubmit={handleSubmit}>
              <h2>{post && params.id ? "Editing a Post" : "Create New Post"}</h2>
              <Field name="title" placeholder="title" />
              <ErrorMessage component="p" name='title' />
              <Field name="description" placeholder="description" />
              <ErrorMessage component="p" name='description' />
              <input type="file" name="image" onChange={(e) => setFieldValue("image", e.target.files[0])}/>
              <button type='submit' disabled={isSubmitting}>{isSubmitting ? <Loading /> : "Save"}</button>
            </FormStyled>
          )
        }
      </Formik>
    </div>
  )
}