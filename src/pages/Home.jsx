import { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from 'react-redux';

import { Post } from '../components/Post';
import { fetchPosts } from '../redux/slice/postActionCreators';
import { selectIsAuth } from '../redux/slice/auth';

export const Home = () => {
  const { posts, isloading } = useSelector((state) => state.postsReducer);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isloading ? [...Array(5)] : posts).map((post, index) =>
            isloading ? (
              <Post isLoading={true} key={index}>
                Hello bob
              </Post>
            ) : (
              <Post
                id={post._id}
                title={post.title}
                imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
                user={{
                  avatarUrl:
                    'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                  fullName: 'Keff',
                }}
                createdAt={'12 июня 2022 г.'}
                viewsCount={150}
                commentsCount={3}
                tags={['react', 'fun', 'typescript']}
                isLoading={isloading}
                isEditable={isAuth}
              />
            ),
          )}
        </Grid>
      </Grid>
    </>
  );
};
