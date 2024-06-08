import "./style.css";

type TabType = {
  buttonName : string[]
}

const Tab = ( props:TabType ) => {
  const { buttonName } = props;


  return (
    <div>
      <div className="tab flex gap-2 ">
        {buttonName?.map((title: string, i: number) => {
          return <button key={i}>{title}</button>;
        })}
      </div>
    </div>
  );
};
export default Tab;
