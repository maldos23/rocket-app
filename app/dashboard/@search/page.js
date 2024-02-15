"use client";
import { useState } from "react";
import { addDays } from "date-fns";
import styles from "./styles.module.css";
import Image from "next/image";
import { Input, ToggleButtonGroup, IconButton } from "@mui/joy";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import { DateRangePicker } from "react-date-range";
// Icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

//  Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const btnBackgrounds = "#FF6663";

export default function Search() {
  const [openPicker, setOpenpicker] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleOpen = () => setOpenpicker(!openPicker);

  return (
    <section className={styles.container}>
      <Input
        startDecorator={<SearchOutlinedIcon />}
        sx={{
          color: "#888888",
          background: "rgba(217, 217, 217, 0.5)",
          borderRadius: "50px 0px 0px 50px",
          minWidth: "450px",
        }}
        placeholder="Buscar producto"
        variant="solid"
      />
      <ToggleButtonGroup>
        <IconButton
          color="danger"
          variant="solid"
          sx={(theme) => ({
            borderRadius: "0px",
            background: btnBackgrounds,
            color: theme.vars.palette.text.primary,
          })}
          value="bold"
        >
          <Image
            src="/icons/Filter_alt.svg"
            height={18}
            width={18}
            alt="filter-icon"
          />
        </IconButton>
        <Tooltip
          open={openPicker}
          placement="top-end"
          variant="outlined"
          arrow
          title={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                p: 1,
              }}
            >
              <DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                rangeColors={["#8b5cf6", "#1F7A1F", "#FF6663"]}
              />
            </Box>
          }
        >
          <IconButton
            onClick={handleOpen}
            sx={{
              borderRadius: "0px 50px 50px 0px",
              paddingRight: "15px",
              paddingLeft: "10px",
              borderColor: btnBackgrounds,
              color: btnBackgrounds,
            }}
            value="bold"
          >
            <Image
              style={{ color: btnBackgrounds }}
              src="/icons/Date_range.svg"
              height={18}
              width={18}
              alt="filter-icon"
            />
          </IconButton>
        </Tooltip>
      </ToggleButtonGroup>
    </section>
  );
}
