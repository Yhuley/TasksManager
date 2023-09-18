import { LabelType } from "@data";
import cx from 'classnames';
import { StyledLabelFilterWrapper } from "./styles";

type LabelFilterProps = {
  labels: LabelType[];
  labelFilters: string[];
  handleLabelSelect: (id: string) => void;
}

export const LabelFilter = ({ labelFilters, labels, handleLabelSelect }: LabelFilterProps) => {

  const isActive = (id: string) => labelFilters.includes(id);

  return (
    <StyledLabelFilterWrapper>
      <ul className="list">
        {labels.map((l) => (
          <button
            key={l.id}
            className={cx(isActive(l.id) && "active")}
            style={{ backgroundColor: l.color }}
            onClick={() => handleLabelSelect(l.id)}
          />
        ))}
      </ul>
    </StyledLabelFilterWrapper>
  )
}
