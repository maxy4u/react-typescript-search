import {
  FC,
  memo,
  KeyboardEventHandler,
  useCallback,
  useRef,
  KeyboardEvent
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

  return (
    <div className="cn-search-box">
      <input type="text" ref={inputRef} onKeyPress={onKeyPress} />
      <div className="cn-search-box-icon" {...{ onClick }}>
        <SvgSearch color="#FFFFFF" />
      </div>
    </div>
  );
});

export default SearchBox;
