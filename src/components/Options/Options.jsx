import s from "./Options.module.css";

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={() => onFeedback("good")} className={s.btn}>
        Good
      </button>
      <button onClick={() => onFeedback("neutral")} className={s.btn}>
        Neutral
      </button>
      <button onClick={() => onFeedback("bad")} className={s.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onReset} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
