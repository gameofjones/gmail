import { Message } from "../models/gmail"

const randomDate = (): string => {
  return new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toDateString()
}

const Messages: { [key: string]: Message[] } = {
  "1": [
    {
      id: "1",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "2",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "3",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
  "2": [],
  "3": [
    {
      id: "4",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
  "4": [],
  "5": [],
  "6": [
    {
      id: "5",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
  "7": [
    {
      id: "6",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
  "8": [
    {
      id: "7",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "8",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "9",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "10",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "11",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "12",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "13",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "14",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "15",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "16",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "17",
      payload: {
        headers:[
          { name: "from", value: "Kiah Jones" },
          { name: "subject", value: "Second Email with a longer name ya'llvgvggggggggg" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
  "9": [],
  "10": [
    {
      id: "18",
      payload: {
        headers:[
          { name: "from", value: "Deep Badesha" },
          { name: "subject", value: "Third Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
    {
      id: "19",
      payload: {
        headers:[
          { name: "from", value: "author@gmail.com" },
          { name: "subject", value: "First Email" },
          { name: "date", value: randomDate() },
        ],
      }
    },
  ],
}

export default Messages
