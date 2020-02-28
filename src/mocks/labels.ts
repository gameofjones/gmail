import { Label } from "../models/gmail"

const labels: Label[] = [
  {
    id: "1",
    name: "Inbox",
    type: "System",
    messagesUnread: 3,
  },
  {
    id: "2",
    name: "Snoozed",
    type: "System",
    messagesUnread: 0,
  },
  {
    id: "3",
    name: "Important",
    type: "System",
    messagesUnread: 1,
  },
  {
    id: "4",
    name: "Starred",
    type: "System",
    messagesUnread: 0,
  },
  {
    id: "5",
    name: "Sent",
    type: "System",
    messagesUnread: 0,
  },
  {
    id: "6",
    name: "Drafts",
    type: "System",
    messagesUnread: 1,
  },
  {
    id: "7",
    name: "Spam",
    type: "System",
    messagesUnread: 1,
    color: {
      backgroundColor: "red"      
    }
  },
  {
    id: "8",
    name: "Trash",
    type: "System",
    messagesUnread: 30,
  },
  {
    id: "9",
    name: "Salesforce",
    type: "User",
    messagesUnread: 0,
    color: {
      backgroundColor: "green"      
    }
  },
  {
    id: "10",
    name: "File Format",
    type: "User",
    messagesUnread: 2,
    color: {
      backgroundColor: "orange"      
    }
  },
]

export default labels