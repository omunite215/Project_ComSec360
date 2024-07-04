import { create } from "zustand";

type State = {
  TabValue: "CompanyInfo" | "SharesInfo" | "Directors" | "CompanySecretary";
  TabState: {
    disableSharesInfo: Boolean;
    disableDirectors: Boolean;
    disableCompanySecretary: Boolean;
  };
};

type Actions = {
    
}

export const FormStateStore = {};
