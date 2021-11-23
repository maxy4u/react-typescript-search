import { FC, memo, MouseEventHandler, useCallback, useRef } from "react";
import SvgSearch from "./icons/SvgSearch";

export type SearchBoxProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SearchBox: FC<SearchBoxProps> = memo(({ onClick: onSearch }) => {
  const inputRef = useRef(null);
  const onClick = useCallback(() => {
    if (inputRef?.current) {
      onSearch(inputRef.current.value);
      console.log(inputRef.current.value);
    }
  }, [onSearch, inputRef]);

  return (
    <div className="cn-search-box">
      <input type="text" ref={inputRef} />
      <div className="cn-search-box-icon" {...{ onClick }}>
        <SvgSearch color="#FFFFFF" />
      </div>
    </div>
  );
});

export default SearchBox;
