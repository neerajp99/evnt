const initalData = {
  talks: {
    "talk-1": {
      id: "talk-1",
      content: "Take out the garbage"
    },
    "talk-2": {
      id: "talk-2",
      content: "Take out the bitch"
    },
    "talk-3": {
      id: "talk-3",
      content: "Take out the carpet"
    },
    "talk-4": {
      id: "talk-4",
      content: "kakak garbage"
  },
  "talk-5": {
    id: "talk-5",
    content: "kakak jajaajajaj"
  }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "All Talks",
      talksId: []
    },
    "column-2": {
      id: "column-2",
      title: "Shortlisted",
      talksId: ["talk-1", "talk-2", "talk-3", "talk-4"]
    },
    "column-3": {
      id: "column-3",
      title: "Finalised",
      talksId: []
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initalData;
