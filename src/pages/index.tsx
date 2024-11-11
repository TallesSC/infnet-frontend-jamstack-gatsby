import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../layouts/PageLayout/PageLayout';
import PostList from '../components/PostList/PostList';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PostList />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
