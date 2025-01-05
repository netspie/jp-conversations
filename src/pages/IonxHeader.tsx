import {
  IonButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowUp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

type IonxBackButtonProps = {
  className?: string;
};

function IonxBackButton(props: IonxBackButtonProps) {
  const location = useLocation();
  const history = useHistory();

  const [locationPath, setLocationPath] = useState<string>();

  useEffect(() => {
    setLocationPath(location.pathname);
  }, []);

  const handleNavigate = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.split("/").slice(0, -1).join("/") || "/";
    history.push(newPath);
  };

  const hasSingleOrNoParam = (path: string): boolean => {
    const segments = path.split("/").filter((segment) => segment);
    return segments.length <= 1;
  };

  return (
    !hasSingleOrNoParam(locationPath ?? "") && (
      <IonButton className={`${props.className}`} onClick={handleNavigate} style={{ '--background': 'transparent', '--box-shadow': 'none' }}>
        <IonIcon icon={arrowUp} color="primary" />
      </IonButton>
    )
  );
}

export type PageHeaderProps = {
  children: React.ReactNode;
};

const IonxHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <IonHeader
      className="flex flex-col shadow-none md:h-14 justify-center"
      style={{ height: "fit-content" }}
    >
      {/* <div className="relative w-full h-40 bg-black">
        <div className="absolute -translate-x-8 top-3 h-24 w-64 bg-white opacity-10"></div>
        <div className="absolute right-0 bottom-0 -translate-x-8 top-3 h-24 w-64 bg-white opacity-10"></div>
      </div> */}
      <IonToolbar
        className="relative flex flex-col justify-center shadow-none h-12 md:h-14"
        style={{ "--border-width": "0", "--background": "white" }}
      >
        <IonTitle className="text-3xl font-bold uppercase text-center">
          {props.children}
        </IonTitle>
        <IonxBackButton className="absolute left-2 top-1/2 -translate-y-1/2" />
      </IonToolbar>
    </IonHeader>
  );
};

export default IonxHeader;
