import { AppEvent, LabelType } from '@data';
import { ButtonIcon, Text } from '@ui';
import { FormikErrors } from 'formik';
import { FaPlus, FaMinus }from "react-icons/fa";
import { StyledLabelsWrapper } from './styles';

type LabelsListType = {
  labels: LabelType[];
  eventLabels: LabelType[];
  isNewLabel: (id: string, labels: LabelType[]) => boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => 
    Promise<void | FormikErrors<AppEvent>>
}

export const LabelsList = ({ labels, isNewLabel, eventLabels, setFieldValue }: LabelsListType) => {

  return (
    <StyledLabelsWrapper>
      <Text>Labels:</Text>
      <ul className="list">
        {labels.map((l) => {
          const isNew = isNewLabel(l.id, eventLabels);
          return (
            <li key={l.id} className="item">
              <div className="color" style={{ backgroundColor: l.color }} />
              <Text size={14}>{l.title}</Text>
              <ButtonIcon 
                onClick={
                  () => setFieldValue(
                    'labels',
                    isNew
                      ? [...eventLabels, l]
                      : eventLabels.filter((label) => label.id !== l.id)
                  )
                }
                icon={isNew ? <FaPlus color="grey" /> : <FaMinus color="grey" />}
              />
            </li>
          )
        })}
      </ul>
    </StyledLabelsWrapper>
  )
}