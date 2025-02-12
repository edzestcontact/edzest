const processData = [
    {
      "category": "Initiation",
      "question": "Project Charter",
      "answer": "A document that formally authorizes a project or phase and provides the project manager with authority."
    },
    {
      "category": "Initiation",
      "question": "Stakeholder Identification",
      "answer": "The process of determining who is impacted by the project and documenting relevant information about them."
    },
    {
      "category": "Initiation",
      "question": "Business Case",
      "answer": "A justification for the project, outlining the benefits, costs, and risks."
    },
    {
      "category": "Initiation",
      "question": "Assumptions Log",
      "answer": "A document capturing all assumptions and constraints identified during project initiation."
    },
    {
      "category": "Initiation",
      "question": "Project Sponsor",
      "answer": "The individual or group that provides resources and support for the project."
    },
    {
      "category": "Initiation",
      "question": "Project Objectives",
      "answer": "Specific, measurable, and time-bound goals that the project aims to achieve."
    },
    {
      "category": "Initiation",
      "question": "Project Manager",
      "answer": "The person assigned by the performing organization to lead the project team."
    },
    {
      "category": "Initiation",
      "question": "Feasibility Study",
      "answer": "An assessment of the practicality and viability of a proposed project."
    },
    {
      "category": "Initiation",
      "question": "Project Selection Methods",
      "answer": "Techniques like benefit-cost analysis, scoring models, or decision trees used to determine project viability."
    },
    {
      "category": "Initiation",
      "question": "Cost-Benefit Analysis",
      "answer": "A financial analysis that compares project costs to the benefits."
    },
    {
      "category": "Initiation",
      "question": "Project Scope",
      "answer": "A statement of what the project will accomplish, including boundaries and deliverables."
    },
    {
      "category": "Initiation",
      "question": "Stakeholder Register",
      "answer": "A document that lists all stakeholders, including their roles and interests in the project."
    },
    {
      "category": "Initiation",
      "question": "Project Vision Statement",
      "answer": "A short statement describing the long-term goal or direction of the project."
    },
    {
      "category": "Initiation",
      "question": "High-Level Requirements",
      "answer": "Broad statements of needs and conditions to be met by the project."
    },
    {
      "category": "Initiation",
      "question": "Strategic Alignment",
      "answer": "Ensuring that the project objectives align with the organization’s strategic goals."
    },
    {
      "category": "Initiation",
      "question": "Risk Identification",
      "answer": "The process of determining potential risks during project initiation."
    },
    {
      "category": "Initiation",
      "question": "Project Assumptions",
      "answer": "Things considered to be true for the purpose of planning, which may affect the project if incorrect."
    },
    {
      "category": "Initiation",
      "question": "Constraints",
      "answer": "Limitations or restrictions on project work, such as budget, time, or resources."
    },
    {
      "category": "Initiation",
      "question": "Initial Stakeholder Engagement Plan",
      "answer": "A plan for managing stakeholder communication and engagement early in the project."
    },
    {
      "category": "Initiation",
      "question": "Project Success Criteria",
      "answer": "The standards by which the project’s success will be judged."
    },
    {
      "category": "Initiation",
      "question": "Organizational Process Assets",
      "answer": "Documents, policies, templates, and other resources available from the organization to guide the project."
    },
    {
      "category": "Initiation",
      "question": "Enterprise Environmental Factors",
      "answer": "External and internal factors that influence the project’s success, such as regulations or market conditions."
    },
    {
      "category": "Initiation",
      "question": "Benefit Realization",
      "answer": "The process of ensuring that project outcomes deliver the expected value."
    },
    {
      "category": "Initiation",
      "question": "Governance Framework",
      "answer": "The structure for decision-making, oversight, and accountability on the project."
    },
    {
      "category": "Initiation",
      "question": "Project Funding Requirements",
      "answer": "The monetary resources needed to start and sustain the project."
    },
    {
      "category": "Initiation",
      "question": "Key Deliverables",
      "answer": "Major outputs or products of the project that are essential for success."
    },
    {
      "category": "Initiation",
      "question": "Initial Risk Register",
      "answer": "A document capturing potential risks identified during initiation."
    },
    {
      "category": "Initiation",
      "question": "Lessons Learned Repository",
      "answer": "A collection of lessons from past projects that can be applied to the current project."
    },
    {
      "category": "Initiation",
      "question": "Stakeholder Analysis",
      "answer": "A process to identify stakeholder expectations, interests, and their potential influence on the project."
    },
    {
      "category": "Initiation",
      "question": "Decision Criteria",
      "answer": "The standards used to evaluate and select the project based on business needs."
    },
    {
      "category": "Initiation",
      "question": "Project Objectives Statement",
      "answer": "A formalized statement outlining the overall purpose and expected outcomes of the project."
    },
    {
      "category": "Initiation",
      "question": "Project Charter Approval",
      "answer": "The formal sign-off by the project sponsor or client that allows the project to proceed."
    },
    {
      "category": "Initiation",
      "question": "SWOT Analysis",
      "answer": "An evaluation of Strengths, Weaknesses, Opportunities, and Threats as part of the initiation process."
    },
    {
      "category": "Initiation",
      "question": "Gap Analysis",
      "answer": "A method to compare the current state to the desired state, helping to define project needs."
    },
    {
      "category": "Initiation",
      "question": "Initial Schedule Estimates",
      "answer": "Early calculations of the time needed for project activities during initiation."
    },
    {
      "category": "Initiation",
      "question": "High-Level Milestone Plan",
      "answer": "A summary of key dates and deliverables at the beginning of the project."
    },
    {
      "category": "Initiation",
      "question": "Project Justification",
      "answer": "A reason why the project is necessary, including benefits or market demand."
    },
    {
      "category": "Initiation",
      "question": "Preliminary Budget",
      "answer": "An initial cost estimate for the project, subject to refinement."
    },
    {
      "category": "Initiation",
      "question": "Legal and Regulatory Requirements",
      "answer": "The laws and regulations the project must comply with."
    },
    {
      "category": "Initiation",
      "question": "Authority Matrix (RACI)",
      "answer": "A tool to define roles and responsibilities for project team members (Responsible, Accountable, Consulted, Informed)."
    },
    {
      "category": "Initiation",
      "question": "Project Mission Statement",
      "answer": "A brief description of the project’s purpose and how it aligns with organizational goals."
    },
    {
      "category": "Initiation",
      "question": "Opportunity Cost",
      "answer": "The potential benefit lost when choosing one project over another."
    },
    {
      "category": "Initiation",
      "question": "Project Charter Inputs",
      "answer": "Inputs such as the business case, agreements, and enterprise environmental factors used to create the charter."
    },
    {
      "category": "Initiation",
      "question": "High-Level Resource Estimates",
      "answer": "Preliminary estimates of the resources required to execute the project."
    },
    {
      "category": "Initiation",
      "question": "Preliminary Risk Assessment",
      "answer": "An early evaluation of risks that could affect the project’s success."
    },
    {
      "category": "Initiation",
      "question": "Roles and Responsibilities Definition",
      "answer": "A process of assigning specific tasks and duties to team members."
    },
    {
      "category": "Initiation",
      "question": "Initial Procurement Strategy",
      "answer": "A plan for acquiring resources, products, or services needed by the project."
    },
    {
      "category": "Initiation",
      "question": "Preliminary Communication Plan",
      "answer": "Early guidelines on how information will be shared with stakeholders."
    },
    {
      "category": "Initiation",
      "question": "Kick-Off Meeting",
      "answer": "An initial project meeting to discuss goals, roles, and expectations with stakeholders."
    },
    {
      "category": "Initiation",
      "question": "Project Scope Statement (Preliminary)",
      "answer": "A brief document outlining theroject’s scope, including goals, deliverables, and exclusions."
  },
  {
  category: "Planning",
  question: "Project Management Plan",
  answer: "A comprehensive document that outlines how the project will be executed, monitored, and controlled."
  },
  {
  category: "Planning",
  question: "Scope Management Plan",
  answer: "A plan that defines how the project scope will be defined, validated, and controlled."
  },
  {
  category: "Planning",
  question: "Requirements Management Plan",
  answer: "A plan that details how requirements will be collected, analyzed, and documented."
  },
  {
  category: "Planning",
  question: "Schedule Management Plan",
  answer: "A plan that outlines how the project schedule will be developed, monitored, and controlled."
  },
  {
  category: "Planning",
  question: "Cost Management Plan",
  answer: "A plan that describes how costs will be planned, structured, and controlled throughout the project."
  },
  {
  category: "Planning",
  question: "Quality Management Plan",
  answer: "A plan that outlines how project quality will be managed, ensuring that deliverables meet the required standards."
  },
  {
  category: "Planning",
  question: "Resource Management Plan",
  answer: "A plan that identifies and manages the resources needed for the project."
  },
  {
  category: "Planning",
  question: "Communications Management Plan",
  answer: "A plan that outlines how project information will be distributed and managed."
  },
  {
  category: "Planning",
  question: "Risk Management Plan",
  answer: "A plan that describes how risks will be identified, analyzed, and managed."
  },
  {
  category: "Planning",
  question: "Procurement Management Plan",
  answer: "A plan that details how the procurement processes will be managed."
  },
  {
  category: "Planning",
  question: "Stakeholder Engagement Plan",
  answer: "A plan that identifies stakeholder needs and outlines how to manage stakeholder expectations."
  },
  {
  category: "Planning",
  question: "Scope Baseline",
  answer: "A document that defines the project scope, including the work breakdown structure (WBS), project scope statement, and WBS dictionary."
  },
  {
  category: "Planning",
  question: "Schedule Baseline",
  answer: "The approved version of the project schedule that is used to track progress."
  },
  {
  category: "Planning",
  question: "Cost Baseline",
  answer: "The approved version of the project budget used to monitor costs."
  },
  {
  category: "Planning",
  question: "Work Breakdown Structure (WBS)",
  answer: "A hierarchical decomposition of the total scope of work to be carried out by the project team."
  },
  {
  category: "Planning",
  question: "Requirements Documentation",
  answer: "A detailed description of the project's functional and non-functional requirements."
  },
  {
  category: "Planning",
  question: "Requirements Traceability Matrix",
  answer: "A document that links requirements to their origins and traces them throughout the project lifecycle."
  },
  {
  category: "Planning",
  question: "Milestone List",
  answer: "A list of significant points or events in the project."
  },
  {
  category: "Planning",
  question: "Project Schedule",
  answer: "A timeline that details the planned start and finish dates for project activities."
  },
  {
  category: "Planning",
  question: "Activity List",
  answer: "A list of all activities that must be performed to produce project deliverables."
  },
  {
  category: "Planning",
  question: "Activity Attributes",
  answer: "Information that provides more detail about each activity, such as duration, resource requirements, and constraints."
  },
  {
  category: "Planning",
  question: "Network Diagram",
  answer: "A visual representation of the project’s activities and the dependencies between them."
  },
  {
  category: "Planning",
  question: "Critical Path Method (CPM)",
  answer: "A technique used to predict project duration by identifying the longest path of dependent activities."
  },
  {
  category: "Planning",
  question: "Gantt Chart",
  answer: "A type of bar chart used to illustrate a project schedule."
  },
  {
  category: "Planning",
  question: "Resource Breakdown Structure (RBS)",
  answer: "A hierarchical breakdown of project resources categorized by type and function."
  },
  {
  category: "Planning",
  question: "Resource Calendar",
  answer: "A calendar that shows the availability of project resources during the project."
  },
  {
  category: "Planning",
  question: "Cost Estimates",
  answer: "An approximation of the costs required to complete project activities."
  },
  {
  category: "Planning",
  question: "Bottom-Up Estimating",
  answer: "A method of estimating project costs by aggregating the costs of individual activities or work packages."
  },
  {
  category: "Planning",
  question: "Cost Aggregation",
  answer: "The process of summing estimated costs by work package to establish the project budget."
  },
  {
  category: "Planning",
  question: "Contingency Reserve",
  answer: "Funds set aside to address identified risks that may occur during the project."
  },
  {
  category: "Planning",
  question: "Management Reserve",
  answer: "A reserve fund for unforeseen work within the scope of the project."
  },
  {
  category: "Planning",
  question: "Earned Value Management (EVM)",
  answer: "A method of performance measurement that integrates project scope, cost, and schedule."
  },
  {
  category: "Planning",
  question: "Risk Register",
  answer: "A document that lists identified risks, their potential impacts, and mitigation strategies."
  },
  {
  category: "Planning",
  question: "Qualitative Risk Analysis",
  answer: "A process of prioritizing risks based on their probability and impact."
  },
  {
  category: "Planning",
  question: "Quantitative Risk Analysis",
  answer: "A process of numerically analyzing the impact of risks on project objectives."
  },
  {
  category: "Planning",
  question: "Risk Response Planning",
  answer: "A process of developing strategies to address risks, including mitigation, acceptance, and avoidance."
  },
  {
  category: "Planning",
  question: "Procurement Statement of Work (SOW)",
  answer: "A document that describes the procurement work to be done and the deliverables expected."
  },
  {
  category: "Planning",
  question: "Make-or-Buy Analysis",
  answer: "A technique to decide whether to produce a product internally or purchase it from an external supplier."
  },
  {
  category: "Planning",
  question: "Vendor Bid Analysis",
  answer: "A process of comparing bids from vendors to select the best offer for the project."
  },
  {
  category: "Planning",
  question: "Contracts",
  answer: "Legally binding agreements between the buyer and seller that outline deliverables, payment terms, and responsibilities."
  },
  {
  category: "Planning",
  question: "Stakeholder Register (Updated)",
  answer: "A document that contains updated information about stakeholders, including their influence and engagement levels."
  },
  {
  category: "Planning",
  question: "Stakeholder Analysis (Updated)",
  answer: "An analysis to further understand stakeholder expectations, needs, and their influence on the project."
  },
  {
  category: "Planning",
  question: "Communication Channels",
  answer: "The methods and tools used to communicate with project stakeholders."
  },
  {
  category: "Planning",
  question: "Performance Reporting",
  answer: "The process of collecting and distributing performance information, such as progress reports and earned value metrics."
  },
  {
  category: "Planning",
  question: "Quality Metrics",
  answer: "Specific measures used to determine the quality of project deliverables."
  },
  {
  category: "Planning",
  question: "Control Limits",
  answer: "The boundaries of acceptable variation in project performance."
  },
  {
  category: "Planning",
  question: "Change Management Plan",
  answer: "A plan that outlines how changes to the project will be managed and controlled."
  },
  {
  category: "Planning",
  question: "Baseline Approval",
  answer: "The process of formally approving scope, schedule, and cost baselines."
  },
  {
  category: "Planning",
  question: "Kick-Off Meeting (Planning Phase)",
  answer: "A meeting to communicate the approved project plan and establish team roles and responsibilities."
  },
  {
  category: "Planning",
  question: "Rolling Wave Planning",
  answer: "An iterative planning technique where work to be accomplished in the near term is planned in detail, while work farther in the future is planned at a higher level."
  },
      {
        "category": "Execution",
        "question": "Direct and Manage Project Work",
        "answer": "The process of leading and performing the work defined in the project management plan."
      },
      {
        "category": "Execution",
        "question": "Manage Project Team",
        "answer": "The process of tracking team member performance and resolving issues to optimize project performance."
      },
      {
        "category": "Execution",
        "question": "Manage Communications",
        "answer": "Ensuring timely and appropriate generation, collection, dissemination, and management of project information."
      },
      {
        "category": "Execution",
        "question": "Manage Stakeholder Engagement",
        "answer": "Actively engaging stakeholders to meet their needs and expectations."
      },
      {
        "category": "Execution",
        "question": "Implement Risk Responses",
        "answer": "The process of implementing agreed-upon risk response plans."
      },
      {
        "category": "Execution",
        "question": "Acquire Resources",
        "answer": "Obtaining the team members, equipment, materials, and other resources necessary for project work."
      },
      {
        "category": "Execution",
        "question": "Develop Team",
        "answer": "Improving team members' competencies, interaction, and overall team environment to enhance project performance."
      },
      {
        "category": "Execution",
        "question": "Conduct Procurements",
        "answer": "Obtaining seller responses, selecting sellers, and awarding contracts."
      },
      {
        "category": "Execution",
        "question": "Manage Quality",
        "answer": "Translating the quality management plan into actionable quality activities."
      },
      {
        "category": "Execution",
        "question": "Perform Quality Audits",
        "answer": "A structured review to ensure project processes comply with organizational policies and standards."
      },
      {
        "category": "Execution",
        "question": "Leadership",
        "answer": "Providing vision, direction, and motivation to the project team."
      },
      {
        "category": "Execution",
        "question": "Teamwork",
        "answer": "Collaborative effort by the team to achieve project goals."
      },
      {
        "category": "Execution",
        "question": "Project Charter Updates",
        "answer": "Revisions made to the project charter during execution based on approved changes."
      },
      {
        "category": "Execution",
        "question": "Deliverables",
        "answer": "Any unique and verifiable product, result, or capability produced as part of a project."
      },
      {
        "category": "Execution",
        "question": "Approved Change Requests",
        "answer": "Change requests that have been approved and are implemented during project execution."
      },
      {
        "category": "Execution",
        "question": "Work Performance Data",
        "answer": "Raw data on project work, such as status reports, used to monitor project progress."
      },
      {
        "category": "Execution",
        "question": "Work Performance Reports",
        "answer": "Reports generated based on work performance data and used for decision-making."
      },
      {
        "category": "Execution",
        "question": "Issue Log",
        "answer": "A document used to track project issues and their resolution."
      },
      {
        "category": "Execution",
        "question": "Change Log",
        "answer": "A document that tracks all changes and their status throughout the project."
      },
      {
        "category": "Execution",
        "question": "Team Performance Assessments",
        "answer": "Evaluations of team performance to identify improvements or corrections."
      },
      {
        "category": "Execution",
        "question": "Project Team Assignments",
        "answer": "Assigning specific roles and responsibilities to project team members."
      },
      {
        "category": "Execution",
        "question": "Resource Calendars",
        "answer": "A schedule that outlines when and where project resources will be used."
      },
      {
        "category": "Execution",
        "question": "Conflict Management",
        "answer": "Resolving conflicts within the team to maintain productivity."
      },
      {
        "category": "Execution",
        "question": "Motivation",
        "answer": "Encouraging team members to complete tasks effectively and meet project goals."
      },
      {
        "category": "Execution",
        "question": "Negotiation",
        "answer": "Engaging with stakeholders and team members to resolve differences and agree on project decisions."
      },
      {
        "category": "Execution",
        "question": "Interpersonal Skills",
        "answer": "Using communication, leadership, and negotiation to manage team performance and stakeholder engagement."
      },
      {
        "category": "Execution",
        "question": "Status Meetings",
        "answer": "Regular meetings to review project progress and identify any issues or changes."
      },
      {
        "category": "Execution",
        "question": "Progress Reports",
        "answer": "Reports summarizing the current state of the project, including accomplishments and risks."
      },
      {
        "category": "Execution",
        "question": "Performance Reviews",
        "answer": "Evaluating team members or vendors based on their contributions to the project."
      },
      {
        "category": "Execution",
        "question": "Information Management Systems",
        "answer": "Systems used to store and distribute project information."
      },
      {
        "category": "Execution",
        "question": "Communication Channels",
        "answer": "The paths through which information is shared with stakeholders."
      },
      {
        "category": "Execution",
        "question": "Kick-Off Meeting (Execution Phase)",
        "answer": "A meeting to start the execution of the project and set expectations."
      },
      {
        "category": "Execution",
        "question": "Task Assignment",
        "answer": "Allocating specific tasks to team members based on their skills and workload."
      },
      {
        "category": "Execution",
        "question": "Corrective Actions",
        "answer": "Steps taken to bring project performance back in line with the plan."
      },
      {
        "category": "Execution",
        "question": "Preventive Actions",
        "answer": "Steps taken to ensure future project activities do not deviate from the plan."
      },
      {
        "category": "Execution",
        "question": "Procurement Agreements",
        "answer": "Formal agreements between the buyer and seller outlining the terms of the project procurement."
      },
      {
        "category": "Execution",
        "question": "Performance Measurement Baseline",
        "answer": "The scope, schedule, and cost baselines used to compare project performance."
      },
      {
        "category": "Execution",
        "question": "Supplier Performance Review",
        "answer": "Evaluating the performance of vendors or contractors to ensure they meet project needs."
      },
      {
        "category": "Execution",
        "question": "Technical Performance Measurement",
        "answer": "Comparing technical achievements with the project plan to assess progress."
      },
      {
        "category": "Execution",
        "question": "Knowledge Management",
        "answer": "Capturing, distributing, and effectively using project knowledge to enhance decision-making."
      },
      {
        "category": "Execution",
        "question": "Benchmarking",
        "answer": "Comparing project performance with that of other similar projects or industry standards."
      },
      {
        "category": "Execution",
        "question": "Team Building Activities",
        "answer": "Activities aimed at fostering team cooperation and cohesion."
      },
      {
        "category": "Execution",
        "question": "Variance Analysis",
        "answer": "Comparing actual project results with planned performance."
      },
      {
        "category": "Execution",
        "question": "Change Control Board (CCB)",
        "answer": "A group of stakeholders responsible for reviewing and approving change requests."
      },
      {
        "category": "Execution",
        "question": "Training",
        "answer": "Providing education or practice to the project team to develop required skills and knowledge."
      },
      {
        "category": "Execution",
        "question": "Stakeholder Feedback",
        "answer": "Gathering feedback from stakeholders on project deliverables and progress."
      },
      {
        "category": "Execution",
        "question": "Supplier Contracts",
        "answer": "Legally binding agreements between the project team and external suppliers."
      },
      {
        "category": "Execution",
        "question": "Scope Validation",
        "answer": "Ensuring that deliverables meet the requirements outlined in the scope statement."
      },
      {
        "category": "Execution",
        "question": "Monitoring Project Work",
        "answer": "Keeping track of project progress and making adjustments as necessary to stay on track."
      },
      {
        "category": "Execution",
        "question": "Risk Mitigation",
        "answer": "Implementing strategies to reduce the probability or impact of identified risks."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Monitor and Control Project Work",
        "answer": "Tracking, reviewing, and reporting project progress to meet performance objectives."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Perform Integrated Change Control",
        "answer": "Reviewing all change requests, approving changes, and managing changes to deliverables and project documents."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Validate Scope",
        "answer": "Formalizing acceptance of the completed project deliverables."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Scope",
        "answer": "Monitoring the project’s scope and managing scope changes."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Schedule",
        "answer": "Monitoring the status of the project schedule and managing changes to the schedule baseline."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Costs",
        "answer": "Monitoring the status of the project budget and managing changes to the cost baseline."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Quality",
        "answer": "Monitoring and recording results of quality activities to ensure compliance with quality standards."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Resources",
        "answer": "Ensuring that the physical resources assigned and allocated to the project are available as planned."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Monitor Communications",
        "answer": "Ensuring timely and appropriate collection, creation, distribution, storage, and retrieval of project information."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Monitor Risks",
        "answer": "Monitoring identified risks, implementing risk response plans, and tracking new risks."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Procurement",
        "answer": "Managing procurement relationships, monitoring contract performance, and making changes as needed."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Monitor Stakeholder Engagement",
        "answer": "Monitoring stakeholder relationships and adjusting engagement strategies as necessary."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Change Requests",
        "answer": "Formal proposals for modifications to project scope, schedule, or cost."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Corrective Actions",
        "answer": "Actions taken to realign project performance with the project management plan."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Preventive Actions",
        "answer": "Steps to avoid potential future issues that could negatively impact the project."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Work Performance Information",
        "answer": "Performance data collected from various controlling processes, analyzed in the context of the project."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Work Performance Reports",
        "answer": "Compiled status reports, memos, and dashboards shared with stakeholders to communicate project performance."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Variance Analysis",
        "answer": "Comparing planned project performance to actual results to identify differences and their causes."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Earned Value Management (EVM)",
        "answer": "A technique for measuring project performance and progress in an objective manner."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Schedule Variance (SV)",
        "answer": "The difference between the work performed and work planned (SV = EV – PV)."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Cost Variance (CV)",
        "answer": "The difference between the earned value and the actual cost (CV = EV – AC)."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Schedule Performance Index (SPI)",
        "answer": "A measure of schedule efficiency (SPI = EV ÷ PV)."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Cost Performance Index (CPI)",
        "answer": "A measure of cost efficiency (CPI = EV ÷ AC)."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Estimate to Complete (ETC)",
        "answer": "The expected cost needed to complete all remaining project work."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Estimate at Completion (EAC)",
        "answer": "The expected total cost of completing all work, based on performance to date."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "To-Complete Performance Index (TCPI)",
        "answer": "A measure of the cost performance needed to complete the remaining work within the budget."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Forecasting",
        "answer": "Estimating future project performance based on current data."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Risk Reassessment",
        "answer": "Periodic review of risks to evaluate the project’s risk exposure."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Trend Analysis",
        "answer": "Using historical project data to identify patterns and predict future performance."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Technical Performance Measurement",
        "answer": "Comparing technical achievements to the performance baseline."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Control Charts",
        "answer": "Graphical tools used to determine if a process is within acceptable limits."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Root Cause Analysis",
        "answer": "Identifying the underlying causes of a problem or issue in the project."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Inspection",
        "answer": "A review activity to ensure deliverables meet required standards."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Performance Reviews",
        "answer": "Assessing the team’s work performance to evaluate progress toward project objectives."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Configuration Management Plan",
        "answer": "Managing changes to the project’s deliverables and ensuring consistency throughout the project."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Status Review Meetings",
        "answer": "Regularly scheduled meetings to discuss project progress and performance."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Quality Control Measurements",
        "answer": "Documented results of control quality activities that are used to verify quality standards."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Integrated Change Control",
        "answer": "Managing change requests and ensuring they are incorporated into project baselines."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Work Authorization System",
        "answer": "A formal system to ensure work is performed at the right time by the right resources."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Regression Analysis",
        "answer": "A statistical method to estimate relationships between variables for forecasting project trends."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Schedule Baseline",
        "answer": "The approved version of the project schedule used as a reference to monitor progress."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Cost Baseline",
        "answer": "The approved version of the budget used as a basis for measuring performance."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Requirements Traceability Matrix",
        "answer": "A document that links requirements throughout the project lifecycle to ensure they are met."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Scope Creep",
        "answer": "The uncontrolled expansion of project scope without adjustments to time, cost, and resources."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Audit",
        "answer": "A formal examination of project work to ensure compliance with standards and policies."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Key Performance Indicators (KPIs)",
        "answer": "Specific metrics used to measure the performance of the project."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Milestone List",
        "answer": "A list of significant points or events in the project timeline."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Stakeholder Feedback",
        "answer": "Input from stakeholders used to monitor engagement and manage expectations."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Resource Optimization",
        "answer": "Techniques used to adjust the availability and assignment of resources to optimize performance."
      },
      {
        "category": "Monitoring and Controlling",
        "question": "Risk Register Updates",
        "answer": "Documenting changes in risk conditions and mitigation strategies throughout the project."
      },
          
      
        {
          "category": "Closing",
          "question": "Project Closure",
          "answer": "The formal process of completing and concluding all project activities."
        },
        {
          category: "Closing",
          question: "Project Closure",
          answer: "The formal process of completing and concluding all project activities."
        },
        {
          category: "Closing",
          question: "Final Product, Service, or Result Transition",
          answer: "Transferring the final product or service to the client or operational team."
        },
        {
          category: "Closing",
          question: "Close Project or Phase",
          answer: "The process of finalizing all activities for the project, phase, or contract."
        },
        {
          category: "Closing",
          question: "Lessons Learned",
          answer: "Documenting what worked well and what didn’t during the project."
        },
        {
          category: "Closing",
          question: "Final Performance Reporting",
          answer: "Providing a report on the project’s performance regarding scope, cost, schedule, and quality."
        },
        {
          category: "Closing",
          question: "Contract Closure",
          answer: "Ensuring all contracts are completed, terms are met, and documentation is archived."
        },
        {
          category: "Closing",
          question: "Post-Project Evaluation",
          answer: "Conducting an evaluation to assess the project’s success and effectiveness."
        },
        {
          category: "Closing",
          question: "Stakeholder Feedback",
          answer: "Gathering input from stakeholders to evaluate project satisfaction."
        },
        {
          category: "Closing",
          question: "Final Risk Review",
          answer: "Reviewing and documenting how risks were managed throughout the project."
        },
        {
          category: "Closing",
          question: "Project Archiving",
          answer: "Safely storing all project-related documents and files for future reference."
        },
        {
          category: "Closing",
          question: "Project Audit",
          answer: "A formal review of project performance and adherence to processes."
        },
        {
          category: "Closing",
          question: "Financial Closure",
          answer: "Ensuring all project financials are reconciled and closed."
        },
        {
          category: "Closing",
          question: "Scope Verification",
          answer: "Ensuring that all deliverables have been completed and meet the defined scope."
        },
        {
          category: "Closing",
          question: "Procurement Closure",
          answer: "Ensuring all procurement activities are finalized and contracts are closed."
        },
        {
          category: "Closing",
          question: "Change Management Review",
          answer: "Reviewing all approved and implemented changes to ensure they are documented."
        },
        {
          category: "Closing",
          question: "Operational Handover",
          answer: "Transferring project deliverables to operations or maintenance teams."
        },
        {
          category: "Closing",
          question: "Compliance Audit",
          answer: "A review to ensure the project followed organizational and legal standards."
        },
        {
          category: "Closing",
          question: "Stakeholder Satisfaction",
          answer: "Ensuring that the project has met stakeholder expectations."
        },
        {
          category: "Closing",
          question: "Final Quality Review",
          answer: "A final check to ensure all quality standards were met."
        },
        {
          category: "Closing",
          question: "Team Release",
          answer: "Releasing team members from the project to return to their functional roles."
        },
        {
          category: "Closing",
          question: "Project Manager’s Final Report",
          answer: "The project manager’s final evaluation and summary of project success."
        },
        {
          category: "Closing",
          question: "Issue Log Closure",
          answer: "Ensuring all project issues have been resolved and the log is closed."
        },
        {
          category: "Closing",
          question: "Customer Acceptance",
          answer: "Formal sign-off by the customer acknowledging that the project meets their requirements."
        },
        {
          category: "Closing",
          question: "Project Success Criteria Evaluation",
          answer: "Comparing actual outcomes with the predefined success criteria."
        },
        {
          category: "Closing",
          question: "Final Stakeholder Meeting",
          answer: "Conducting a meeting to formally close the project and discuss lessons learned."
        },
        {
          category: "Closing",
          question: "Knowledge Transfer",
          answer: "Sharing lessons and insights gained with future project teams or departments."
        },
        {
          category: "Closing",
          question: "Project Endorsement",
          answer: "Official approval from the project sponsor to close the project."
        },
        {
          category: "Closing",
          question: "Final Budget Review",
          answer: "Ensuring the project stayed within budget and closing out any financial obligations."
        },
        {
          category: "Closing",
          question: "Formal Handover",
          answer: "Completing the formal transfer of project deliverables to the customer or operations."
        },
        {
          category: "Closing",
          question: "Project Closeout Checklist",
          answer: "A detailed checklist ensuring all closure activities are completed."
        },
        {
          category: "Closing",
          question: "End-of-Project Review Meeting",
          answer: "A meeting to review project outcomes and finalize documentation."
        },
        {
          category: "Closing",
          question: "Document Retention",
          answer: "Storing key project documents according to legal and organizational requirements."
        },
        {
          category: "Closing",
          question: "Team Debriefing",
          answer: "A final meeting with the project team to discuss performance and lessons learned."
        },
       
        {
          category: "Closing",
          question: "Closeout Documentation",
          answer: "Creating and storing all documents related to the project closure."
        },
        {
          category: "Closing",
          question: "Customer Handoff",
          answer: "Delivering the final product or service to the customer with complete documentation."
        },
        {
          category: "Closing",
          question: "Project Deliverables Acceptance",
          answer: "Formal acceptance of all deliverables by the customer or project sponsor."
        },
        {
          category: "Closing",
          question: "Archiving Contracts",
          answer: "Ensuring that all contracts are stored securely for future reference."
        },
        {
          category: "Closing",
          question: "Release of Project Resources",
          answer: "Releasing all project resources, including personnel, equipment, and materials."
        },
        {
          category: "Closing",
          question: "Final Stakeholder Communication",
          answer: "Sending a final communication to all stakeholders regarding project closure."
        },
        {
          category: "Closing",
          question: "End-of-Project Financial Reporting",
          answer: "Providing a final financial report detailing expenses, revenues, and variances."
        },
        {
          category: "Closing",
          question: "Audit Report",
          answer: "A formal report detailing the findings of the project audit."
        },
        {
          category: "Closing",
          question: "Supplier Evaluations",
          answer: "Conducting evaluations of suppliers and vendors used during the project."
        },
        {
          category: "Closing",
          question: "Contractor Release",
          answer: "Ensuring all contractors have completed their work and are released from the project."
        },
        {
          category: "Closing",
          question: "Risk Closure",
          answer: "Ensuring that all risks are closed and documented."
        },
        {
          category: "Closing",
          question: "Final Approval from Sponsor",
          answer: "Receiving final approval from the sponsor to officially close the project."
        },
        {
          category: "Closing",
          question: "Final Status Report",
          answer: "A report detailing the overall status of the project at closure."
        },
        {
          category: "Closing",
          question: "Project Success Celebration",
          answer: "Recognizing the efforts of the project team and celebrating the project’s success."
        },
        {
          category: "Closing",
          question: "Post-Implementation Review",
          answer: "A review conducted after the project is closed to assess its long-term benefits."
        },
        {
          category: "Closing",
          question: "Close Project Documentation",
          answer: "Ensuring all closure documents are complete, accurate, and archived."
        },
        
    ];
    
    export default processData;
    