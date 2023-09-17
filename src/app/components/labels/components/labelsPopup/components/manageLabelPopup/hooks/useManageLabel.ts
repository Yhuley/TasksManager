import { LabelType, useAppDispatch } from "@data";
import { createLabel, deleteLabel, editLabel } from "@data/reducers/labels";

export const useManageLabel = (closePopup: () => void, isEditForm: boolean) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: LabelType) => {
    isEditForm ? dispatch(editLabel(values)) : dispatch(createLabel(values));
    closePopup();
  };

  const onDelete = (labelId: string) => {
    dispatch(deleteLabel(labelId));
    closePopup();
  }

  return { 
    onSubmit,
    onDelete,
  }
}
