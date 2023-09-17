import { Text } from '@ui';
import { AiFillFlag } from "react-icons/ai";
import { LabelsPopup } from './components';
import { StyledLabelsButton } from './styles';
import { LabelType } from '@data';

type LabelsProps = {
  labels: LabelType[];
  showLabelsPopup: () => void;
  isLabelsPopupShown: boolean;
  closeLabelsPopup: () => void;
}
const Labels = ({ labels, showLabelsPopup, isLabelsPopupShown, closeLabelsPopup }: LabelsProps) => {

  return (
    <>
      <StyledLabelsButton onClick={showLabelsPopup} icon={<AiFillFlag size={24} color="red" />}>
        <Text>Labels</Text>
      </StyledLabelsButton>
      {isLabelsPopupShown ? (
        <LabelsPopup
          labels={labels}
          closePopup={closeLabelsPopup}
        />
      ) : null}
    </>
  )
};

export default Labels;
