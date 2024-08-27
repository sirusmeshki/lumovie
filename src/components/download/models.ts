export interface Devices {
  name: string;
  logo: string;
  info?: string;
  href?: string | undefined
}

export interface Platforms {
  name: string;
  logo: JSX.Element;
  devices: Devices[];
}

export interface DevicesProps {
  tabs: Platforms[];
  activeTab: String;
}

export interface TabsProps extends DevicesProps {
  setActiveTab: React.Dispatch<React.SetStateAction<String>>;
}
