"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { IconButton } from "@mui/joy";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

export default function navbar() {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <Image
          src="/icons/Linearicons_rocket.svg"
          quality={100}
          height={42}
          width={42}
          alt="main-icon"
        />
      </div>
      <span className={styles.expand}>
        <IconButton
          variant="solid"
          color="neutral"
          sx={{
            borderRadius: "50%",
            background: "white",
            boxShadow: "0px 6px 16px 5px rgba(119, 119, 119, 0.20)",
          }}
        >
          <Image
            src="/icons/Expand_right.svg"
            quality={100}
            height={24}
            width={24}
            alt="expand-icon"
          />
        </IconButton>
      </span>
      <div className={styles.tabsection}>
        <Tabs
          aria-label="Vertical tabs"
          orientation="vertical"
          sx={{ background: "transparent" }}
        >
          <TabList
            sx={{
              background: "transparent",
              width: "100%",
              [`& .${tabClasses.root}.Mui-selected`]: {
                display: "flex",
                justifyContent: "center",
                background: "transparent",
              },
              [`& .${tabClasses.root}::after`]: {
                background: "#FFFFFF",
                width: "4px",
                borderRadius: "0px 1px 1px 0px",
              },
            }}
          >
            <Tab indicatorPlacement="left">
              <Image
                src="/icons/desktop.svg"
                quality={100}
                height={36}
                width={36}
                alt="dashboard"
              />
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </section>
  );
}
