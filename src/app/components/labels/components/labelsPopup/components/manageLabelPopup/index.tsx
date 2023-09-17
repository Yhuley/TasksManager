import { LabelType } from "@data";
import { Popup, PrimaryButton, TextInput, Text, ButtonIcon, ColorPicker } from "@ui";
import { v4 as uuid } from "uuid";
import { Formik } from 'formik';
import { StyledForm } from "./styles";
import { LabelSchema } from "@app/utils";
import { FaTrashAlt }from "react-icons/fa";
import { useManageLabel } from "./hooks";

type ManageEventPopupProps = {
  closePopup: () => void;
  labelToEdit?: LabelType;
}

const ManageLabelPopup = ({ closePopup, labelToEdit }: ManageEventPopupProps) => {
  const { onDelete, onSubmit } = useManageLabel(closePopup, !!labelToEdit);

  return (
    <Popup handleClose={closePopup} title={labelToEdit ? 'Edit label' : 'Add label'}>
      <Formik<LabelType>
        onSubmit={onSubmit}
        validationSchema={LabelSchema}
        enableReinitialize
        initialValues={{
          id: labelToEdit?.id || uuid(),
          title: labelToEdit?.title || '',
          color: labelToEdit?.color || '#40bf40'
        }}
      >
        {({ errors, handleChange, setFieldValue, values, isValid, isSubmitting }) => (
          <StyledForm>
            <TextInput
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Label title"
              error={errors.title}
              label="Title"
            />

            <div className="colorWrapper">
              <Text>Label color:</Text>
              <div className="color" style={{ backgroundColor: values.color }} />
            </div>
            <ColorPicker color={values.color} onChangeComplete={(c) => setFieldValue('color', c.hex)} />
            
            <PrimaryButton type="submit" disabled={!isValid || isSubmitting}>
              <Text color="#fff">{labelToEdit ? 'Edit' : 'Add'}</Text>
            </PrimaryButton>
            {labelToEdit ? (
              <ButtonIcon onClick={() => onDelete(labelToEdit.id)} icon={<FaTrashAlt color="red" size={12} />}>
                <Text color="red" size={12}>Delete label</Text>
              </ButtonIcon>
            ) : null}
          </StyledForm>
        )}
      </Formik>
    </Popup>
  )
};

export default ManageLabelPopup;
