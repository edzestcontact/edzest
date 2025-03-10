const quizData = [
  {
    id: 1,
    question: "You are managing a highly visible project for your organization. The project sponsor is regularly following up with you on the costs you are incurring to maintain product quality. Keep in mind that multiple small products are being delivered at different phases of the project. Match each of the following cost types with their correct scenario/definition.",
    terms: ["Prevention Costs", "Appraisal Costs", "Internal Failure Costs", "External Failure Costs"],
    definitions: [
      { text: "Costs incurred to prevent defects (e.g., training, quality improvement initiatives).", match: "Prevention Costs" },
      { text: "Costs related to measuring and monitoring activities (e.g., testing, inspections).", match: "Appraisal Costs" },
      { text: "Costs of fixing defects before delivery (e.g., rework, scrap).", match: "Internal Failure Costs" },
      { text: "Costs from defects found after delivery (e.g., warranty claims, lawsuits).", match: "External Failure Costs" }
    ]
  },
  {
    id: 2,
    question: "You are working with your team to finalize the project schedule. Many of your resources have strict constraints and you must be careful in assigning those activities to your resources. Match each of the following techniques with their correct scenario/definition.",
    terms: ["Resource Levelling", "Smoothing", "Crashing", "Fast Tracking"],
    definitions: [
      { text: "Many of the project resources are over-allocated and you want to balance the demand and supply of the resources.", match: "Resource Levelling" },
      { text: "You move some of the resources from non-critical path activities to critical path activities so that the project gets completed on time.", match: "Smoothing" },
      { text: "You want to shorten the duration of the project by adding more resources.", match: "Crashing" },
      { text: "You plan to do some of the project phases in parallel instead of in sequence.", match: "Fast Tracking" }
    ]
  },
  {
    id: 3,
    question: "Match Project Management approaches to relevant items.",
    terms: ["Predictive", "Agile", "Hybrid"],
    definitions: [
      { text: "Work Breakdown Structure", match: "Predictive" },
      { text: "Product Backlog", match: "Agile" },
      { text: "WBS and Burn-down chart", match: "Hybrid" }
    ]
  },
  {
    id: 4,
    question: "Match the following Quality terms with their definitions.",
    terms: ["Process Analysis", "Five Whys", "Histogram", "Pareto Chart", "Audits", "Design for X"],
    definitions: [
      { text: "Review process improvement plan.", match: "Process Analysis" },
      { text: "Helps discover root cause of problem or risk.", match: "Five Whys" },
      { text: "Relationship between two variables.", match: "Histogram" },
      { text: "Most problems caused by small number of causes.", match: "Pareto Chart" },
      { text: "Verify compliance with organizational policies.", match: "Audits" },
      { text: "Set of technical guidelines applied during the design of a product.", match: "Design for X" }
    ]
  },
  {
    id: 5,
    question: "Match the following Risk Response strategies with their definitions.",
    terms: ["Escalate", "Avoid", "Transfer", "Mitigate", "Accept"],
    definitions: [
      { text: "The proposed response exceeds Project Manager’s authority.", match: "Escalate" },
      { text: "Eliminate the threat or protect the project from its impact.", match: "Avoid" },
      { text: "Shifting ownership of a risk to a third party.", match: "Transfer" },
      { text: "Action is taken to reduce the probability of occurrence.", match: "Mitigate" },
      { text: "Existence of a threat is acknowledged but no preventive action is taken.", match: "Accept" }
    ]
  },
  {
    id: 6,
    question: "Match the following change request types with their correct scenario/definition.",
    terms: ["Corrective Action", "Preventive Action", "Defect Repair", "Updates"],
    definitions: [
      { text: "The deliverable produced does not meet two of the requirements as mentioned in the requirements documents.", match: "Corrective Action" },
      { text: "End users complained due to slowness of the product.", match: "Preventive Action" },
      { text: "All approved change requests should result in updating of plans and documents.", match: "Defect Repair" },
      { text: "Customer wants a better training document on how to use the deliverable.", match: "Updates" }
    ]
  },
  {
    id: 7,
    question: "Match the following Agile metrics with their descriptions.",
    terms: ["Velocity", "Cycle Time", "Lead Time", "Cumulative Flow Diagram"],
    definitions: [
      { text: "The amount of work completed in a sprint.", match: "Velocity" },
      { text: "The time taken to complete a task from start to finish.", match: "Cycle Time" },
      { text: "The time taken from request to delivery of a task.", match: "Lead Time" },
      { text: "A graphical representation of work items in different states.", match: "Cumulative Flow Diagram" }
    ]
  },
  {
    id: 8,
    question: "Match the following estimation techniques with their correct definitions.",
    terms: ["Analogous Estimating", "Parametric Estimating", "Bottom-up Estimating", "Three-Point Estimating"],
    definitions: [
      { text: "Using historical data from a similar project to estimate costs.", match: "Analogous Estimating" },
      { text: "Using mathematical models based on project parameters to estimate costs.", match: "Parametric Estimating" },
      { text: "Breaking down work into smaller parts and estimating each component individually.", match: "Bottom-up Estimating" },
      { text: "Considering best-case, worst-case, and most-likely scenarios for estimation.", match: "Three-Point Estimating" }
    ]
  }
];

export default quizData;