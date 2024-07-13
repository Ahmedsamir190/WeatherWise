import { AirWindPartProps } from "@/interface/InterFace";

export const AirWindPart = ({ icon, state, degree }: AirWindPartProps) => {
  return (
    <div className="flex gap-3">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span>{state}</span>
        <span>{degree}</span>
      </div>
    </div>
  );
};
