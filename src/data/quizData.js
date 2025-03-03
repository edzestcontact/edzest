const quizData = [
  {
    id: 1,
    question: "You are managing a highly visible project for your organization. The project sponsor is regularly following up with you on the costs you are incurring to maintain product quality. Keep in mind that multiple small products are being delivered at different phases of the project. Match each of the following cost types with their correct scenario/definition.",
    states: ["Prevention Costs", "Appraisal Costs", "Internal Failure Costs", "External Failure Costs"],
    capitals: [
      "Costs incurred to prevent defects (e.g., training, quality improvement initiatives).",
      "Costs related to measuring and monitoring activities (e.g., testing, inspections).",
      "Costs of fixing defects before delivery (e.g., rework, scrap).",
      "Costs from defects found after delivery (e.g., warranty claims, lawsuits)."
    ],
    answers: {
      "Prevention Costs": "Costs incurred to prevent defects (e.g., training, quality improvement initiatives).",
      "Appraisal Costs": "Costs related to measuring and monitoring activities (e.g., testing, inspections).",
      "Internal Failure Costs": "Costs of fixing defects before delivery (e.g., rework, scrap).",
      "External Failure Costs": "Costs from defects found after delivery (e.g., warranty claims, lawsuits)."
    }
  },
  {
    id: 2,
    question: "You are working with your team to finalize the project schedule. Many of your resources have strict constraints and you must be careful in assigning those activities to your resources. Match each of the following techniques with their correct scenario/definition.",
    states: ["Resource Levelling", "Smoothing", "Crashing", "Fast Tracking"],
    capitals: [
      "Many of the project resources are over-allocated and you want to balance the demand and supply of the resources.",
      "You move some of the resources from non-critical path activities to critical path activities so that the project gets completed on time.",
      "You want to shorten the duration of the project by adding more resources.",
      "You plan to do some of the project phases in parallel instead of in sequence."
    ],
    answers: {
      "Resource Levelling": "Many of the project resources are over-allocated and you want to balance the demand and supply of the resources.",
      "Smoothing": "You move some of the resources from non-critical path activities to critical path activities so that the project gets completed on time.",
      "Crashing": "You want to shorten the duration of the project by adding more resources.",
      "Fast Tracking": "You plan to do some of the project phases in parallel instead of in sequence."
    }
  },
  {
    id: 3,
    question: "Match Project Management approaches to relevant items.",
    states: ["Predictive", "Agile", "Hybrid"],
    capitals: [
      "Work Breakdown Structure",
      "Product Backlog",
      "WBS and Burn-down chart"
    ],
    answers: {
      "Predictive": "Work Breakdown Structure",
      "Agile": "Product Backlog",
      "Hybrid": "WBS and Burn-down chart"
    }
  },
  {
    id: 4,
    question: "Match the following Quality terms with their definitions.",
    states: ["Process Analysis", "Five Whys", "Histogram", "Pareto Chart", "Audits", "Design for X"],
    capitals: [
      "Review process improvement plan.",
      "Helps discover root cause of problem or risk.",
      "Relationship between two variables.",
      "Most problems caused by small number of causes.",
      "Verify compliance with organizational policies.",
      "Set of technical guidelines applied during the design of a product."
    ],
    answers: {
      "Process Analysis": "Review process improvement plan.",
      "Five Whys": "Helps discover root cause of problem or risk.",
      "Histogram": "Relationship between two variables.",
      "Pareto Chart": "Most problems caused by small number of causes.",
      "Audits": "Verify compliance with organizational policies.",
      "Design for X": "Set of technical guidelines applied during the design of a product."
    }
  },
  {
    id: 5,
    question: "Match the following Risk Response strategies with their definitions.",
    states: ["Escalate", "Avoid", "Transfer", "Mitigate", "Accept"],
    capitals: [
      "The proposed response exceeds Project Manager’s authority.",
      "Eliminate the threat or protect the project from its impact.",
      "Shifting ownership of a risk to a third party.",
      "Action is taken to reduce the probability of occurrence.",
      "Existence of a threat is acknowledged but no preventive action is taken."
    ],
    answers: {
      "Escalate": "The proposed response exceeds Project Manager’s authority.",
      "Avoid": "Eliminate the threat or protect the project from its impact.",
      "Transfer": "Shifting ownership of a risk to a third party.",
      "Mitigate": "Action is taken to reduce the probability of occurrence.",
      "Accept": "Existence of a threat is acknowledged but no preventive action is taken."
    }
  },
  {
    id: 6,
    question: "Match the following change request types with their correct scenario/definition.",
    states: ["Corrective Action", "Preventive Action", "Defect Repair", "Updates"],
    capitals: [
      "The deliverable produced does not meet two of the requirements as mentioned in the requirements documents.",
      "End users complained due to slowness of the product.",
      "All approved change requests should result in updating of plans and documents.",
      "Customer wants a better training document on how to use the deliverable."
    ],
    answers: {
      "Corrective Action": "The deliverable produced does not meet two of the requirements as mentioned in the requirements documents.",
      "Preventive Action": "End users complained due to slowness of the product.",
      "Defect Repair": "All approved change requests should result in updating of plans and documents.",
      "Updates": "Customer wants a better training document on how to use the deliverable."
    }
  },
  {
    id: 7,
    question: "Match the following Agile metrics with their descriptions.",
    states: ["Velocity", "Cycle Time", "Lead Time", "Cumulative Flow Diagram"],
    capitals: [
      "The amount of work completed in a sprint.",
      "The time taken to complete a task from start to finish.",
      "The time taken from request to delivery of a task.",
      "A graphical representation of work items in different states."
    ],
    answers: {
      "Velocity": "The amount of work completed in a sprint.",
      "Cycle Time": "The time taken to complete a task from start to finish.",
      "Lead Time": "The time taken from request to delivery of a task.",
      "Cumulative Flow Diagram": "A graphical representation of work items in different states."
    }
  },
  {
    id: 8,
    question: "Match the following estimation techniques with their correct definitions.",
    states: ["Analogous Estimating", "Parametric Estimating", "Bottom-up Estimating", "Three-Point Estimating"],
    capitals: [
      "Using historical data from a similar project to estimate costs.",
      "Using mathematical models based on project parameters to estimate costs.",
      "Breaking down work into smaller parts and estimating each component individually.",
      "Considering best-case, worst-case, and most-likely scenarios for estimation."
    ],
    answers: {
      "Analogous Estimating": "Using historical data from a similar project to estimate costs.",
      "Parametric Estimating": "Using mathematical models based on project parameters to estimate costs.",
      "Bottom-up Estimating": "Breaking down work into smaller parts and estimating each component individually.",
      "Three-Point Estimating": "Considering best-case, worst-case, and most-likely scenarios for estimation."
    }
  },
  {
    id: 9,
    question: "Match the following project scheduling techniques with their definitions.",
    states: ["Critical Path Method", "PERT", "Rolling Wave Planning", "Gantt Chart"],
    capitals: [
      "Identifying the longest sequence of dependent tasks.",
      "Using probabilistic time estimates to model uncertainty.",
      "Progressive detailing of the project plan over time.",
      "A bar chart representation of project tasks and timelines."
    ],
    answers: {
      "Critical Path Method": "Identifying the longest sequence of dependent tasks.",
      "PERT": "Using probabilistic time estimates to model uncertainty.",
      "Rolling Wave Planning": "Progressive detailing of the project plan over time.",
      "Gantt Chart": "A bar chart representation of project tasks and timelines."
    }
  }
];

export default quizData;
