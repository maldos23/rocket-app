"use client";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import Image from "next/image";

export default function TabsMarkets() {
  return (
    <article>
      <Tabs aria-label="Stores tables" defaultValue={0}>
        <TabList
          sx={{
            [`& .${tabClasses.root}.Mui-selected`]: {
              backgroundColor: "transparent",
            },
            [`& .${tabClasses.root}`]: {
              padding: "2px 6px",
              borderRadius: "4px",
              margin: "0px 8px 4px 0px",
              fontSize: "14px",
              fontWeight: 500,
            },
            [`& .${tabClasses.root}::after`]: {
              bottom: "-6px",
            },
          }}
        >
          <Tab color="primary">
            <ListItemDecorator>
              <ImportContactsOutlinedIcon />
            </ListItemDecorator>
            Todos
          </Tab>
          <Tab color="primary">
            <ListItemDecorator>
              <Image
                src="/icons/amazon.png"
                height={19}
                width={19}
                alt="main-icon"
              />
            </ListItemDecorator>
            Amazon
          </Tab>
          <Tab color="primary">
            <ListItemDecorator>
              <Image
                src="/icons/meli.png"
                height={19}
                width={19}
                alt="main-icon"
              />
            </ListItemDecorator>
            Meli
          </Tab>
        </TabList>
        <TabPanel value={0}>Pendiente se sincronizacion</TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
    </article>
  );
}
