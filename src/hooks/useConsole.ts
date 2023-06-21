import { useEffect } from "react";

export const useConsole = <T>(data: T): void => {
    useEffect(() => {

        if (typeof data === "object") { console.log(data) } else {
      console.log(
        `%c${data}`,
        "color: red; background: wheat; font-size: 20px"
      );
}
  }, [data]);
};