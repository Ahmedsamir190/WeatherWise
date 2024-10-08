import Image from "next/image";
import style from "../styles/error.module.css";
import { ErrorstructureProps } from "@/interface/InterFace";

export const Errorstructure = ({ title, image }: ErrorstructureProps) => {
  return (
    <section className={style.errorsection}>
      <div className={style.errorcontent}>
        <div>
          <h1 className="font-black capitalize">{title}</h1>
        </div>
        <div>
          <Image src={image} alt="aa" width={800} height={1000} />
        </div>
      </div>
    </section>
  );
};
