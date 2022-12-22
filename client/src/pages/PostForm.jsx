import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { usePosts } from '../context/postContext';
import { useNavigate } from 'react-router-dom';
import { BackPage, FormStyled } from './styles';

export const PostForm = () => {
  const { createPost } = usePosts();
  const navigate = useNavigate();

  return (
    <div>
      <BackPage onClick={()=> navigate("/")}></BackPage>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required")
        })}
      >
        {
          ({ handleSubmit }) => (
            <FormStyled onSubmit={handleSubmit}>
              <h2>Create New Post</h2>
              <Field name="title" placeholder="title" />
              <ErrorMessage component="p" name='title' />
              <Field name="description" placeholder="description" />
              <ErrorMessage component="p" name='description' />
              <button type='submit'>Save</button>
            </FormStyled>
          )
        }
      </Formik>
    </div>
  )
}