const initalData = {
  talks: {
    "talk-1": {
      id: "talk-1",
      content: "The Joy of creaying art with code",
      speaker: "Andrej Muller",
      status: true,
      description:
        "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      tags: ["visualizations", "python", "physics"]
    },
    "talk-2": {
      id: "talk-2",
      content: "An Introduction towith Python Web Scraping ",
      speaker: "James Norwell",
      status: false,
      description:
        "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      tags: ["scipy", "pydata", "django"]
    },
    "talk-3": {
      id: "talk-3",
      content: "Django Testing on Steroid: pytest + Hypothesis",
      speaker: "Hiraj Yayal",
      status: true,
      description:
        "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      tags: ["flask", "django", "apache"]
    },
    "talk-4": {
      id: "talk-4",
      content:
        "Lessons from the Trenches: rewriting and re-releasing virtualenv",
      speaker: "Biral Bhah",
      status: true,
      description:
        "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      tags: ["nlp", "visualizations", "beginner", "data-processing", "numpy", "nlp", "visualizations", "beginner", "data-processing", "numpy", "nlp", "visualizations", "beginner", "data-processing", "numpy"]
    },
    "talk-5": {
      id: "talk-5",
      content:
        "Diffprivlib: Privacy-preserving machine learning with Scikit-learn",
      speaker: "Jason Andre",
      status: true,
      description:
        "Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.",
      tags: ["visualizations", "python", "physics", "http"]
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
      talksId: ["talk-5"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initalData;
