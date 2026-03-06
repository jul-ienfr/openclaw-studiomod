export type ReportStatus = "OK" | "ALERTE" | "CRITIQUE";

export type Report = {
  id: number;
  title: string;
  content: string;
  category: string;
  modified: number;
  agent?: string;
  status?: ReportStatus;
};
