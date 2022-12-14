import { styles } from "./style";
import { Box } from "@mui/system";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState, useEffect } from "react";

type Props = {
  handleSavePost?(): void;
  checkSavedIcon?: boolean;
};

export function FooterIcons({ handleSavePost, checkSavedIcon }: Props) {
  const [color, setColor] = useState("grey");

  useEffect(() => {
    checkSavedIcon ? setColor("black") : setColor("grey");
  }, [checkSavedIcon]);

  function handleBookMarkClick() {
    if (handleSavePost) handleSavePost();
    if (color === "grey") {
      setColor("black");
    } else setColor("grey");
  }

  return (
    <>
      <Box sx={styles.FooterIcons.layout}>
        <BookmarkIcon
          onClick={handleBookMarkClick}
          sx={{ fill: color, cursor: "pointer" }}
        />
        <RemoveCircleOutlineIcon sx={styles.FooterIcons.details} />
      </Box>
    </>
  );
}
