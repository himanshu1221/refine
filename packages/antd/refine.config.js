const { dirname, join } = require("path");
const {
    getImports,
    appendAfterImports,
    getFileContent,
} = require("@refinedev/cli");

/** @type {import('@refinedev/cli').RefineConfig} */
module.exports = {
    group: "UI Framework",
    swizzle: {
        items: [
            {
                group: "Buttons",
                label: "ShowButton",
                files: [
                    {
                        src: "./src/components/buttons/show/index.tsx",
                        dest: "./components/buttons/show.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "CreateButton",
                message: `
                **\`Warning:\`**
                This component is used in the below component. If you want to change it, you can run the **swizzle** command for the below component or you can use props to override the default buttons.
                    - <List/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/create/index.tsx",
                        dest: "./components/buttons/create.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "CloneButton",
                files: [
                    {
                        src: "./src/components/buttons/clone/index.tsx",
                        dest: "./components/buttons/clone.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "DeleteButton",
                message: `
                **\`Warning:\`**
                This component is used in the below components. If you want to change it, you can run the **swizzle** command for the below components or you can use props to override the default buttons.
                    - <Edit/>
                    - <List/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/delete/index.tsx",
                        dest: "./components/buttons/delete.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "EditButton",
                message: `
                **\`Warning:\`**
                This component is used in the below component. If you want to change it, you can run the **swizzle** command for the below component or you can use props to override the default buttons.
                    - <Show/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/edit/index.tsx",
                        dest: "./components/buttons/edit.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ExportButton",
                files: [
                    {
                        src: "./src/components/buttons/export/index.tsx",
                        dest: "./components/buttons/export.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ImportButton",
                files: [
                    {
                        src: "./src/components/buttons/import/index.tsx",
                        dest: "./components/buttons/import.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ListButton",
                message: `
                **\`Warning:\`**
                This component is used in the below components. If you want to change it, you can run the **swizzle** command for the below components or you can use props to override the default buttons.
                    - <Edit/>
                    - <Show/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/list/index.tsx",
                        dest: "./components/buttons/list.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "RefreshButton",
                message: `
                **\`Warning:\`**
                This component is used in the below components. If you want to change it, you can run the **swizzle** command for the below components or you can use props to override the default buttons.
                    - <Edit/>
                    - <Show/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/refresh/index.tsx",
                        dest: "./components/buttons/refresh.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "SaveButton",
                message: `
                **\`Warning:\`**
                This component is used in the below components. If you want to change it, you can run the **swizzle** command for the below components or you can use props to override the default buttons.
                    - <Create/>
                    - <Edit/>
                `,
                files: [
                    {
                        src: "./src/components/buttons/save/index.tsx",
                        dest: "./components/buttons/save.tsx",
                    },
                ],
            },
            {
                group: "Basic Views",
                label: "Create",
                files: [
                    {
                        src: "./src/components/crud/create/index.tsx",
                        dest: "./components/crud/create.tsx",
                    },
                ],
            },
            {
                group: "Basic Views",
                label: "List",
                files: [
                    {
                        src: "./src/components/crud/list/index.tsx",
                        dest: "./components/crud/list.tsx",
                    },
                ],
            },
            {
                group: "Basic Views",
                label: "Show",
                files: [
                    {
                        src: "./src/components/crud/show/index.tsx",
                        dest: "./components/crud/show.tsx",
                    },
                ],
            },
            {
                group: "Basic Views",
                label: "Edit",
                files: [
                    {
                        src: "./src/components/crud/edit/index.tsx",
                        dest: "./components/crud/edit.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "BooleanField",
                files: [
                    {
                        src: "./src/components/fields/boolean/index.tsx",
                        dest: "./components/fields/boolean.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "DateField",
                files: [
                    {
                        src: "./src/components/fields/date/index.tsx",
                        dest: "./components/fields/date.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "EmailField",
                files: [
                    {
                        src: "./src/components/fields/email/index.tsx",
                        dest: "./components/fields/email.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "FileField",
                files: [
                    {
                        src: "./src/components/fields/file/index.tsx",
                        dest: "./components/fields/file.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "ImageField",
                files: [
                    {
                        src: "./src/components/fields/image/index.tsx",
                        dest: "./components/fields/image.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "MarkdownField",
                files: [
                    {
                        src: "./src/components/fields/markdown/index.tsx",
                        dest: "./components/fields/markdown.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "NumberField",
                files: [
                    {
                        src: "./src/components/fields/number/index.tsx",
                        dest: "./components/fields/number.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "TagField",
                files: [
                    {
                        src: "./src/components/fields/tag/index.tsx",
                        dest: "./components/fields/tag.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "TextField",
                files: [
                    {
                        src: "./src/components/fields/text/index.tsx",
                        dest: "./components/fields/text.tsx",
                    },
                ],
            },
            {
                group: "Fields",
                label: "UrlField",
                files: [
                    {
                        src: "./src/components/fields/url/index.tsx",
                        dest: "./components/fields/url.tsx",
                    },
                ],
            },
            {
                group: "Pages",
                label: "ErrorPage",
                message: `
                **\`Info:\`**
                If you want to see an example of error page in use, you can refer to the documentation at https://refine.dev/docs/packages/documentation/routers
                `,
                files: [
                    {
                        src: "./src/components/pages/error/index.tsx",
                        dest: "./components/pages/error.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for remove RefineErorrPageProps
                            const refineErrorPagePropsRegex =
                                /React\.FC<RefineErrorPageProps>/g;

                            newContent = newContent.replace(
                                refineErrorPagePropsRegex,
                                "React.FC",
                            );

                            return newContent;
                        },
                    },
                ],
            },
            {
                group: "Pages",
                label: "AuthPage",
                message: `
                **\`Info:\`**
                If you want to see examples of authentication pages in use, you can refer to the documentation at https://refine.dev/docs/packages/documentation/routers
                `,
                files: [
                    {
                        src: "./src/components/pages/auth/index.tsx",
                        dest: "./components/pages/auth/index.tsx",
                    },
                    {
                        src: "./src/components/pages/auth/components/forgotPassword/index.tsx",
                        dest: "./components/pages/auth/components/forgotPassword.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for change style import path
                            const styleImportRegex = /"\.\.\/styles";/g;

                            newContent = newContent.replace(
                                styleImportRegex,
                                `"./styles";`,
                            );

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/pages/auth/components/login/index.tsx",
                        dest: "./components/pages/auth/components/login.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for change style import path
                            const styleImportRegex = /"\.\.\/styles";/g;

                            newContent = newContent.replace(
                                styleImportRegex,
                                `"./styles";`,
                            );

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/pages/auth/components/register/index.tsx",
                        dest: "./components/pages/auth/components/register.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for change style import path
                            const styleImportRegex = /"\.\.\/styles";/g;

                            newContent = newContent.replace(
                                styleImportRegex,
                                `"./styles";`,
                            );

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/pages/auth/components/updatePassword/index.tsx",
                        dest: "./components/pages/auth/components/updatePassword.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for change style import path
                            const styleImportRegex = /"\.\.\/styles";/g;

                            newContent = newContent.replace(
                                styleImportRegex,
                                `"./styles";`,
                            );

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/pages/auth/components/index.tsx",
                        dest: "./components/pages/auth/components/index.tsx",
                    },
                    {
                        src: "./src/components/pages/auth/components/styles.ts",
                        dest: "./components/pages/auth/components/styles.ts",
                    },
                ],
            },
            {
                group: "Other",
                label: "Breadcrumb",
                message: `
                **\`Warning:\`**
                This component is used in the below components. If you want to change it, you can use props to override the default breadcrumb or you can manage globally with the **options** prop to the **<Refine/>** component.
                    - <Edit/>
                    - <List/>
                    - <Show/>
                    - <Create/>

                **\`Passing Breadcrumb Globally:\`**

                \`\`\`
                // title: App.tsx
                import { Breadcrumb } from "components/breadcrumb";

                const App = () => {
                    return (
                        <Refine
                            options={{
                                breadcrumb: <Breadcrumb />
                                /* ... */
                            }}
                            /* ... */
                        />
                    );
                }
                \`\`\`
                `,
                files: [
                    {
                        src: "./src/components/breadcrumb/index.tsx",
                        dest: "./components/breadcrumb.tsx",
                        transform: (content) => {
                            let newContent = content;

                            // for remove type export
                            const breadcrumbPropsExportRegex =
                                /export type BreadcrumbProps = RefineBreadcrumbProps<AntdBreadcrumbProps>;?/g;

                            newContent = newContent.replace(
                                breadcrumbPropsExportRegex,
                                `import { BreadcrumbProps } from "@refinedev/antd";`,
                            );

                            // change the breadcrumb import path
                            const breadcrumbImportRegex =
                                /BreadcrumbProps as AntdBreadcrumbProps,/g;

                            newContent = newContent.replace(
                                breadcrumbImportRegex,
                                "",
                            );

                            return newContent;
                        },
                    },
                ],
            },
            {
                group: "Other",
                label: "Layout",
                message: `
                **\`Warning:\`**
                If you want to change the default layout;
                You should pass layout related components to the **<Layout/>** component's props.

                \`\`\`
                // title: App.tsx
                import { Layout } from "components/layout";
                import { Header } from "components/layout/header";
                import { Sider } from "components/layout/sider";
                import { Title } from "components/layout/title";

                const App = () => {
                    return (
                        <Refine
                            /* ... */
                        >
                            <Layout Header={Header} Sider={Sider} Title={Title} />
                                /* ... */
                            </Layout>
                        </Refine>
                    );
                }
                \`\`\`
                `,
                files: [
                    {
                        src: "./src/components/layout/sider/index.tsx",
                        dest: "./components/layout/sider.tsx",
                        transform: (content) => {
                            let newContent = content;
                            const imports = getImports(content);

                            imports.map((importItem) => {
                                // handle @components import replacement
                                if (importItem.importPath === "@components") {
                                    const newStatement = `import ${importItem.namedImports} from "@refinedev/antd";`;

                                    newContent = newContent.replace(
                                        importItem.statement,
                                        newStatement,
                                    );
                                }

                                // add content of ./styles.ts and remove import
                                if (importItem.importPath === "./styles") {
                                    newContent = newContent.replace(
                                        importItem.statement,
                                        "",
                                    );

                                    let appending = "";

                                    try {
                                        const stylesContent = getFileContent(
                                            join(
                                                dirname(
                                                    "./src/components/layout/sider/index.tsx",
                                                ),
                                                "/styles.ts",
                                            ),
                                            "utf-8",
                                        ).replace("export const", "const");

                                        appending = stylesContent;
                                    } catch (err) {
                                        // console.log(err);
                                    }

                                    newContent = appendAfterImports(
                                        newContent,
                                        appending,
                                    );
                                }
                            });

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/layout/header/index.tsx",
                        dest: "./components/layout/header.tsx",
                    },
                    {
                        src: "./src/components/layout/title/index.tsx",
                        dest: "./components/layout/title.tsx",
                    },
                    {
                        src: "./src/components/layout/index.tsx",
                        dest: "./components/layout/index.tsx",
                    },
                ],
            },
            {
                group: "Other",
                label: "Themed Layout",
                message: `
                **\`Warning:\`**
                If you want to change the default layout;
                You should pass layout related components to the **<ThemedLayout/>** component's props.

                \`\`\`
                // title: App.tsx
                import { ThemedLayout } from "components/themedLayout";
                import { ThemedHeader } from "components/themedLayout/header";
                import { ThemedSider } from "components/themedLayout/sider";
                import { ThemedTitle } from "components/themedLayout/title";

                const App = () => {
                    return (
                        <Refine
                            /* ... */
                        >
                            <ThemedLayout Header={ThemedHeader} Sider={ThemedSider} Title={ThemedTitle} />
                                /* ... */
                            </ThemedLayout>
                        </Refine>
                    );
                }
                \`\`\`
                `,
                files: [
                    {
                        src: "./src/components/themedLayout/sider/index.tsx",
                        dest: "./components/themedLayout/sider.tsx",
                        transform: (content) => {
                            let newContent = content;
                            const imports = getImports(content);

                            imports.map((importItem) => {
                                // handle @components import replacement
                                if (importItem.importPath === "@components") {
                                    const newStatement = `import ${importItem.namedImports} from "@refinedev/antd";`;

                                    newContent = newContent.replace(
                                        importItem.statement,
                                        newStatement,
                                    );
                                }

                                // add content of ./styles.ts and remove import
                                if (importItem.importPath === "./styles") {
                                    newContent = newContent.replace(
                                        importItem.statement,
                                        "",
                                    );

                                    let appending = "";

                                    try {
                                        const stylesContent = getFileContent(
                                            join(
                                                dirname(
                                                    "./src/components/themedLayout/sider/index.tsx",
                                                ),
                                                "/styles.ts",
                                            ),
                                            "utf-8",
                                        ).replace("export const", "const");

                                        appending = stylesContent;
                                    } catch (err) {
                                        // console.log(err);
                                    }

                                    newContent = appendAfterImports(
                                        newContent,
                                        appending,
                                    );
                                }
                            });

                            return newContent;
                        },
                    },
                    {
                        src: "./src/components/themedLayout/header/index.tsx",
                        dest: "./components/themedLayout/header.tsx",
                    },
                    {
                        src: "./src/components/themedLayout/title/index.tsx",
                        dest: "./components/themedLayout/title.tsx",
                    },
                    {
                        src: "./src/components/themedLayout/index.tsx",
                        dest: "./components/themedLayout/index.tsx",
                    },
                ],
            },
        ],
        transform: (content) => {
            let newContent = content;
            const imports = getImports(content);

            imports.map((importItem) => {
                if (importItem.importPath === "@components") {
                    const newStatement = `import ${importItem.namedImports} from "@refinedev/antd";`;

                    newContent = newContent.replace(
                        importItem.statement,
                        newStatement,
                    );
                }

                // for ui-types
                if (importItem.importPath === "@refinedev/ui-types") {
                    newContent = newContent.replace(importItem.statement, "");

                    // prop is data-testid
                    // remove data-testid={*} from props
                    const testIdPropRegex = /data-testid={.*?}/g;

                    newContent = newContent.replace(testIdPropRegex, "");
                }

                // for prop types
                if (
                    importItem.importPath === "../types" ||
                    importItem.importPath === "./types"
                ) {
                    const newStatement = `import type ${importItem.namedImports} from "@refinedev/antd";`;

                    newContent = newContent.replace(
                        importItem.statement,
                        newStatement,
                    );
                }
            });

            return newContent;
        },
    },
};
