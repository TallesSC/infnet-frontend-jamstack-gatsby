import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '../layouts/PageLayout/PageLayout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <div className="container">
        home
      </div>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
