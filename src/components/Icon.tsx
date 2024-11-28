import iconsSprite from "../assets/img/icons-sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill={props.fill || "#FFB400"}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
