import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { Box } from "@mui/material";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export default function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr" },
        gap: 2,
      }}
      style={{ display: "flex" }}
    >
      <Button
        style={{ margin: "0 auto" }}
        variant="outlined"
        href="#outlined-buttons"
        onClick={() => {
          //@ts-ignore
          window.location = "https://humboldt-cms.netlify.app";
        }}
        color="success"
      >
        Admin
      </Button>
    </Box>
  );
}
