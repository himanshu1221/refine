import {
    GitHubBanner,
    Refine,
    AuthBindings,
    Authenticated,
} from "@refinedev/core";
import {
    notificationProvider,
    ThemedLayout,
    ErrorComponent,
    AuthPage,
    RefineThemes,
} from "@refinedev/antd";
import {
    GoogleOutlined,
    GithubOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    CatchAllNavigate,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostEdit, PostShow } from "pages/posts";
import { DashboardPage } from "pages/dashboard";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ providerName, email }) => {
            if (providerName === "google") {
                window.location.href =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                return {
                    success: true,
                };
            }

            if (providerName === "github") {
                window.location.href =
                    "https://github.com/login/oauth/authorize";
                return {
                    success: true,
                };
            }

            if (email) {
                localStorage.setItem("email", email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                error: {
                    message: "Login failed",
                    name: "Invalid email or password",
                },
            };
        },
        register: async (params) => {
            if (params.email && params.password) {
                localStorage.setItem("email", params.email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }
            return {
                success: false,
                error: {
                    message: "Register failed",
                    name: "Invalid email or password",
                },
            };
        },
        updatePassword: async (params) => {
            if (params.newPassword) {
                //we can update password here
                return {
                    success: true,
                };
            }
            return {
                success: false,
                error: {
                    message: "Update password failed",
                    name: "Invalid password",
                },
            };
        },
        forgotPassword: async (params) => {
            if (params.email) {
                //we can send email with reset password link here
                return {
                    success: true,
                };
            }
            return {
                success: false,
                error: {
                    message: "Forgot password failed",
                    name: "Invalid email",
                },
            };
        },
        logout: async () => {
            localStorage.removeItem("email");
            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async (error) => {
            console.error(error);
            return { error };
        },
        check: async () =>
            localStorage.getItem("email")
                ? {
                      authenticated: true,
                  }
                : {
                      authenticated: false,
                      error: {
                          message: "Check failed",
                          name: "Not authenticated",
                      },
                      logout: true,
                      redirectTo: "/login",
                  },
        getPermissions: async () => ["admin"],
        getIdentity: async () => ({
            id: 1,
            name: "Jane Doe",
            avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
        }),
    };

    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    authProvider={authProvider}
                    dataProvider={dataProvider(API_URL)}
                    routerProvider={routerProvider}
                    resources={[
                        {
                            name: "dashboard",
                            list: "/",
                            meta: {
                                label: "Dashboard",
                                icon: <DashboardOutlined />,
                            },
                        },
                        {
                            name: "posts",
                            list: "/posts",
                            show: "/posts/show/:id",
                            edit: "/posts/edit/:id",
                        },
                    ]}
                    notificationProvider={notificationProvider}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated
                                    fallback={<CatchAllNavigate to="/login" />}
                                >
                                    <ThemedLayout>
                                        <Outlet />
                                    </ThemedLayout>
                                </Authenticated>
                            }
                        >
                            <Route index element={<DashboardPage />} />

                            <Route path="/posts">
                                <Route index element={<PostList />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                                <Route path="show/:id" element={<PostShow />} />
                            </Route>
                        </Route>

                        <Route
                            element={
                                <Authenticated fallback={<Outlet />}>
                                    <NavigateToResource resource="posts" />
                                </Authenticated>
                            }
                        >
                            <Route
                                path="/login"
                                element={
                                    <AuthPage
                                        type="login"
                                        providers={[
                                            {
                                                name: "google",
                                                label: "Sign in with Google",
                                                icon: (
                                                    <GoogleOutlined
                                                        style={{
                                                            fontSize: 24,
                                                            lineHeight: 0,
                                                        }}
                                                    />
                                                ),
                                            },
                                            {
                                                name: "github",
                                                label: "Sign in with GitHub",
                                                icon: (
                                                    <GithubOutlined
                                                        style={{
                                                            fontSize: 24,
                                                            lineHeight: 0,
                                                        }}
                                                    />
                                                ),
                                            },
                                        ]}
                                    />
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <AuthPage
                                        type="register"
                                        providers={[
                                            {
                                                name: "google",
                                                label: "Sign in with Google",
                                                icon: (
                                                    <GoogleOutlined
                                                        style={{
                                                            fontSize: 24,
                                                            lineHeight: 0,
                                                        }}
                                                    />
                                                ),
                                            },
                                            {
                                                name: "github",
                                                label: "Sign in with GitHub",
                                                icon: (
                                                    <GithubOutlined
                                                        style={{
                                                            fontSize: 24,
                                                            lineHeight: 0,
                                                        }}
                                                    />
                                                ),
                                            },
                                        ]}
                                    />
                                }
                            />
                            <Route
                                path="/forgot-password"
                                element={<AuthPage type="forgotPassword" />}
                            />
                            <Route
                                path="/update-password"
                                element={<AuthPage type="updatePassword" />}
                            />
                        </Route>

                        <Route
                            element={
                                <Authenticated>
                                    <ThemedLayout>
                                        <Outlet />
                                    </ThemedLayout>
                                </Authenticated>
                            }
                        >
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
