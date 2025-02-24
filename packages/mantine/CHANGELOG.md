# @pankod/refine-mantine

## 2.5.2

### Patch Changes

-   [#4076](https://github.com/refinedev/refine/pull/4076) [`0c787747f38`](https://github.com/refinedev/refine/commit/0c787747f38a8e65dec32f4c6ec337ef99ea9e01) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - The `wrapperStyles` properties of `<ThemedSider>`'s `<ThemedTitle>` have been moved to the parent component. As a result, it is now possible to pass a custom `<Title>` component to `<ThemedLayout>` that will be styled correctly.

-   [#4083](https://github.com/refinedev/refine/pull/4083) [`7dbb4b0d400`](https://github.com/refinedev/refine/commit/7dbb4b0d400aaf864e74e4126d19a19739142e03) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `ThemedTitle` cursor is now a pointer when hovering over the logo.

## 2.5.1

### Patch Changes

-   [#4076](https://github.com/refinedev/refine/pull/4076) [`0c787747f38`](https://github.com/refinedev/refine/commit/0c787747f38a8e65dec32f4c6ec337ef99ea9e01) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - The `wrapperStyles` properties of `<ThemedSider>`'s `<ThemedTitle>` have been moved to the parent component. As a result, it is now possible to pass a custom `<Title>` component to `<ThemedLayout>` that will be styled correctly.

-   [#4083](https://github.com/refinedev/refine/pull/4083) [`7dbb4b0d400`](https://github.com/refinedev/refine/commit/7dbb4b0d400aaf864e74e4126d19a19739142e03) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `ThemedTitle` cursor is now a pointer when hovering over the logo.

## 2.5.0

### Minor Changes

-   [#3996](https://github.com/refinedev/refine/pull/3996) [`327be2be623`](https://github.com/refinedev/refine/commit/327be2be623ab9a62a32974315c3d2453baf4a07) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `RefineThemes` added. It contains predefined colors for the Mantine components.

    ```tsx
    import { Refine } from "@refinedev/core";
    import { RefineThemes } from "@refinedev/mantine";
    import dataProvider from "@refinedev/simple-rest";

    const App = () => {
        // ---
        return (
            <MantineProvider theme={RefineThemes.Magenta}>
                <Refine dataProvider={dataProvider("YOUR_API_URL")}>
                    {/** your app here */}
                </Refine>
            </MantineProvider>
        );
    };
    ```

    -   default title with icon added to `AuthPage`. It uses `<ThemedTitle>` component from `@refinedev/mantine`. You can remove it by setting `title` prop to `false`.

    ```tsx
    import { AuthPage, ThemedTitle } from "@refinedev/mantine";
    const MyLoginPage = () => {
        return (
            <AuthPage
                type="login"
                title={
                    <ThemedTitle
                        title="My Title"
                        icon={<img src="https://refine.dev/img/logo.png" />}
                    />
                }
            />
        );
    };
    ```

    -   `title` prop added to `AuthPage`'s `renderContent` prop to use in the custom content.

    ```tsx
    import { Box, Text } from "@mantine/core";
    import { AuthPage } from "@refinedev/mantine";

    const MyLoginPage = () => {
        return (
            <AuthPage
                contentProps={{
                    style: {
                        width: "400px",
                    },
                }}
                renderContent={(
                    content: React.ReactNode,
                    title: React.ReactNode,
                ) => {
                    return (
                        <Box
                            bg="white"
                            borderRadius="md"
                            px="5"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {title}
                            <Text>Extra Header</Text>
                            {content}
                            <Text>Extra Footer</Text>
                        </Box>
                    );
                }}
            />
        );
    };
    ```

    -   `<ThemedLayout>`, `<ThemedSider>`, `<ThemedTitle>`, `<ThemedHeader>` created to use theme colors.

    -   `<EditButton>` in `<Show>` color changed to `brand`.
    -   `<CreateButton>` color changed to `brand`.

    -   `<AuthPage>` component uses colors from the theme.
    -   `<ThemedTitle>` added to `AuthPage`

### Patch Changes

-   [#3974](https://github.com/refinedev/refine/pull/3974) [`4dcc20d6a60`](https://github.com/refinedev/refine/commit/4dcc20d6a6097bb81a094e4bcb630504b2a055d2) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Deprecated the `WelcomePage` component. It'll be used from `@refinedev/core` instead.

## 2.4.0

### Minor Changes

-   [#3996](https://github.com/refinedev/refine/pull/3996) [`327be2be623`](https://github.com/refinedev/refine/commit/327be2be623ab9a62a32974315c3d2453baf4a07) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `RefineThemes` added. It contains predefined colors for the Mantine components.

    ```tsx
    import { Refine } from "@refinedev/core";
    import { RefineThemes } from "@refinedev/mantine";
    import dataProvider from "@refinedev/simple-rest";

    const App = () => {
        // ---
        return (
            <MantineProvider theme={RefineThemes.Magenta}>
                <Refine dataProvider={dataProvider("YOUR_API_URL")}>
                    {/** your app here */}
                </Refine>
            </MantineProvider>
        );
    };
    ```

    -   default title with icon added to `AuthPage`. It uses `<ThemedTitle>` component from `@refinedev/mantine`. You can remove it by setting `title` prop to `false`.

    ```tsx
    import { AuthPage, ThemedTitle } from "@refinedev/mantine";
    const MyLoginPage = () => {
        return (
            <AuthPage
                type="login"
                title={
                    <ThemedTitle
                        title="My Title"
                        icon={<img src="https://refine.dev/img/logo.png" />}
                    />
                }
            />
        );
    };
    ```

    -   `title` prop added to `AuthPage`'s `renderContent` prop to use in the custom content.

    ```tsx
    import { Box, Text } from "@mantine/core";
    import { AuthPage } from "@refinedev/mantine";

    const MyLoginPage = () => {
        return (
            <AuthPage
                contentProps={{
                    style: {
                        width: "400px",
                    },
                }}
                renderContent={(
                    content: React.ReactNode,
                    title: React.ReactNode,
                ) => {
                    return (
                        <Box
                            bg="white"
                            borderRadius="md"
                            px="5"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {title}
                            <Text>Extra Header</Text>
                            {content}
                            <Text>Extra Footer</Text>
                        </Box>
                    );
                }}
            />
        );
    };
    ```

    -   `<ThemedLayout>`, `<ThemedSider>`, `<ThemedTitle>`, `<ThemedHeader>` created to use theme colors.

    -   `<EditButton>` in `<Show>` color changed to `brand`.
    -   `<CreateButton>` color changed to `brand`.

    -   `<AuthPage>` component uses colors from the theme.
    -   `<ThemedTitle>` added to `AuthPage`

### Patch Changes

-   [#3974](https://github.com/refinedev/refine/pull/3974) [`4dcc20d6a60`](https://github.com/refinedev/refine/commit/4dcc20d6a6097bb81a094e4bcb630504b2a055d2) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Deprecated the `WelcomePage` component. It'll be used from `@refinedev/core` instead.

## 2.3.7

### Patch Changes

-   [#3975](https://github.com/refinedev/refine/pull/3975) [`b1e6e32f9a1`](https://github.com/refinedev/refine/commit/b1e6e32f9a19e8f26f95d41c942f90e96ed68372) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - Fixed the unsaved changes dialog is popping up unexpectedly when the user clicks the logs out.

        -   The `<ThemedSider>`'s `onClick` handler was changed to use the `window.confirm` API to manage the confirmation dialog.

    -   `<RefineThemes>` colors updated to match the new theme colors.

-   Updated dependencies [[`2798f715361`](https://github.com/refinedev/refine/commit/2798f715361c5fd407d09429d94b05b602b50397)]:
    -   @refinedev/ui-types@1.5.0

## 2.3.6

### Patch Changes

-   [#3975](https://github.com/refinedev/refine/pull/3975) [`b1e6e32f9a1`](https://github.com/refinedev/refine/commit/b1e6e32f9a19e8f26f95d41c942f90e96ed68372) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - Fixed the unsaved changes dialog is popping up unexpectedly when the user clicks the logs out.

        -   The `<ThemedSider>`'s `onClick` handler was changed to use the `window.confirm` API to manage the confirmation dialog.

    -   `<RefineThemes>` colors updated to match the new theme colors.

-   Updated dependencies [[`2798f715361`](https://github.com/refinedev/refine/commit/2798f715361c5fd407d09429d94b05b602b50397)]:
    -   @refinedev/ui-types@1.4.0

## 2.3.5

### Patch Changes

-   [#3956](https://github.com/refinedev/refine/pull/3956) [`c54714ed9ab`](https://github.com/refinedev/refine/commit/c54714ed9abd289edef9a6bef4e85b234a6b6e55) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed an issue where the `<NumberField />` component would throw an error if the `value` prop was set to `undefined`.

## 2.3.4

### Patch Changes

-   [#3956](https://github.com/refinedev/refine/pull/3956) [`c54714ed9ab`](https://github.com/refinedev/refine/commit/c54714ed9abd289edef9a6bef4e85b234a6b6e55) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed an issue where the `<NumberField />` component would throw an error if the `value` prop was set to `undefined`.

## 2.3.3

### Patch Changes

-   [#3954](https://github.com/refinedev/refine/pull/3954) [`7dc9686f83b`](https://github.com/refinedev/refine/commit/7dc9686f83bc142a621ca4f347c3cf0ea4320e62) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed an issue where the form dirty state was not reset after setting initial values. This caused the form to be dirty even though changes were not made. For this reason, the `<UnSavedChangesNotifier>` always warned when user tried to leave page.

## 2.3.2

### Patch Changes

-   [#3948](https://github.com/refinedev/refine/pull/3948) [`b4950503334`](https://github.com/refinedev/refine/commit/b495050333464224f34851c9c57ffab457a3f120) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the unsaved changes dialog is popping up unexpectedly when the user clicks the delete button or logs out, when the form is dirty.

    -   The `<DeleteButton>` already has a confirmation dialog, so the alert was removed.
    -   The `<Sider>`'s `onClick` handler was changed to use the `window.confirm` API to manage the confirmation dialog.

## 2.3.1

### Patch Changes

-   [#3948](https://github.com/refinedev/refine/pull/3948) [`b4950503334`](https://github.com/refinedev/refine/commit/b495050333464224f34851c9c57ffab457a3f120) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the unsaved changes dialog is popping up unexpectedly when the user clicks the delete button or logs out, when the form is dirty.

    -   The `<DeleteButton>` already has a confirmation dialog, so the alert was removed.
    -   The `<Sider>`'s `onClick` handler was changed to use the `window.confirm` API to manage the confirmation dialog.

## 2.3.0

### Minor Changes

-   [#3912](https://github.com/refinedev/refine/pull/3912) [`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `title` prop added to `AuthPage`'s `renderContent` prop to use in the custom content.
    -   `title` prop added to `AuthPage` to render a custom title.
        -   ⚠️ These features have not been implemented yet. Only types were added. It will be implemented in the next release.

### Patch Changes

-   Updated dependencies [[`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb)]:
    -   @refinedev/ui-types@1.3.0

## 2.2.0

### Minor Changes

-   [#3912](https://github.com/refinedev/refine/pull/3912) [`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - `title` prop added to `AuthPage`'s `renderContent` prop to use in the custom content.
    -   `title` prop added to `AuthPage` to render a custom title.
        -   ⚠️ These features have not been implemented yet. Only types were added. It will be implemented in the next release.

### Patch Changes

-   Updated dependencies [[`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb)]:
    -   @refinedev/ui-types@1.2.0

## 2.1.0

### Minor Changes

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    `meta` prop is added. To ensure backward compatibility, `metaData` prop will be used if `meta` prop is not provided.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Updated the components to match the changes in routing system of `@refinedev/core`.

    ## `meta` property in components

    This includes `meta` props in buttons and `Sider` component. `meta` property can be used to pass additional parameters to the navigation paths.

    For a `posts` resource definition like this:

    ```tsx
    <Refine
        resources={[
            {
                name: "posts",
                list: "/posts",
                show: "/:authorId/posts/:id",
            }
        ]}
    >
    ```

    You can pass `authorId` to the `ShowButton` component like this:

    ```tsx
    <ShowButton resource="posts" id="1" meta={{ authorId: 123 }}>
    ```

    This will navigate to `/123/posts/1` path.

    ## `syncWithLocation` support in `useModalForm` hook

    `useModalForm` hook now support `syncWithLocation` prop. This prop can be used to sync the visibility state of them with the location via query params.

    You can pass a boolean or an object with `key` and `syncId` properties.

    -   `key` is used to define the query param key. Default value is inferred from the resource and the action. For example `posts-create` for `posts` resource and `create` action.

    -   `syncId` is used to include the `id` property in the query param key. Default value is `false`. This is useful for `edit` and `clone` actions.

    ## Removed props

    `ignoreAccessControlProvider` prop is removed from buttons.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!

    -   `useSelect`'s `sort` prop is now deprecated. Use `sorters` prop instead.

    ```diff
    useSelect({
    -    sort,
    +    sorters,
    })
    ```

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!

    -   `<ReadyPage>` isnow deprecated.
    -   Created a `<WelcomePage>` component to welcome users.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!

    ## 🪄 Migrating your project automatically with refine-codemod ✨

    [`@refinedev/codemod`](https://github.com/refinedev/refine/tree/master/packages/codemod) package handles the breaking changes for your project automatically, without any manual steps. It migrates your project from `3.x.x` to `4.x.x`.

    Just `cd` into root folder of your project (where `package.json` is contained) and run this command:

    ```sh
    npx @refinedev/codemod@latest refine3-to-refine4
    ```

    And it's done. Now your project uses `refine@4.x.x`.

    ## 📝 Changelog

    All **Mantine** components re-exported from `@refinedev/mantine` have been removed. You should import them from Mantine packages directly.

    If the packages are not installed, you can install them with your package manager:

    > You don't have to install all of these packages below. Only install the packages you use.

    ```bash
    npm install @mantine/core@5 @emotion/react @mantine/hooks@5 @mantine/notifications@5 @mantine/form@5
    # or
    pnpm add @mantine/core@5 @emotion/react @mantine/hooks@5 @mantine/notifications@5 @mantine/form@5
    # or
    yarn add @mantine/core@5 @emotion/react @mantine/hooks@5 @mantine/notifications@5 @mantine/form@5
    ```

    After that, you can import them from related packages directly.

    ```diff
    - import {
    -    MantineProvider,
    -    NotificationsProvider,
    -    TextInput,
    -    Select,
    -    List,
    -    useSelect,
    - } from "@refinedev/mantine";

    + import { useSelect, List } from "@refinedev/mantine";
    + import { MantineProvider, TextInput, Select } from "@mantine/core";
    + import { NotificationsProvider } from "@mantine/notifications";
    ```

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Added legacy auth provider and new auth provider support to all components and hooks.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    Updated buttons with `resource` property. `resourceNameOrRouteName` is now deprecated but kept working until next major version.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    **Moving to the `@refinedev` scope 🎉🎉**

    Moved to the `@refinedev` scope and updated our packages to use the new scope. From now on, all packages will be published under the `@refinedev` scope with their new names.

    Now, we're also removing the `refine` prefix from all packages. So, the `@pankod/refine-core` package is now `@refinedev/core`, `@pankod/refine-antd` is now `@refinedev/antd`, and so on.

### Patch Changes

## 1.17.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

### Patch Changes

-   Updated dependencies [[`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb)]:
    -   @pankod/refine-ui-types@0.16.0

## 1.16.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

### Patch Changes

-   Updated dependencies [[`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb)]:
    -   @pankod/refine-ui-types@0.15.0

## 1.15.10

### Patch Changes

-   [#3606](https://github.com/refinedev/refine/pull/3606) [`00c9a5c471a`](https://github.com/refinedev/refine/commit/00c9a5c471a684169f800d65800d87cc8d6b6511) Thanks [@aliemir](https://github.com/aliemir)! - Fixed the issue with `disabled` state in `DeleteButton`'s still opening the popover.

## 1.15.9

### Patch Changes

-   [#3606](https://github.com/refinedev/refine/pull/3606) [`00c9a5c471a`](https://github.com/refinedev/refine/commit/00c9a5c471a684169f800d65800d87cc8d6b6511) Thanks [@aliemir](https://github.com/aliemir)! - Fixed the issue with `disabled` state in `DeleteButton`'s still opening the popover.

## 1.15.8

### Patch Changes

-   [#3382](https://github.com/refinedev/refine/pull/3382) [`6604586b030`](https://github.com/refinedev/refine/commit/6604586b030576c4b582a675de97678dc63dbb10) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added: description of `StepProps` to the jsDoc of the `useStepForm` hook.

## 1.15.7

### Patch Changes

-   [#3382](https://github.com/refinedev/refine/pull/3382) [`6604586b030`](https://github.com/refinedev/refine/commit/6604586b030576c4b582a675de97678dc63dbb10) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added: description of `StepProps` to the jsDoc of the `useStepForm` hook.

## 1.15.6

### Patch Changes

-   [#3396](https://github.com/refinedev/refine/pull/3396) [`bb2774e3941`](https://github.com/refinedev/refine/commit/bb2774e39411c844b01f552d1cae2931d4f6b9f9) Thanks [@omeraplak](https://github.com/omeraplak)! - fix: `onSubmit` is set to nullable on [`<AuthPage>`](https://refine.dev/docs/api-reference/mantine/components/mantine-auth-page/)

## 1.15.5

### Patch Changes

-   [#3396](https://github.com/refinedev/refine/pull/3396) [`bb2774e3941`](https://github.com/refinedev/refine/commit/bb2774e39411c844b01f552d1cae2931d4f6b9f9) Thanks [@omeraplak](https://github.com/omeraplak)! - fix: `onSubmit` is set to nullable on [`<AuthPage>`](https://refine.dev/docs/api-reference/mantine/components/mantine-auth-page/)

## 1.15.4

### Patch Changes

-   [#3228](https://github.com/refinedev/refine/pull/3228) [`5aabfa19493`](https://github.com/refinedev/refine/commit/5aabfa1949374850f0f352acf842fafb01adcdcb) Thanks [@aliemir](https://github.com/aliemir)! - Fixed useForm's saveButtonProps.onClick event type

## 1.15.3

### Patch Changes

-   [#3228](https://github.com/refinedev/refine/pull/3228) [`5aabfa19493`](https://github.com/refinedev/refine/commit/5aabfa1949374850f0f352acf842fafb01adcdcb) Thanks [@aliemir](https://github.com/aliemir)! - Fixed useForm's saveButtonProps.onClick event type

## 1.15.2

### Patch Changes

-   [#3220](https://github.com/refinedev/refine/pull/3220) [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b) Thanks [@aliemir](https://github.com/aliemir)! - Updated image links in `README.MD` with CDN

-   Updated dependencies [[`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b)]:
    -   @pankod/refine-ui-types@0.14.2

## 1.15.1

### Patch Changes

-   [#3220](https://github.com/refinedev/refine/pull/3220) [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b) Thanks [@aliemir](https://github.com/aliemir)! - Updated image links in `README.MD` with CDN

-   Updated dependencies [[`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b)]:
    -   @pankod/refine-ui-types@0.14.1

## 1.15.0

### Minor Changes

-   [#3159](https://github.com/refinedev/refine/pull/3159) [`af2eefb32a4`](https://github.com/refinedev/refine/commit/af2eefb32a4df157062c28125c53aa3a47f48ff8) Thanks [@aliemir](https://github.com/aliemir)! - Updated `LoginPage` and `ReadyPage` to use **refine** logos from CDN rather than bundled svg files.

## 1.14.0

### Minor Changes

-   [#3159](https://github.com/refinedev/refine/pull/3159) [`af2eefb32a4`](https://github.com/refinedev/refine/commit/af2eefb32a4df157062c28125c53aa3a47f48ff8) Thanks [@aliemir](https://github.com/aliemir)! - Updated `LoginPage` and `ReadyPage` to use **refine** logos from CDN rather than bundled svg files.

## 1.13.4

### Patch Changes

-   [#3128](https://github.com/refinedev/refine/pull/3128) [`db1000a7628`](https://github.com/refinedev/refine/commit/db1000a7628d910c965eb63cd1cff81ffcd4fd4a) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Fixed: `crud` components import path changed to relative path due to export issues on build.

## 1.13.3

### Patch Changes

-   [#3128](https://github.com/refinedev/refine/pull/3128) [`db1000a7628`](https://github.com/refinedev/refine/commit/db1000a7628d910c965eb63cd1cff81ffcd4fd4a) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Fixed: `crud` components import path changed to relative path due to export issues on build.

## 1.13.2

### Patch Changes

-   [#3109](https://github.com/refinedev/refine/pull/3109) [`16549ed3012`](https://github.com/refinedev/refine/commit/16549ed30128750f04ae17da12024b9734d5adae) Thanks [@aliemir](https://github.com/aliemir)! - Updated `swizzle` items and their messages to include extra information and usage examples.

## 1.13.1

### Patch Changes

-   [#3109](https://github.com/refinedev/refine/pull/3109) [`16549ed3012`](https://github.com/refinedev/refine/commit/16549ed30128750f04ae17da12024b9734d5adae) Thanks [@aliemir](https://github.com/aliemir)! - Updated `swizzle` items and their messages to include extra information and usage examples.

## 1.13.0

### Minor Changes

-   [#3062](https://github.com/refinedev/refine/pull/3062) [`6c2ed708a9a`](https://github.com/refinedev/refine/commit/6c2ed708a9a76faddb9d27a0aca9f4ada3c270af) Thanks [@aliemir](https://github.com/aliemir)! - - Updated components and their type imports to make them compatible with `swizzle` feature.
    -   Added `refine.config.js` to configure the `swizzle` feature.

## 1.12.0

### Minor Changes

-   [#3062](https://github.com/refinedev/refine/pull/3062) [`6c2ed708a9a`](https://github.com/refinedev/refine/commit/6c2ed708a9a76faddb9d27a0aca9f4ada3c270af) Thanks [@aliemir](https://github.com/aliemir)! - - Updated components and their type imports to make them compatible with `swizzle` feature.
    -   Added `refine.config.js` to configure the `swizzle` feature.

## 1.11.8

### Patch Changes

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fix `Layout` component for `Table` overflows. `Table` was not respecting the flex layout even inside `ScrollArea` component. This was causing the table to overflow the parent container.

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fixed shrink issue for Layout

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Added `...rest` props to `MarkdownField` component

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fixed `TagField` prop types.

## 1.11.7

### Patch Changes

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fix `Layout` component for `Table` overflows. `Table` was not respecting the flex layout even inside `ScrollArea` component. This was causing the table to overflow the parent container.

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fixed shrink issue for Layout

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Added `...rest` props to `MarkdownField` component

-   [#3027](https://github.com/refinedev/refine/pull/3027) [`177d0a764fe`](https://github.com/refinedev/refine/commit/177d0a764feb60fe9235a36debc052133dc72fa8) Thanks [@aliemir](https://github.com/aliemir)! - Fixed `TagField` prop types.

## 1.11.6

### Patch Changes

-   [#3011](https://github.com/refinedev/refine/pull/3011) [`593531713c3`](https://github.com/refinedev/refine/commit/593531713c3f88d8bca7f6b0397f4068ebc85a04) Thanks [@aliemir](https://github.com/aliemir)! - Fixed `<NumberField />` type for missing `value` prop type, which was erroring out when using `<NumberField />`.

## 1.11.5

### Patch Changes

-   [#3011](https://github.com/refinedev/refine/pull/3011) [`593531713c3`](https://github.com/refinedev/refine/commit/593531713c3f88d8bca7f6b0397f4068ebc85a04) Thanks [@aliemir](https://github.com/aliemir)! - Fixed `<NumberField />` type for missing `value` prop type, which was erroring out when using `<NumberField />`.

## 1.11.4

### Patch Changes

-   [#2969](https://github.com/refinedev/refine/pull/2969) [`a9459550a4`](https://github.com/refinedev/refine/commit/a9459550a49a640c5a1e393d4f2b8e6e9cd53dc6) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed `transformValues` generics in `useForm`, `useModalForm` and `useStepForm` hooks.

-   [#2969](https://github.com/refinedev/refine/pull/2969) [`a9459550a4`](https://github.com/refinedev/refine/commit/a9459550a49a640c5a1e393d4f2b8e6e9cd53dc6) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed peerDependencies of packages

## 1.11.3

### Patch Changes

-   [#2969](https://github.com/refinedev/refine/pull/2969) [`a9459550a4`](https://github.com/refinedev/refine/commit/a9459550a49a640c5a1e393d4f2b8e6e9cd53dc6) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed `transformValues` generics in `useForm`, `useModalForm` and `useStepForm` hooks.

-   [#2969](https://github.com/refinedev/refine/pull/2969) [`a9459550a4`](https://github.com/refinedev/refine/commit/a9459550a49a640c5a1e393d4f2b8e6e9cd53dc6) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed peerDependencies of packages

## 1.11.2

### Patch Changes

-   [#2970](https://github.com/refinedev/refine/pull/2970) [`513c078df1`](https://github.com/refinedev/refine/commit/513c078df1aa7b694fc41e5d710eff0d9a716fed) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added padding to ReadyPage component.

## 1.11.1

### Patch Changes

-   [#2970](https://github.com/refinedev/refine/pull/2970) [`513c078df1`](https://github.com/refinedev/refine/commit/513c078df1aa7b694fc41e5d710eff0d9a716fed) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added padding to ReadyPage component.

## 1.11.0

### Minor Changes

-   [#2872](https://github.com/refinedev/refine/pull/2872) [`da3fc4a702`](https://github.com/refinedev/refine/commit/da3fc4a702b3ea50f7c1a2cc484fe6364fc3ddc0) Thanks [@TDP17](https://github.com/TDP17)! - Feat: Added ability to manage breadcrumb component globally via options

    > **The option set in individual CRUD components takes priority over the global option**

## 1.10.0

### Minor Changes

-   [#2872](https://github.com/refinedev/refine/pull/2872) [`da3fc4a702`](https://github.com/refinedev/refine/commit/da3fc4a702b3ea50f7c1a2cc484fe6364fc3ddc0) Thanks [@TDP17](https://github.com/TDP17)! - Feat: Added ability to manage breadcrumb component globally via options

    > **The option set in individual CRUD components takes priority over the global option**

## 1.9.5

### Patch Changes

-   [#2857](https://github.com/refinedev/refine/pull/2857) [`1d8b1820f4`](https://github.com/refinedev/refine/commit/1d8b1820f47118dd1e3d3dfbfc9df655056d591a) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the `<ReadyPage />` mobile view.

-   [#2857](https://github.com/refinedev/refine/pull/2857) [`1d8b1820f4`](https://github.com/refinedev/refine/commit/1d8b1820f47118dd1e3d3dfbfc9df655056d591a) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the `<ErrorComponent />` responsive view.

## 1.9.4

### Patch Changes

-   [#2857](https://github.com/refinedev/refine/pull/2857) [`1d8b1820f4`](https://github.com/refinedev/refine/commit/1d8b1820f47118dd1e3d3dfbfc9df655056d591a) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the `<ReadyPage />` mobile view.

-   [#2857](https://github.com/refinedev/refine/pull/2857) [`1d8b1820f4`](https://github.com/refinedev/refine/commit/1d8b1820f47118dd1e3d3dfbfc9df655056d591a) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed the `<ErrorComponent />` responsive view.

## 1.9.3

### Patch Changes

-   [#2869](https://github.com/refinedev/refine/pull/2869) [`d64e4a02c3`](https://github.com/refinedev/refine/commit/d64e4a02c3c23f6d1386948f9e0f3666eb20188e) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - chore: @mantine/\* package version fixed to 5.5.6 due to [useForm issue](https://github.com/mantinedev/mantine/pull/2758)

## 1.9.2

### Patch Changes

-   [#2856](https://github.com/refinedev/refine/pull/2856) [`21d0f19863`](https://github.com/refinedev/refine/commit/21d0f19863fb6c3508aa92e2097cc6d9702a16f0) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - fixed: Mantine UserFormInput requires 2 type argument(s).

## 1.9.1

### Patch Changes

-   [#2856](https://github.com/refinedev/refine/pull/2856) [`21d0f19863`](https://github.com/refinedev/refine/commit/21d0f19863fb6c3508aa92e2097cc6d9702a16f0) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - fixed: Mantine UserFormInput requires 2 type argument(s).

## 1.9.0

### Minor Changes

-   [#2839](https://github.com/refinedev/refine/pull/2839) [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516) Thanks [@aliemir](https://github.com/aliemir)! - **Deprecation**

    `ignoreAccessControlProvider` prop on buttons is deprecated. Use `accessContro.enabled` instead.

    **Features**

    `accessControl.enabled` prop is added to buttons to enable/disable access control for buttons.
    `accessControl.hideIfUnauthorized` prop is added to buttons to hide the button if access is denied.

-   [#2836](https://github.com/refinedev/refine/pull/2836) [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added locales prop to date fields

### Patch Changes

-   [#2838](https://github.com/refinedev/refine/pull/2838) [`f7968fa16f`](https://github.com/refinedev/refine/commit/f7968fa16f9930442e1122fe5294e350252bdd5c) Thanks [@aliemir](https://github.com/aliemir)! - Fixed #2828 - Buttons were not respecting access control when navigating to a new page. Now, if button is disabled, it will not also block the navigation not just the onClick event.

-   [#2818](https://github.com/refinedev/refine/pull/2818) [`295fc2f773`](https://github.com/refinedev/refine/commit/295fc2f7735c05101a5dba24e3ebd73039ebd317) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added missing `Title` component export.

-   Updated dependencies [[`476285e342`](https://github.com/refinedev/refine/commit/476285e3427c7e065892a281da529c038aee83d2), [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516), [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd)]:
    -   @pankod/refine-ui-types@0.14.0

## 1.8.0

### Minor Changes

-   [#2836](https://github.com/refinedev/refine/pull/2836) [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added locales prop to date fields

### Patch Changes

-   Updated dependencies [[`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd)]:
    -   @pankod/refine-ui-types@0.13.0

## 1.7.0

### Minor Changes

-   [#2839](https://github.com/refinedev/refine/pull/2839) [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516) Thanks [@aliemir](https://github.com/aliemir)! - **Deprecation**

    `ignoreAccessControlProvider` prop on buttons is deprecated. Use `accessContro.enabled` instead.

    **Features**

    `accessControl.enabled` prop is added to buttons to enable/disable access control for buttons.
    `accessControl.hideIfUnauthorized` prop is added to buttons to hide the button if access is denied.

### Patch Changes

-   [#2838](https://github.com/refinedev/refine/pull/2838) [`f7968fa16f`](https://github.com/refinedev/refine/commit/f7968fa16f9930442e1122fe5294e350252bdd5c) Thanks [@aliemir](https://github.com/aliemir)! - Fixed #2828 - Buttons were not respecting access control when navigating to a new page. Now, if button is disabled, it will not also block the navigation not just the onClick event.

-   [#2818](https://github.com/refinedev/refine/pull/2818) [`295fc2f773`](https://github.com/refinedev/refine/commit/295fc2f7735c05101a5dba24e3ebd73039ebd317) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added missing `Title` component export.

-   Updated dependencies [[`476285e342`](https://github.com/refinedev/refine/commit/476285e3427c7e065892a281da529c038aee83d2), [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516)]:
    -   @pankod/refine-ui-types@0.12.0

## 1.6.13

### Patch Changes

-   -   Updated the default false icon for the BooleanField component to be a cross instead of a minus.
    -   Updated the TextField export name to be "TextField" instead of "TextFieldComponent".
    -   Fixed the tsdoc links for the field components.

## 1.6.12

### Patch Changes

-   [#2799](https://github.com/refinedev/refine/pull/2799) [`78b61da700`](https://github.com/refinedev/refine/commit/78b61da700ad0ee68e538c69746ddb6ed8378df8) Thanks [@salihozdemir](https://github.com/salihozdemir)! - - Updated the default false icon for the BooleanField component to be a cross instead of a minus.
    -   Updated the TextField export name to be "TextField" instead of "TextFieldComponent".
    -   Fixed the tsdoc links for the field components.

## 1.6.11

### Patch Changes

-   Add primary color to `<SaveButton/>`'s `<ActionIcon/>` component.

## 1.6.10

### Patch Changes

-   [#2758](https://github.com/refinedev/refine/pull/2758) [`3960549907`](https://github.com/refinedev/refine/commit/39605499074d73a75d73f8bfce03088f63915027) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Add primary color to `<SaveButton/>`'s `<ActionIcon/>` component.

## 1.6.9

### Patch Changes

-   Fixed incorrectly used hooks in AuthPage component

## 1.6.8

### Patch Changes

-   [#2769](https://github.com/refinedev/refine/pull/2769) [`501aebe997`](https://github.com/refinedev/refine/commit/501aebe9974520c30093cc9cec781ee58129d053) Thanks [@dgelineau](https://github.com/dgelineau)! - Fixed incorrectly used hooks in AuthPage component

## 1.6.7

### Patch Changes

-   Fixed <ErrorComponent /> responsive design for mobile devices

## 1.6.6

### Patch Changes

-   [#2748](https://github.com/refinedev/refine/pull/2748) [`0eaddb65ee`](https://github.com/refinedev/refine/commit/0eaddb65ee77777fd1e6b9e5501c18d69bef4be8) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed <ErrorComponent /> responsive design for mobile devices

## 1.6.5

### Patch Changes

-   -   Added `<LoadingOverlay />` component to basic view components.
    -   Update `goBack` prop usage, now it can be passed to `<ActionButton />`'s children.
    -   Fixed the issue that when `title` prop is passed to basic views, the back button is not shown.
    -   Default title size decreased from `h2` to `h3`.
-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.11.4

## 1.6.4

### Patch Changes

-   [#2718](https://github.com/refinedev/refine/pull/2718) [`d78d2a2a99`](https://github.com/refinedev/refine/commit/d78d2a2a99adb508094069cda23deaba55c25b63) Thanks [@salihozdemir](https://github.com/salihozdemir)! - - Added `<LoadingOverlay />` component to basic view components.
    -   Update `goBack` prop usage, now it can be passed to `<ActionButton />`'s children.
    -   Fixed the issue that when `title` prop is passed to basic views, the back button is not shown.
    -   Default title size decreased from `h2` to `h3`.
-   Updated dependencies [[`d78d2a2a99`](https://github.com/refinedev/refine/commit/d78d2a2a99adb508094069cda23deaba55c25b63)]:
    -   @pankod/refine-ui-types@0.11.3

## 1.6.3

### Patch Changes

-   Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.2

### Patch Changes

-   Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.1

### Patch Changes

-   [#2712](https://github.com/refinedev/refine/pull/2712) [`c434055011`](https://github.com/refinedev/refine/commit/c434055011cbdd846c9f228c23987607bb828a1b) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.0

### Minor Changes

-   Updated `formProps` property on `<AuthPage />` component

### Patch Changes

-   Added `clearable` prop to `useSelect` hook that is `true` by default.

## 1.5.0

### Minor Changes

-   [#2663](https://github.com/refinedev/refine/pull/2663) [`c624a52b23`](https://github.com/refinedev/refine/commit/c624a52b2310db1349ec556a7671f23779cc3622) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Updated `formProps` property on `<AuthPage />` component

### Patch Changes

-   [#2701](https://github.com/refinedev/refine/pull/2701) [`ddd9eb3aff`](https://github.com/refinedev/refine/commit/ddd9eb3aff961fcedf354f2c77c1844131d713a1) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added `clearable` prop to `useSelect` hook that is `true` by default.

## 1.4.0

### Minor Changes

-   -   Added new <AuthPage /> component core and mantine support.
    -   Move Auth types `@pankod/refine-ui-types` to `@pankod/refine-core`

## 1.3.0

### Minor Changes

-   [#2627](https://github.com/refinedev/refine/pull/2627) [`c5fb45d61f`](https://github.com/refinedev/refine/commit/c5fb45d61fa7470a7a34762ad19d17e9f87e4421) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - - Added new <AuthPage /> component core and mantine support.
    -   Move Auth types `@pankod/refine-ui-types` to `@pankod/refine-core`

## 1.2.0

### Minor Changes

-   First release of `@pankod/refine-mantine` 🎉

## 1.1.0

### Minor Changes

-   [#2505](https://github.com/refinedev/refine/pull/2505) [`a4dbb63c88`](https://github.com/refinedev/refine/commit/a4dbb63c881a83e5146829130b1377e791b44469) Thanks [@salihozdemir](https://github.com/salihozdemir)! - First release of `@pankod/refine-mantine` 🎉

## 1.0.6

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.11.0

## 1.0.5

### Patch Changes

-   Updated dependencies [[`a65525de6f`](https://github.com/refinedev/refine/commit/a65525de6f995babfca1058e933cdbea67d6032e)]:
    -   @pankod/refine-ui-types@0.10.0

## 1.0.4

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.9.0

## 1.0.3

### Patch Changes

-   Updated dependencies [[`ad99916d6d`](https://github.com/refinedev/refine/commit/ad99916d6dbd181b857fd7df7b9619d8cac5e3e0)]:
    -   @pankod/refine-ui-types@0.8.0

## 1.0.2

### Patch Changes

-   Fixed version of react-router to `6.3.0`

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.7.0

## 1.0.1

### Patch Changes

-   [#2501](https://github.com/refinedev/refine/pull/2501) [`4095a578d4`](https://github.com/refinedev/refine/commit/4095a578d471254ee58412f130ac5a0f3a62880f) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed version of react-router to `6.3.0`
