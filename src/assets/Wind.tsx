export const AirWindPart = ({ icon, state, degree }) => {
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
