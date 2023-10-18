import LogoImage from "@/assets/image/logo1.png";
import classNames from "classnames";
interface AppLogoProps {
  collapsed: boolean;
}
export default function AppLogo({ collapsed }: AppLogoProps) {
  return (
    <div className="Logo-wapper">
      <div className={classNames("logo", { smallLogo: collapsed })}>
        <img src={LogoImage} alt="" />
      </div>
      <div className={classNames("systemName", { hiddenSysName: collapsed })}>美食管理系统</div>
    </div>
  );
}
