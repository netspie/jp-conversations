import { IonButton, IonIcon } from "@ionic/react";
import { arrowUp } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";

type IonxBackButtonProps = {
  className?: string;
};
export function IonxBackButton(props: IonxBackButtonProps) {
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
