import { GitHubBanner, Refine } from "@refinedev/core";
import {
    ThemedLayout,
    ErrorComponent,
    RefineThemes,
    notificationProvider,
    RefineSnackbarProvider,
} from "@refinedev/mui";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { PostList, PostCreate, PostEdit } from "pages/posts";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={RefineThemes.Blue}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "posts",
                                list: "/posts",
                                create: "/posts/create",
                                edit: "/posts/edit/:id",
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
                                    <ThemedLayout>
                                        <Outlet />
                                    </ThemedLayout>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="posts" />
                                    }
                                />

                                <Route path="/posts">
                                    <Route index element={<PostList />} />
                                    <Route
                                        path="create"
                                        element={<PostCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<PostEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
