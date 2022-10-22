import { Paper } from "@mui/material";
import Countdown from "react-countdown";
import React from "react";
import { styled } from "@mui/system";

const RootContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0),
  "& > *": {
    margin: theme.spacing(0.4),
    width: theme.spacing(6),
    height: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "#384457",
    color: "white",
    borderRadius: 5,
    fontSize: 10,
  },
}));

const DoneContainer = styled("span")(({ theme }) => ({
  display: "flex",
  margin: 0,
  marginBottom: theme.spacing(0.5),
  height: theme.spacing(3.5),
  padding: theme.spacing(1),
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  background: "#384457",
  color: "white",
  borderRadius: 5,
  fontWeight: "bold",
  fontSize: 18,
}));

const ItemContainer = styled("span")({
  fontWeight: "bold",
  fontSize: 18,
});

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  style,
  onComplete,
}) => {
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    hours += days * 24;
    if (completed) {
      return status ? <DoneContainer>{status}</DoneContainer> : null;
    } else {
      return (
        <RootContainer style={style}>
          <Paper elevation={0}>
            <ItemContainer>{hours < 10 ? `0${hours}` : hours}</ItemContainer>
            <span>hrs</span>
          </Paper>
          <Paper elevation={0}>
            <ItemContainer>
              {minutes < 10 ? `0${minutes}` : minutes}
            </ItemContainer>
            <span>mins</span>
          </Paper>
          <Paper elevation={0}>
            <ItemContainer>
              {seconds < 10 ? `0${seconds}` : seconds}
            </ItemContainer>
            <span>secs</span>
          </Paper>
        </RootContainer>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};
