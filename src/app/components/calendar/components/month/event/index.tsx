import { EventProps, Event as EventType } from "react-big-calendar";
import { StyledEvent } from "./styles";
import { Text } from "@ui";

export const Event = ({ title, continuesPrior, continuesAfter, ...rest } : EventProps<EventType>) => 
  <StyledEvent continuesPrior={continuesPrior} continuesAfter={continuesAfter}>
    <Text color="#fff" size={12} weight={300}>{title}</Text>
  </StyledEvent>