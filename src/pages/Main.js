import React from "react";
import { Layout, Page } from "@shopify/polaris";
import Filters from "../components/Filters";
import ImageList from "../components/ImageList";

const Main = () => (
  <Page title="Gallery" fullWidth>
    <Layout>
      <Layout.Section>
        <Filters />
        <ImageList />
      </Layout.Section>
    </Layout>
  </Page>
);

export default Main;
