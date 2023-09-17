import { LabelType } from "@data";
import { ButtonIcon, Popup, Text } from "@ui"
import { StylesLabelsContent } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

type LabelsPopupProps = {
  labels: LabelType[];
  closePopup: () => void;
}

export const LabelsPopup = ({ labels, closePopup }: LabelsPopupProps) => {
  return (
    <>
      <Popup handleClose={closePopup} title="Labels">
        <StylesLabelsContent>
          <ul>
            {labels.map((l) => (
              <li key={l.id}>{l.title}</li>
            ))}
          </ul>
          <ButtonIcon
            icon={<AiOutlinePlus color="#127bdf" />}
          >
            <Text color="#127bdf" size={14}>Create label</Text>
          </ButtonIcon>
        </StylesLabelsContent>
      </Popup>
    </>
  )
}