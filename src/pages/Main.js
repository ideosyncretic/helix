import React from "react";
import { Card, Layout, Page } from "@shopify/polaris";

const Main = () => (
  <Page title="Gallery">
    <Layout>
      <Layout.Section>
        <Card title="Images" sectioned>
          <Card.Section title="Filters" />
          <Card.Section />
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);

export default Main;
