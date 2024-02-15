import Image from "next/image";
import styles from "./styles.module.css";
import { Avatar, IconButton } from "@mui/joy";
//  Icons
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function Account() {
  return (
    <>
      <div className={styles.accountWrapper}>
        <IconButton>
          <AccessTimeOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <Avatar color="primary" variant="solid">
            <Image
              src="/icons/User_alt.svg"
              height={18}
              width={18}
              alt="filter-icon"
            />
          </Avatar>
        </IconButton>
      </div>
    </>
  );
}
