import type { Tab } from "~/shared/types/components";

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
