import * as RefineAntd from "@refinedev/antd";
import * as AntdPackage from "antd";

import { createInferencer } from "@/create-inferencer";
import {
    jsx,
    componentName,
    prettyString,
    accessor,
    printImports,
    noOp,
    getVariableName,
} from "@/utilities";

import { ErrorComponent } from "./error";
import { LoadingComponent } from "./loading";
import { CodeViewerComponent } from "./code-viewer";

import {
    InferencerResultComponent,
    InferField,
    ImportElement,
    RendererContext,
} from "@/types";

/**
 * a renderer function for list page in Ant Design
 * @internal used internally from inferencer components
 */
export const renderer = ({
    resource,
    fields,
    isCustomPage,
}: RendererContext) => {
    const COMPONENT_NAME = componentName(
        resource.label ?? resource.name,
        "list",
    );
    const recordName = "tableProps?.dataSource";
    const imports: Array<ImportElement> = [
        ["React", "react", true],
        ["IResourceComponentsProps", "@refinedev/core"],
        ["BaseRecord", "@refinedev/core"],
        ["useTable", "@refinedev/antd"],
        ["List", "@refinedev/antd"],
        ["Table", "antd"],
        ["Space", "antd"],
    ];

    const relationFields: (InferField | null)[] = fields.filter(
        (field) => field?.relation && !field?.fieldable && field?.resource,
    );

    const relationHooksCode = relationFields
        .filter(Boolean)
        .map((field) => {
            if (field?.relation && !field.fieldable && field.resource) {
                imports.push(["useMany", "@refinedev/core"]);

                let idsString = "";

                if (field.multiple) {
                    idsString = `[].concat(...(${recordName}?.map((item) => ${accessor(
                        "item",
                        field.key,
                        field.accessor,
                        false,
                    )}) ?? []))`;
                } else {
                    idsString = `${recordName}?.map((item) => ${accessor(
                        "item",
                        field.key,
                        field.accessor,
                        false,
                    )}) ?? []`;
                }

                return `
                const { data: ${getVariableName(
                    field.key,
                    "Data",
                )}, isLoading: ${getVariableName(field.key, "IsLoading")} } =
                useMany({
                    resource: "${field.resource.name}",
                    ids: ${idsString},
                    queryOptions: {
                        enabled: !!${recordName},
                    },
                });
                `;
            }
            return undefined;
        })
        .filter(Boolean);

    const renderRelationFields = (field: InferField) => {
        if (field.relation && field.resource) {
            const validVariableName = getVariableName(field.key, "Data");
            const variableName = `${validVariableName}?.data`;
            const variableIsLoading = getVariableName(field.key, "IsLoading");

            if (Array.isArray(field.accessor)) {
                // not handled - not possible case
                return undefined;
            }

            const loadingCondition = `${variableIsLoading} ? <>Loading...</> : `;

            const dataIndex = field.multiple
                ? `dataIndex="${field.key}"`
                : `dataIndex={["${field.key}", ${
                      field.accessor ? `"${field.accessor}"` : ""
                  }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = "";

            // if multiple, then map it with tagfield
            // if not, then just show the value

            if (field.multiple) {
                imports.push(["TagField", "@refinedev/antd"]);
                let val = "item";

                if (field?.relationInfer) {
                    const valSingle = `${variableName}?.find((resourceItems) => resourceItems.id === ${accessor(
                        "item",
                        undefined,
                        field.accessor,
                    )})`;
                    const valViewableSingle = accessor(
                        valSingle,
                        undefined,
                        field?.relationInfer?.accessor,
                    );
                    val = valViewableSingle;
                }

                render = `render={(value: any[]) => ${loadingCondition} (
                    <>
                        {${accessor(
                            "value",
                            undefined,
                            // field.accessor,
                        )}?.map((item, index) => (
                            <TagField key={index} value={${val}} />
                        ))}
                    </>
                )}`;
            } else {
                if (field?.relationInfer) {
                    const valSingle = `${variableName}?.find((item) => item.id === value)`;
                    const valViewableSingle = accessor(
                        valSingle,
                        undefined,
                        field?.relationInfer?.accessor,
                    );

                    render = `render={(value) => ${loadingCondition} ${valViewableSingle}}`;
                } else {
                    render = "";
                }
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const imageFields = (field: InferField) => {
        if (field.type === "image") {
            imports.push(["ImageField", "@refinedev/antd"]);

            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : `dataIndex={["${field.key}", ${
                          field.accessor ? `"${field.accessor}"` : ""
                      }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <ImageField style={{ maxWidth: "100px" }} value={${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
                " + ",
            )}} />}`;

            if (field.multiple) {
                const val = accessor("item", undefined, field.accessor, " + ");
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <ImageField style={{ maxWidth: "100px" }} value={${val}} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const emailFields = (field: InferField) => {
        if (field.type === "email") {
            imports.push(
                ["TagField", "@refinedev/antd"],
                ["EmailField", "@refinedev/antd"],
            );
            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : `dataIndex={["${field.key}", ${
                          field.accessor ? `"${field.accessor}"` : ""
                      }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <EmailField value={${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
                ' + " " + ',
            )}} />}`;

            if (field.multiple) {
                const val = accessor(
                    "item",
                    undefined,
                    field.accessor,
                    ' + " " + ',
                );
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <TagField value={${val}} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const urlFields = (field: InferField) => {
        if (field.type === "url") {
            imports.push(
                ["UrlField", "@refinedev/antd"],
                ["TagField", "@refinedev/antd"],
            );

            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : `dataIndex={["${field.key}", ${
                          field.accessor ? `"${field.accessor}"` : ""
                      }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <UrlField value={${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
                " + ",
            )}} />}`;

            if (field.multiple) {
                const val = accessor("item", undefined, field.accessor, " + ");
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <TagField value={${val}} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const booleanFields = (field: InferField) => {
        if (field?.type === "boolean") {
            imports.push(["BooleanField", "@refinedev/antd"]);

            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : `dataIndex={["${field.key}", ${
                          field.accessor ? `"${field.accessor}"` : ""
                      }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <BooleanField value={${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
                " && ",
            )}} />}`;

            if (field.multiple) {
                const val = accessor("item", undefined, field.accessor, " && ");
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <BooleanField value={${val}} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }

        return undefined;
    };

    const dateFields = (field: InferField) => {
        if (field.type === "date") {
            imports.push(["DateField", "@refinedev/antd"]);

            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : `dataIndex={["${field.key}", ${
                          field.accessor ? `"${field.accessor}"` : ""
                      }]}`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <DateField value={${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
                ' + " " + ',
            )}} />}`;

            if (field.multiple) {
                const val = accessor(
                    "item",
                    undefined,
                    field.accessor,
                    ' + " " + ',
                );
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <DateField value={${val}} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const richtextFields = (field: InferField) => {
        if (field?.type === "richtext") {
            imports.push(["MarkdownField", "@refinedev/antd"]);

            const dataIndex =
                Array.isArray(field.accessor) || field.multiple
                    ? `dataIndex="${field.key}"`
                    : field.accessor
                    ? `dataIndex={["${field.key}", "${field.accessor}"]}`
                    : `dataIndex="${field.key}"`;

            const title = `title="${prettyString(field.key)}"`;

            let render = jsx`render={(value: any) => <MarkdownField value={(${accessor(
                "value",
                undefined,
                Array.isArray(field.accessor) ? field.accessor : undefined,
            )}).slice(0, 80) + "..."} />}`;

            if (field.multiple) {
                const val = accessor(
                    "item",
                    undefined,
                    field.accessor,
                    ' + " " + ',
                );
                render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <MarkdownField value={(${val})?.slice(0, 80) + "..."} key={index} />
                ))}</>)}`;
            }

            return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
        }

        return undefined;
    };

    const basicFields = (field: InferField) => {
        if (field && (field.type === "text" || field.type === "number")) {
            const dataIndex =
                field.accessor &&
                !Array.isArray(field.accessor) &&
                !field.multiple
                    ? `dataIndex={["${field.key}", "${field.accessor}"]}`
                    : `dataIndex="${field.key}"`;

            const title = `title="${prettyString(field.key)}"`;
            let render = "";

            if (field.multiple) {
                imports.push(["TagField", "@refinedev/antd"]);

                const val = accessor(
                    "item",
                    undefined,
                    field.accessor,
                    ' + " " + ',
                );
                render = `render={(value: any[]) => (<>{value?.map((item) => (
                    <TagField value={${val}} key={${val}} />
                ))}</>)}`;
            }
            if (!field.multiple && Array.isArray(field.accessor)) {
                render = `render={(value: any) => (<>{${accessor(
                    "value",
                    undefined,
                    field.accessor,
                )}}</>)}`;
            }

            return `<Table.Column ${dataIndex} ${title} ${render} />`;
        }
        return undefined;
    };

    const { canEdit, canShow, canDelete } = resource ?? {};

    if (canEdit) {
        imports.push(["EditButton", "@refinedev/antd"]);
    }
    if (canShow) {
        imports.push(["ShowButton", "@refinedev/antd"]);
    }
    if (canDelete) {
        imports.push(["DeleteButton", "@refinedev/antd"]);
    }

    const actionButtons =
        canEdit || canShow || canDelete
            ? jsx`
            <Table.Column
                title="Actions"
                dataIndex="actions"
                render={(_, record: BaseRecord) => (
                    <Space>
                    ${
                        canEdit
                            ? jsx`
                        <EditButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        `
                            : ""
                    }
                    ${
                        canShow
                            ? jsx`
                        <ShowButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        `
                            : ""
                    }
                    ${
                        canDelete
                            ? jsx`
                        <DeleteButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        `
                            : ""
                    }
                    </Space>
                )}
            />
        `
            : "";

    const renderedFields: Array<string | undefined> = fields.map((field) => {
        switch (field?.type) {
            case "text":
            case "number":
                return basicFields(field);
            case "richtext":
                return richtextFields(field);
            case "email":
                return emailFields(field);
            case "image":
                return imageFields(field);
            case "date":
                return dateFields(field);
            case "boolean":
                return booleanFields(field);
            case "url":
                return urlFields(field);
            case "relation":
                return renderRelationFields(field);
            default:
                return undefined;
        }
    });

    noOp(imports);

    return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        const { tableProps } = useTable({
            syncWithLocation: true,
            ${isCustomPage ? ` resource: "${resource.name}",` : ""}
        });
    
        ${relationHooksCode}

        return (
            <List>
                <Table {...tableProps} rowKey="id">
                    ${renderedFields.join("\r\n")}
                    ${actionButtons}
                </Table>
            </List>
        );
    };
    `;
};

/**
 * @experimental This is an experimental component
 */
export const ListInferencer: InferencerResultComponent = createInferencer({
    type: "list",
    additionalScope: [
        ["@refinedev/antd", "RefineAntd", RefineAntd],
        ["antd", "AntdPackage", AntdPackage],
    ],
    codeViewerComponent: CodeViewerComponent,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer,
});
