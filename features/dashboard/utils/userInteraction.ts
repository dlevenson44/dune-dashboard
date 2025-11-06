import type { SankeyNode, Tab } from "~/shared/types/components";

export const userInteractionTableTabs: Tab[] = [
  { id: "clickedLink", label: "Clicked Link" },
  { id: "scannedQR", label: "Scanned QR" },
  { id: "hybridTest", label: "Hybrid Test" },
  { id: "smsLinkClicked", label: "SMS Link Clicked" },
  { id: "downloadedAttachment", label: "Downloaded Attachment" },
  { id: "responded", label: "Responded" },
  { id: "ignored", label: "Ignored" },
  { id: "submittedCredentials", label: "Submitted Credentials" },
  { id: "enteredMFA", label: "Entered MFA" },
];

  // Sample Sankey data - this should come from API
export const userInteractionSankeyNodes: SankeyNode[] = [
  // Column 0: Start point
  { column: 0, row: 0, startColumn: true },

  // Column 1: Initial actions
  { label: "CLICKED LINK", id: "clickedLink", value: 2735, color: 'gray' as const, column: 1, row: 0 },
  { label: "SCANNED QR CODE", id: "scannedQR", value: 2735, color: 'gray' as const, column: 1, row: 1 },
  { label: "HYBRID TESTS", id: "hybridTest", value: 2735, color: 'gray' as const, column: 1, row: 2 },
  { label: "SMS LINK CLICKED", id: "smsLinkClicked", value: 2735, color: 'gray' as const, column: 1, row: 3 },
  { column: 1, row: 4 },
  { label: "DOWNLOADED ATTACHMENT", id: "downloadedAttachment", value: 2735, color: 'gray' as const, column: 1, row: 5 },
  { label: "RESPONDED TO PHISHING", id: "responded", value: 150, color: 'gray' as const, column: 1, row: 6 },
  { column: 1, row: 7 },
  { label: "IGNORED PHISHING", id: "ignored", value: 150, color: 'darkgray' as const, column: 1, row: 8 },
  { label: "REPORTED TO WATCHTOWER", value: 150, color: 'green' as const, column: 1, row: 9 },


  // Column 2: Outcomes
  { label: "ENTERED CREDENTIALS", value: 300, color: 'yellow' as const, column: 2, row: 2 },

  // Column 3: Further outcomes
  { label: "SUBMITTED CREDENTIALS", id: "submittedCredentials", value: 44, color: 'orange' as const, column: 3, row: 2 },

  // Column 4: Final stage
  { label: "ENTERED MFA", id: "enteredMFA", value: 44, color: 'red' as const, column: 4, row: 2 },
];
