import { useTable } from "@hooks";
import { BaseKey, BaseRecord, HttpError, UseFormProps } from "@refinedev/core";
import { ButtonProps } from "antd";

import { useTableProps, useTableReturnType } from "../useTable";
import { UseFormReturnType, useForm } from "../../form/useForm";

export type useEditableTableReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
    TSearchVariables = unknown,
> = useTableReturnType<TData, TError, TSearchVariables> &
    UseFormReturnType<TData, TError, TVariables> & {
        saveButtonProps: ButtonProps & {
            onClick: () => void;
        };
        cancelButtonProps: ButtonProps & {
            onClick: () => void;
        };
        editButtonProps: (id: BaseKey) => ButtonProps & {
            onClick: () => void;
        };
        isEditing: (id: BaseKey) => boolean;
    };

type useEditableTableProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
    TSearchVariables = unknown,
> = Omit<
    useTableProps<TData, TError, TSearchVariables>,
    "successNotification" | "errorNotification"
> &
    UseFormProps<TData, TError, TVariables>;

/**
 * `useEditeableTable` allows you to implement edit feature on the table with ease,
 * on top of all the features that {@link https://refine.dev/docs/api-references/hooks/table/useTable `useTable`} provides.
 * `useEditableTable` return properties that can be used on Ant Design's {@link https://ant.design/components/table/ `<Table>`}
 * and {@link https://ant.design/components/form/ `<Form>`} components.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/hooks/table/useEditableTable} for more details.
 */
export const useEditableTable = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
    TSearchVariables = unknown,
>(
    props: useEditableTableProps<
        TData,
        TError,
        TVariables,
        TSearchVariables
    > = {},
): useEditableTableReturnType<TData, TError, TVariables, TSearchVariables> => {
    const table = useTable<TData, TError, TSearchVariables>({
        ...props,
        successNotification: undefined,
        errorNotification: undefined,
    });
    const edit = useForm<TData, TError, TVariables>({
        ...props,
        action: "edit",
        redirect: false,
    });

    const { id: editId, setId, saveButtonProps } = edit;

    const cancelButtonProps = {
        onClick: () => {
            setId(undefined);
        },
    };

    const editButtonProps = (id: BaseKey) => {
        return {
            onClick: () => setId(id),
        };
    };

    const isEditing = (id: BaseKey) => id === editId;

    return {
        ...table,
        ...edit,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps,
        isEditing,
    };
};
