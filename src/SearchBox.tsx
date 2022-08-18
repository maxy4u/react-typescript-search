import {
  FC,
  memo,
  KeyboardEventHandler,
  useCallback,
  useRef,
  KeyboardEvent,
  MouseEventHandler
} from "react";
import SvgSearch from "./icons/SvgSearch";

export type SearchBoxProps = {
  onClick: (v: string) => void;
};

const SearchBox: FC<SearchBoxProps> = memo(({ onClick: onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && inputRef?.current) {
        debugger;
        onSearch(inputRef.current.value);
      }
    },
    [onSearch, inputRef]
  );
  const onClick = useCallback(() => {
    if (inputRef?.current) {
      onSearch(inputRef.current.value);
      console.log(inputRef.current.value);
    }
  }, [onSearch, inputRef]);

  const onClear: MouseEventHandler<HTMLSpanElement> = useCallback(() => {
    if (inputRef?.current) {
      inputRef.current.value = "";
      onSearch(inputRef.current.value);
    }
  }, [inputRef, onSearch]);

  return (
    <div className="cn-search-box">
      <div className="deleteIconCont">
        <input type="text" ref={inputRef} onKeyPress={onKeyPress} />
        <span className="deleteIcon" onClick={onClear}>
          x
        </span>
        <div className="cn-search-box-icon" {...{ onClick }}>
          <SvgSearch color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
});

export default SearchBox;
