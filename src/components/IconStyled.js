
import styled from "styled-components"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";



const sharedIconStyle = `
    width: 1.5em;
    height: 1.5em;
    color: #135846;
    margin: 0 1em;
`

export const DashboardStyledIcon = styled(HiOutlineMenuAlt2)`
    ${sharedIconStyle}
`

export const HeartStyledIcon = styled(FiHeart)`
    ${sharedIconStyle}
`

export const MailStyledIcon = styled(MdOutlineMail)`
    ${sharedIconStyle}
`

export const NotificationStyledIcon = styled(IoMdNotificationsOutline)`
    ${sharedIconStyle}
`

export const ChatStyledIcon = styled(MdOutlineChat)`
    ${sharedIconStyle}
`

