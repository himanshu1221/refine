---
id: theming
title: Theme
sidebar_label: Theme
---

```tsx live shared
import { List, Edit, Create, EditButton } from "@refinedev/chakra-ui";
import {
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useForm } from "@refinedev/react-hook-form";

const PostList: React.FC = () => {
    const columns = React.useMemo<ColumnDef<IPost>[]>(
        () => [
            {
                id: "id",
                header: "ID",
                accessorKey: "id",
            },
            {
                id: "title",
                header: "Title",
                accessorKey: "title",
            },
            {
                id: "actions",
                header: "Actions",
                accessorKey: "id",
                cell: function render({ getValue }) {
                    return (
                        <EditButton
                            hideText
                            recordItemId={getValue() as number}
                        />
                    );
                },
            },
        ],
        [],
    );

    const { getHeaderGroups, getRowModel } = useTable({
        columns,
        refineCoreProps: {
            initialPageSize: 5,
        },
    });

    return (
        <List>
            <TableContainer whiteSpace="pre-line">
                <Table variant="simple">
                    <Thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <Th key={header.id}>
                                        {!header.isPlaceholder && (
                                            <Text>
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext(),
                                                )}
                                            </Text>
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </List>
    );
};

const PostEdit: React.FC = () => {
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm<IPost>();

    return (
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!errors?.title}>
                <FormLabel>Title</FormLabel>
                <Input
                    {...register("title", { required: "Title is required" })}
                />
                <FormErrorMessage>
                    {`${errors.title?.message}`}
                </FormErrorMessage>
            </FormControl>
        </Edit>
    );
};

const PostCreate = () => {
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm<IPost>();

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!errors?.title}>
                <FormLabel>Title</FormLabel>
                <Input
                    {...register("title", { required: "Title is required" })}
                />
                <FormErrorMessage>
                    {`${errors.title?.message}`}
                </FormErrorMessage>
            </FormControl>
        </Create>
    );
};

interface IPost {
    id: number;
    title: string;
}
```

The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from **refine**. You can find more information about theme in Chakra UI documentation.

[Refer to the Chakra UI documentation for more information about theme. &#8594](https://chakra-ui.com/docs/styled-system/customize-theme)

## Theme customization

`<ChakraProvider/>` component can be used to change theme and other global settings. It is not required if you decide to use the default theme. You can also use `refineTheme` provided by **refine**.

```tsx live url=http://localhost:3000 previewHeight=450px
setInitialRoutes(["/posts"]);

// visible-block-start
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {
    ErrorComponent,
    Layout,
    notificationProvider,
    // highlight-next-line
    refineTheme,
} from "@refinedev/chakra-ui";
import {
    ChakraProvider,
    // highlight-next-line
    extendTheme,
} from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { PostCreate, PostEdit, PostList } from "./pages";

const App = () => {
    // highlight-start
    const customTheme = extendTheme({
        ...refineTheme,
        colors: {
            sider: {
                background: "#4A5568",
                collapseButton: "#1a202c",
            },
        },
    });
    // highlight-end

    return (
        // highlight-next-line
        <ChakraProvider theme={customTheme}>
            <BrowserRouter>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                    notificationProvider={notificationProvider()}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                            edit: "/posts/edit/:id",
                            create: "/posts/create",
                        },
                    ]}
                >
                    <Routes>
                        <Route element={(
                            <Layout>
                                <Outlet />
                            </Layout>
                        )}>
                            <Route path="posts">
                                <Route index element={<PostList />} />
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                            </Route>
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                </Refine>
            </BrowserRouter>
        </ChakraProvider>
    );
};
// visible-block-end
render(<App />);
```

:::info

[Refer to the `refineTheme` object in the source code to see the default theme values.. &#8594](https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/types/theme.ts)

:::

## Theme switching

Chakra UI comes with built-in support for managing color mode in your apps. You can manage the color mode on refine applications such as Chakra UI applications.

:::tip

Chakra stores the color mode in `localStorage` and appends a className to the body to ensure the color mode is persistent.
:::

[Refer to the Chakra UI documentation for more information about color mode. &#8594](https://chakra-ui.com/docs/styled-system/color-mode)

```tsx live url=http://localhost:3000 previewHeight=500px
setInitialRoutes(["/posts"]);

// visible-block-start
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {
    ErrorComponent,
    Layout,
    notificationProvider,
    // highlight-next-line
    refineTheme,
} from "@refinedev/chakra-ui";
import {
    ChakraProvider,
    Box,
    IconButton,
    Icon,
    // highlight-start
    useColorMode,
    extendTheme,
    // highlight-end
} from "@chakra-ui/react";
import { IconSun, IconMoonStars } from "@tabler/icons";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { PostCreate, PostEdit, PostList } from "./pages";

// highlight-start
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            py="2"
            px="4"
            display="flex"
            justifyContent="flex-end"
            w="full"
            bg="chakra-body-bg"
        >
            <IconButton
                variant="ghost"
                aria-label="Toggle theme"
                onClick={toggleColorMode}
            >
                <Icon
                    as={colorMode === "light" ? IconMoonStars : IconSun}
                    w="18px"
                    h="18px"
                />
            </IconButton>
        </Box>
    );
};
// highlight-end

const App = () => {
    // highlight-start
    const customTheme = extendTheme({
        ...refineTheme,
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false,
        },
    });
    // highlight-end

    return (
        // highlight-next-line
        <ChakraProvider theme={customTheme}>
            <BrowserRouter>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                    notificationProvider={notificationProvider()}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                            edit: "/posts/edit/:id",
                            create: "/posts/create",
                        },
                    ]}
                >
                    <Routes>
                        <Route element={(
                            // highlight-next-line
                            <Layout Header={Header}>
                                <Outlet />
                            </Layout>
                        )}>
                            <Route path="posts">
                                <Route index element={<PostList />} />
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                            </Route>
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                </Refine>
            </BrowserRouter>
        </ChakraProvider>
    );
};
// visible-block-end
render(<App />);
```

:::tip

If you want to customize the default layout elements provided with `@refinedev/chakra-ui` package, check out the [Custom Layout](/docs/advanced-tutorials/custom-layout) tutorial.

:::