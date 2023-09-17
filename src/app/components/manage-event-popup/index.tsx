import { TextInput, Popup, Checkbox, DatePicker, PrimaryButton, Text, ButtonIcon } from "@ui"
import { v4 as uuid } from "uuid";
import { ReactElement } from "react";
import { Formik } from 'formik';
import { AppEvent } from "@data";
import { StyledForm } from "./styles";
import { EventSchema } from "@app/utils";
import { addHours } from "date-fns";
import { useManageEvent } from "./hooks";
import { FaTrashAlt }from "react-icons/fa";

type ManageEventPopupProps = {
  closePopup: () => void;
  eventToEdit?: AppEvent;
  defaultStartDate?: Date;
}

const ManageEventPopup = ({ closePopup, eventToEdit, defaultStartDate }: ManageEventPopupProps): ReactElement => {
  const { onSubmit, onDelete } = useManageEvent(closePopup, !!eventToEdit);

  return (
    <Popup handleClose={closePopup} title={eventToEdit ? 'Edit event' : 'Add event'}>
      <Formik<AppEvent>
        onSubmit={onSubmit}
        validationSchema={EventSchema}
        enableReinitialize
        initialValues={{
          id: eventToEdit?.id || uuid(),
          title: eventToEdit?.title || '',
          allDay: eventToEdit?.allDay || false,
          start: defaultStartDate || eventToEdit?.start || new Date(),
          end: eventToEdit?.end || addHours(defaultStartDate || new Date(), 1),
          resource: eventToEdit?.resource || ''
        }}
      >
        {({ errors, handleChange, values, setFieldValue, isValid, isSubmitting }) => (
          <StyledForm>
            <TextInput
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Event title"
              error={errors.title}
              label="Title*"
            />
            <Checkbox 
              checked={values.allDay}
              id="allDay"
              name="allDay"
              label="All day"
              onClick={() => setFieldValue(`allDay`, !values.allDay)}
              error={errors.allDay}
            />    
            {!values.allDay ? (
              <>
                <DatePicker
                  name="start"
                  label="Event start date"
                  error={errors.start}
                  date={values.start || new Date()}
                  onChange={(newDate) => setFieldValue('start', newDate)}
                />
                <DatePicker
                  name="end"
                  label="Event end date"
                  error={errors.end}
                  date={values.end || new Date()}
                  onChange={(newDate) => setFieldValue('end', newDate)}
                />
              </>
              ) : null}
            <TextInput
              name="resource"
              onChange={handleChange}
              value={values.resource}
              placeholder="Resource url"
              error={errors.resource} 
              label="URL to event"
            />
            <PrimaryButton type="submit" disabled={!isValid || isSubmitting}>
              <Text color="#fff">{eventToEdit ? 'Edit' : 'Add'}</Text>
            </PrimaryButton>
            {eventToEdit ? (
              <ButtonIcon onClick={() => onDelete(eventToEdit.id)} icon={<FaTrashAlt color="red" size={12} />}>
                <Text color="red" size={12}>Delete event</Text>
              </ButtonIcon>
            ) : null}
          </StyledForm>
        )}
      </Formik>
    </Popup>
  )
}

export default ManageEventPopup;
