import { createContext, useState } from 'react';

type Info = {
  name: string,
  email: string,
  phone: string,
}

type Plan = {
  type: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
  },
  time: string,
}

type Addons = {
  service: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
    selected: boolean,
  },
  storage: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
    selected: boolean,
  },
  profile: {
    name: string,
    priceMonthly: number,
    priceYearly: number,
    selected: boolean,
  },
}

export const PLAN_TYPES = {
  arcade: {
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90,
  },
  advanced: {
    name: 'Advanced',
    priceMonthly: 12,
    priceYearly: 120,
  },
  pro: {
    name: 'Pro',
    priceMonthly: 15,
    priceYearly: 150,
  }
}

const defaultFields = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },

  plan: {
    type: PLAN_TYPES.arcade,
    time: 'monthly',
  },

  addons: {
    service: {
      name: 'Online service',
      priceMonthly: 1,
      priceYearly: 10,
      selected: false,
    },
    storage: {
      name: 'Larger storage',
      priceMonthly: 2,
      priceYearly: 20,
      selected: false,
    },
    profile: {
      name: 'Customizable profile',
      priceMonthly: 2,
      priceYearly: 20,
      selected: false,
    },
  },
  
  currentStep: 1,

  setPersonalInfo: ({ name, email, phone }: Info) => {},
  setPlanInfo: ({ type, time }: Plan) => {},
  setAddonsInfo: ({ service, storage, profile }: Addons) => {},
  setStep: (newStep: number) => {},
}

export const infoContext = createContext(defaultFields);

export function InfoProvider({ children }: { children: React.ReactNode }) {
  const [personalInfo, setPersonal] = useState(defaultFields.personalInfo);
  const [plan, setPlan] = useState(defaultFields.plan);
  const [addons, setAddons] = useState(defaultFields.addons);

  const [currentStep, setCurrentStep] = useState(defaultFields.currentStep);

  const setPersonalInfo = ({ name, email, phone }: Info) => {
    setPersonal({ name, email, phone });
  }

  const setPlanInfo = ({ type, time }: Plan) => {
    setPlan({ type, time });
  }

  const setAddonsInfo = ({ service, storage, profile }: Addons) => {
    setAddons({ service, storage, profile });
  }

  const setStep = (newStep: number) => {
    setCurrentStep(newStep);
  }

  const value = {
    personalInfo,
    plan,
    addons,
    currentStep,
    setPersonalInfo,
    setPlanInfo,
    setAddonsInfo,
    setStep,
  }

  return <infoContext.Provider value={value}>{children}</infoContext.Provider>
}
