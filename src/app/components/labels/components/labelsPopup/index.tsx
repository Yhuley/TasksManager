import { LabelType } from "@data";
import { ButtonIcon, Popup, Text } from "@ui"
import { StylesLabelsContent } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import ManageLabelPopup from "./components/manageLabelPopup";

type LabelsPopupProps = {
  labels: LabelType[];
  closePopup: () => void;
}

export const LabelsPopup = ({ labels, closePopup }: LabelsPopupProps) => {
  const [isCreateLabelPopupShown, setCreateLabelPopupShown] = useState(false);
  const [labelToEdit, setLabelToEdit] = useState<LabelType | null>(null);

  return (
    <>
      <Popup handleClose={closePopup} title="Labels">
        <StylesLabelsContent>
          {labels.length ? (
            <>
              <Text>Labels:</Text>
              <ul className="list">
                {labels.map((l) => (
                  <li key={l.id} className="item">
                    <div className="color" style={{ backgroundColor: l.color }} />
                    <Text size={14}>{l.title}</Text>
                    <ButtonIcon onClick={() => setLabelToEdit(l)} icon={<FaPen color="grey" />} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <ButtonIcon
            icon={<AiOutlinePlus color="#127bdf" />}
            onClick={() => setCreateLabelPopupShown(true)}
          >
            <Text color="#127bdf" size={14}>Create new label</Text>
          </ButtonIcon>
        </StylesLabelsContent>
      </Popup>

      {isCreateLabelPopupShown ? (
        <ManageLabelPopup closePopup={() => setCreateLabelPopupShown(false)} />
      ) : null}
      {labelToEdit ? (
        <ManageLabelPopup labelToEdit={labelToEdit} closePopup={() => setLabelToEdit(null)} />
      ) : null}
    </>
  )
}