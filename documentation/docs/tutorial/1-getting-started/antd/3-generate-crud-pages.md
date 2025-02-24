---
id: generate-crud-pages
title: 4. Generating CRUD pages automatically with Inferencer
tutorial:
    prev: tutorial/getting-started/{preferredUI}/create-project
    next: tutorial/getting-started/store-your-repository
---

## Inferencer

Inferencer is a powerful tool in the **refine** ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with the required forms and tables for CRUD operations.

#### Why use Inferencer?

There are several benefits to using Inferencer:

1. The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.

2. Code generated by Inferencer is also easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to it according to your needs. This allows you to quickly iterate and get your project up and running faster.

3. Using Inferencer can also help you avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development.

Overall, using Inferencer will greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, allowing you to focus on more complex tasks instead.

#### Learn Inferencer

You can Learn more about [how Inferencer works](/docs/packages/documentation/inferencer) and [how to use it with Ant Design](/docs/api-reference/antd/components/inferencer/) in our documents.

## How to use Inferencer

The `@refinedev/inferencer` package provides the `<AntdInferencer/>` component, which can be imported from `@refinedev/inferencer/antd` and is used to generate CRUD pages based on your API response with Ant Design components.

The `<AntdInferencer/>` component is used for passing appropriate values to the `resources` prop of the `<Refine/>` component in `App.tsx` as shown below:

:::info

The `resources` prop will be explained in detail in [Unit 4](/docs/tutorial/understanding-resources/index). For now, you can assume that the resource is a collection of data on your API used in the app.

:::

```tsx title="src/App.tsx"
import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerBindings, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//highlight-next-line
import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        show: "/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route
                            index
                            element={
                                <NavigateToResource resource="blog_posts" />
                            }
                        />
                        {/* highlight-start */}
                        <Route path="blog-posts">
                            <Route index element={<AntdInferencer />} />
                            <Route
                                path="show/:id"
                                element={<AntdInferencer />}
                            />
                            <Route
                                path="edit/:id"
                                element={<AntdInferencer />}
                            />
                            <Route path="create" element={<AntdInferencer />} />
                        </Route>
                        {/* highlight-end */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

export default App;
```

At this point, **refine** will automatically generate the CRUD pages for the `blog_posts` resource based on the API response.

## Preview the auto-generated pages

So far we have added complete CRUD pages by utilizing the Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us.

Before we start, let's understand the API that we will be using in this tutorial. We will be using the https://api.fake-rest.refine.dev API. This API is created by the **refine** team and is used for demo purposes. It is a simple REST API that contains some resources like `blog_posts`, `categories`, etc.

:::info

How **refine** apps communicate with the API via the `dataProvider` will be explained in [Unit 3](/docs/tutorial/understanding-dataprovider/index).

:::

You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.

### List Page

To preview the list page, go back to your browser and go to <a href="localhost:3000" rel="noopener noreferrer nofollow">localhost:3000</a>.

You should see the list page for the `blog_posts` resource that was generated by Inferencer like below:

:::note
When you navigate to the `localhost:3000`, **refine** will redirect you to the initial resource's list page registered to `<Refine/>` component, like `localhost:3000/blog-posts`
:::

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts
setInitialRoutes(["/blog-posts"]);

import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerBindings, {
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//highlight-next-line
import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                //highlight-start
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        show: "/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                //highlight-end
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        {/* highlight-start */}
                        <Route path="blog-posts">
                            <Route index element={<AntdInferencer />} />
                            <Route
                                path="show/:id"
                                element={<AntdInferencer />}
                            />
                            <Route
                                path="edit/:id"
                                element={<AntdInferencer />}
                            />
                            <Route path="create" element={<AntdInferencer />} />
                        </Route>
                        {/* highlight-end */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

render(<App />);
```

### Create Page

To preview the create page, go back to your browser and go to <a href="localhost:3000/blog-posts/create" rel="noopener noreferrer nofollow">localhost:3000/blog-posts/create</a> or click the "Create" button on the list page.

You should see the create page for the `blog_posts` resource that was generated by Inferencer like below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create
setInitialRoutes(["/blog-posts/create"]);

import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerBindings, {
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//highlight-next-line
import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                //highlight-start
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        show: "/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                //highlight-end
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        {/* highlight-start */}
                        <Route path="blog-posts">
                            <Route index element={<AntdInferencer />} />
                            <Route
                                path="show/:id"
                                element={<AntdInferencer />}
                            />
                            <Route
                                path="edit/:id"
                                element={<AntdInferencer />}
                            />
                            <Route path="create" element={<AntdInferencer />} />
                        </Route>
                        {/* highlight-end */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

render(<App />);
```

### Edit Page

To preview the edit page, go back to your browser and go to <a href="localhost:3000/blog-posts/edit/123" rel="noopener noreferrer nofollow">localhost:3000/blog-posts/edit/123</a> or click the "Edit" button on the record in the list page.

You should see the edit page for the `blog_posts` resource with the id `123` that was generated by Inferencer like below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123
setInitialRoutes(["/blog-posts/edit/123"]);

import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerBindings, {
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//highlight-next-line
import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                //highlight-start
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        show: "/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                //highlight-end
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        {/* highlight-start */}
                        <Route path="blog-posts">
                            <Route index element={<AntdInferencer />} />
                            <Route
                                path="show/:id"
                                element={<AntdInferencer />}
                            />
                            <Route
                                path="edit/:id"
                                element={<AntdInferencer />}
                            />
                            <Route path="create" element={<AntdInferencer />} />
                        </Route>
                        {/* highlight-end */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

render(<App />);
```

### Show Page

To preview the show page, go back to your browser and go to <a href="localhost:3000/blog-posts/show/123" rel="noopener noreferrer nofollow">localhost:3000/blog-posts/show/123</a> or click the "Show" button on the record in the list page.

You should see the show page for the `blog_posts` resource with the id `123` that was generated by Inferencer like below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123
setInitialRoutes(["/blog-posts/show/123"]);

import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerBindings, {
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//highlight-next-line
import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                //highlight-start
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        show: "/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                //highlight-end
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        {/* highlight-start */}
                        <Route path="blog-posts">
                            <Route index element={<AntdInferencer />} />
                            <Route
                                path="show/:id"
                                element={<AntdInferencer />}
                            />
                            <Route
                                path="edit/:id"
                                element={<AntdInferencer />}
                            />
                            <Route path="create" element={<AntdInferencer />} />
                        </Route>
                        {/* highlight-end */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
            </Refine>
        </BrowserRouter>
    );
};

render(<App />);
```

<br/>
<br/>

You will learn how to create CRUD pages manually using the code generated by Inferencer as a reference in [Unit 5](/docs/tutorial/adding-crud-pages/antd/index).

<Checklist>

<ChecklistItem id="generated-crud-pages">
I understood what Inferencer is, how it works and how it can make my work easier.
</ChecklistItem>
<ChecklistItem id="generated-crud-pages-2">

I have inspected the auto-generated `list`, `create`, `edit`, and `show` pages.

</ChecklistItem>

</Checklist>
