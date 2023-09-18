import { EventProps } from "react-big-calendar";
import { StyledEvent } from "./styles";
import { Text } from "@ui";
import { AppEvent } from "@data";

export const Event = ({ title, continuesPrior, continuesAfter, event } : EventProps<AppEvent>) => {
  return (
    <StyledEvent continuesPrior={continuesPrior} continuesAfter={continuesAfter}>
      <Text color="#fff" size={12} weight={300}>{title}</Text>
      {event.labels.length ? (
        <ul className="list">
          {event.labels.map((l) => <div key={l.id} className="label" style={{ backgroundColor: l.color }} />)}
        </ul>
      ) : null}
    </StyledEvent>
  )
}
  