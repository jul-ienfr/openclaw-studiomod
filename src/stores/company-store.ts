import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PcCompany } from "@/types/paperclip";

interface CompanyStore {
  activeCompanyId: string | null;
  companies: PcCompany[];
  setActiveCompany: (id: string) => void;
  setCompanies: (companies: PcCompany[]) => void;
  getActiveCompany: () => PcCompany | null;
}

export const useCompanyStore = create<CompanyStore>()(
  persist(
    (set, get) => ({
      activeCompanyId: null,
      companies: [],
      setActiveCompany: (id) => set({ activeCompanyId: id }),
      setCompanies: (companies) =>
        set((state) => ({
          companies,
          activeCompanyId:
            state.activeCompanyId &&
            companies.some((c) => c.id === state.activeCompanyId)
              ? state.activeCompanyId
              : (companies[0]?.id ?? null),
        })),
      getActiveCompany: () => {
        const { companies, activeCompanyId } = get();
        return companies.find((c) => c.id === activeCompanyId) ?? null;
      },
    }),
    {
      name: "pc-company-store",
      partialize: (s) => ({ activeCompanyId: s.activeCompanyId }),
    },
  ),
);
